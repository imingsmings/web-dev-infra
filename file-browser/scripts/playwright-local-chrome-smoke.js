const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const CDP_URL = process.env.PLAYWRIGHT_CDP_URL || 'http://127.0.0.1:9222';
const APP_URL = process.env.PLAYWRIGHT_APP_URL || 'http://127.0.0.1:3000/#/files';
const SCREENSHOT_DIR = process.env.PLAYWRIGHT_SCREENSHOT_DIR || '/tmp/file-browser-qa';

fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });

let sharedBrowser;

const run = async () => {
  let browser;
  let page;
  let context;

  try {
    browser = await chromium.connectOverCDP(CDP_URL);
    sharedBrowser = browser;
  } catch (error) {
    throw new Error(
      `Failed to connect to Chrome via CDP at ${CDP_URL}. Start Chrome with --remote-debugging-port=9222. Original error: ${error.message}`
    );
  }

  context = browser.contexts()[0] || await browser.newContext({ acceptDownloads: true });
  page = await context.newPage();

  const requests = [];
  page.on('request', (request) => {
    requests.push({
      method: request.method(),
      postData: request.postData(),
      url: request.url()
    });
  });

  const results = [];
  const test = async (name, fn) => {
    try {
      await fn();
      results.push({ name, status: 'passed' });
    } catch (error) {
      results.push({
        error: error && error.message ? error.message : String(error),
        name,
        status: 'failed'
      });
    }
  };

  const activePane = () => {
    return page.locator('.ant-tabs-tabpane-active').first();
  };

  const activeTreeTitle = (text) => {
    return activePane().locator('.ant-tree-title', { hasText: text }).first();
  };

  const activeRowByText = (text) => {
    return activePane().locator('tbody tr.ant-table-row').filter({ hasText: text }).first();
  };

  const activeRowCheckbox = (text) => {
    return activeRowByText(text).locator('.ant-checkbox-input');
  };

  const activeRowDownloadButton = (text) => {
    return activeRowByText(text).locator('button').last();
  };

  const activeBodyText = async () => {
    return activePane().innerText();
  };

  const activeTableText = async () => {
    return activePane().locator('.ant-table').innerText();
  };

  const waitForTableText = async (matcher) => {
    await page.waitForFunction(
      ({ pattern, source }) => {
        const pane = document.querySelector('.ant-tabs-tabpane-active');
        const table = pane && pane.querySelector('.ant-table');
        if (!table) {
          return false;
        }

        const text = table.innerText || '';
        return new RegExp(pattern, source).test(text);
      },
      {
        pattern: matcher.source,
        source: matcher.flags
      }
    );
  };

  const listRequestCount = (fragment) => {
    return requests.filter((request) => {
      return request.url.includes(fragment);
    }).length;
  };

  await page.goto(APP_URL, { waitUntil: 'networkidle' });

  await test('默认空态展示 FTP buckets，右侧无列表数据', async () => {
    assert.deepStrictEqual(await activePane().locator('.ant-tree-title').allTextContents(), ['datang', 'omc', 'nebackup']);
    assert.strictEqual(await activePane().locator('.ant-tree-node-selected').count(), 0);
    assert.match(await activeBodyText(), /No Data/);
    assert.match(await activeBodyText(), /0 items/);
    await page.screenshot({
      fullPage: true,
      path: path.join(SCREENSHOT_DIR, 'default-empty.png')
    });
  });

  await test('点击 FTP 根节点后加载列表并高亮', async () => {
    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });

    await activeTreeTitle('datang').click();
    await request;
    await page.waitForSelector('.ant-tabs-tabpane-active tbody tr.ant-table-row');

    assert.deepStrictEqual(await activePane().locator('.ant-tree-node-selected .ant-tree-title').allTextContents(), ['datang']);
    assert.match(await activeTableText(), /51110/);
    assert.match(await activeTableText(), /62001/);
  });

  await test('目录双击进入下一层，混合目录同时出现文件和目录', async () => {
    await activeRowByText('51110').dblclick();
    await page.waitForLoadState('networkidle');
    await activeRowByText('20260425').dblclick();
    await page.waitForLoadState('networkidle');

    const text = await activeTableText();
    assert.match(text, /manifest\.txt/);
    assert.match(text, /52/);
    assert.match(text, /53/);
    assert.match(text, /mixed/);

    await page.screenshot({
      fullPage: true,
      path: path.join(SCREENSHOT_DIR, 'ftp-mixed-dir.png')
    });
  });

  await test('输入搜索词本身不触发查询，点击搜索按钮才触发', async () => {
    const before = listRequestCount('/uem5000/log/mt/storage/bucket/ftp/datang');
    await activePane().locator('.ant-input-search input').fill('manifest');
    await page.waitForTimeout(500);
    assert.strictEqual(listRequestCount('/uem5000/log/mt/storage/bucket/ftp/datang'), before);

    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang')
        && currentRequest.url().includes('condition=manifest');
    });

    await activePane().locator('.ant-input-search-button').click();
    await request;
    await page.waitForLoadState('networkidle');

    const text = await activeTableText();
    assert.match(text, /manifest\.txt/);
    assert.doesNotMatch(text, /mixed/);
    assert.strictEqual(await activePane().locator('.ant-input-search input').inputValue(), 'manifest');
  });

  await test('清空搜索会自动重新查询并恢复完整列表', async () => {
    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang')
        && !currentRequest.url().includes('condition=');
    });

    await activePane().locator('.ant-input-search input').fill('');
    await request;
    await waitForTableText(/mixed/);

    const text = await activeTableText();
    assert.match(text, /manifest\.txt/);
    assert.match(text, /mixed/);
    assert.match(text, /53/);
  });

  await test('勾选和取消勾选不触发列表重查', async () => {
    const before = listRequestCount('/uem5000/log/mt/storage/bucket/ftp/datang');

    await activeRowCheckbox('manifest.txt').check({ force: true });
    await page.waitForTimeout(400);
    await activeRowCheckbox('manifest.txt').uncheck({ force: true });
    await page.waitForTimeout(400);

    assert.strictEqual(listRequestCount('/uem5000/log/mt/storage/bucket/ftp/datang'), before);
  });

  await test('单文件下载命中 download 接口', async () => {
    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.method() === 'GET'
        && currentRequest.url().includes('/uem5000/log/mt/storage/download/ftp/datang')
        && currentRequest.url().includes('key=51110%2F20260425%2Fmanifest.txt');
    });

    await activeRowDownloadButton('manifest.txt').click();
    await request;
  });

  await test('目录下载命中 batchDownload 接口并按 zip 打包', async () => {
    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.method() === 'POST'
        && currentRequest.url().includes('/uem5000/log/mt/storage/batchDownload/ftp/datang');
    });

    await activeRowDownloadButton('mixed').click();

    const matchedRequest = await request;
    assert.strictEqual(matchedRequest.postData(), '["51110/20260425/mixed"]');
  });

  await test('顶部批量下载支持文件和目录混选', async () => {
    await activeRowCheckbox('manifest.txt').check({ force: true });
    await activeRowCheckbox('mixed').check({ force: true });

    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.method() === 'POST'
        && currentRequest.url().includes('/uem5000/log/mt/storage/batchDownload/ftp/datang');
    });

    await page.getByRole('button', { name: '批量下载' }).click();

    const matchedRequest = await request;
    const paths = JSON.parse(matchedRequest.postData());
    assert.deepStrictEqual([...paths].sort(), ['51110/20260425/manifest.txt', '51110/20260425/mixed'].sort());
  });

  await test('切换到 S3 Tab 只显示 S3 buckets，切回 FTP 保留目录状态', async () => {
    await page.locator('.ant-tabs-tab', { hasText: '北向日志' }).click();
    await page.waitForLoadState('networkidle');

    assert.deepStrictEqual(await activePane().locator('.ant-tree-title').allTextContents(), ['gnb', 'gnb162', 'gnb1622']);
    assert.match(await activeBodyText(), /No Data/);

    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.url().includes('/uem5000/log/mt/storage/bucket/s3/gnb');
    });

    await activeTreeTitle('gnb').click();
    await request;
    await waitForTableText(/0002/);
    assert.match(await activeTableText(), /0002/);

    await page.locator('.ant-tabs-tab', { hasText: '网元日志' }).click();
    await page.waitForLoadState('networkidle');

    const text = await activeTableText();
    assert.match(text, /manifest\.txt/);
    assert.match(text, /mixed/);
  });

  await test('目录 hasChildren 接口值符合叶子节点显示逻辑', async () => {
    const response = await fetch('http://127.0.0.1:3100/uem5000/log/mt/storage/bucket/s3/gnb?prefix=0002/MR/');
    const json = await response.json();
    const directories = json.data.objects.filter((item) => item.directory);
    const map = Object.fromEntries(directories.map((item) => [item.name, item.hasChildren]));

    assert.strictEqual(map['2026032408'], false);
    assert.strictEqual(map['2026032409'], false);
    assert.strictEqual(map['2026032410'], true);
  });

  await page.close();
  await browser.close();

  const failed = results.filter((result) => result.status === 'failed');
  console.log(JSON.stringify({ results, screenshotDir: SCREENSHOT_DIR }, null, 2));

  if (failed.length) {
    process.exit(1);
  }
};

run().catch((error) => {
  console.error(error.stack || error.message || String(error));
  if (sharedBrowser) {
    try {
      sharedBrowser.close();
    } catch (disconnectError) {
      // ignore disconnect failures during error handling
    }
  }
  process.exit(1);
});
