const { test, expect } = require('@playwright/test');
const {
  activeBodyText,
  activePane,
  activeRowCheckbox,
  activeRowDownloadButton,
  activeTableText,
  activeTreeSelectedTitles,
  clearSearch,
  clickTreeNode,
  gotoFileBrowser,
  openDirectory,
  search,
  switchTab,
  waitForTableText
} = require('./helpers/app');
const { countMatchingRequests } = require('./helpers/network');

test.describe('File browser P0 flows', () => {
  test.beforeEach(async ({ page }) => {
    await gotoFileBrowser(page);
  });

  test('默认空态展示 FTP buckets，右侧无列表数据', async ({ page }) => {
    await expect(activePane(page).locator('.ant-tree-title')).toHaveText(['datang', 'omc', 'nebackup']);
    await expect(activePane(page).locator('.ant-tree-node-selected')).toHaveCount(0);
    await expect.poll(async () => activeBodyText(page)).toMatch(/No Data/);
    await expect.poll(async () => activeBodyText(page)).toMatch(/0 items/);
  });

  test('点击 FTP 根节点后加载列表并高亮', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });

    await expect(activeTreeSelectedTitles(page)).toHaveText(['datang']);
    await waitForTableText(page, /51110/);
    await expect.poll(async () => activeTableText(page)).toMatch(/62001/);
  });

  test('目录双击进入下一层，混合目录同时出现文件和目录', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });

    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');
    await waitForTableText(page, /manifest\.txt/);

    const text = await activeTableText(page);
    expect(text).toMatch(/manifest\.txt/);
    expect(text).toMatch(/52/);
    expect(text).toMatch(/53/);
    expect(text).toMatch(/mixed/);
  });

  test('输入搜索词本身不触发查询，点击搜索按钮才触发', async ({ page }) => {
    const requests = [];

    page.on('request', (request) => {
      requests.push({
        method: request.method(),
        url: request.url()
      });
    });

    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');
    await waitForTableText(page, /manifest\.txt/);

    await activePane(page).locator('.ant-input-search input').fill('manifest');
    await page.waitForTimeout(500);
    expect(
      requests.some((request) => {
        return request.url.includes('condition=manifest');
      })
    ).toBe(false);

    await search(page, 'manifest', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang')
        && request.url().includes('condition=manifest');
    });

    const text = await activeTableText(page);
    expect(text).toMatch(/manifest\.txt/);
    expect(text).not.toMatch(/mixed/);
    await expect(activePane(page).locator('.ant-input-search input')).toHaveValue('manifest');
  });

  test('清空搜索会自动重新查询并恢复完整列表', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');
    await waitForTableText(page, /manifest\.txt/);
    await search(page, 'manifest', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang')
        && request.url().includes('condition=manifest');
    });

    await clearSearch(page);
    await waitForTableText(page, /mixed/);

    const text = await activeTableText(page);
    expect(text).toMatch(/manifest\.txt/);
    expect(text).toMatch(/mixed/);
    expect(text).toMatch(/53/);
  });

  test('勾选和取消勾选不触发列表重查', async ({ page }) => {
    const requests = [];

    page.on('request', (request) => {
      requests.push({
        method: request.method(),
        url: request.url()
      });
    });

    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');
    await waitForTableText(page, /manifest\.txt/);
    await page.waitForTimeout(500);

    const before = countMatchingRequests(requests, '/uem5000/log/mt/storage/bucket/ftp/datang');

    await activeRowCheckbox(page, 'manifest.txt').check({ force: true });
    await page.waitForTimeout(300);
    await activeRowCheckbox(page, 'manifest.txt').uncheck({ force: true });
    await page.waitForTimeout(300);

    expect(countMatchingRequests(requests, '/uem5000/log/mt/storage/bucket/ftp/datang')).toBe(before);
  });

  test('单文件下载命中 download 接口', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');

    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.method() === 'GET'
        && currentRequest.url().includes('/uem5000/log/mt/storage/download/ftp/datang')
        && currentRequest.url().includes('key=51110%2F20260425%2Fmanifest.txt');
    });

    await activeRowDownloadButton(page, 'manifest.txt').click();
    await request;
  });

  test('目录下载命中 batchDownload 接口并保留尾部斜杠', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');

    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.method() === 'POST'
        && currentRequest.url().includes('/uem5000/log/mt/storage/batchDownload/ftp/datang');
    });

    await activeRowDownloadButton(page, 'mixed').click();

    const matchedRequest = await request;
    expect(matchedRequest.postData()).toBe('["51110/20260425/mixed/"]');
  });

  test('顶部批量下载支持多目录并保留尾部斜杠', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');

    await activeRowCheckbox(page, '52').check({ force: true });
    await activeRowCheckbox(page, '53').check({ force: true });
    await activeRowCheckbox(page, 'mixed').check({ force: true });

    const request = page.waitForRequest((currentRequest) => {
      return currentRequest.method() === 'POST'
        && currentRequest.url().includes('/uem5000/log/mt/storage/batchDownload/ftp/datang');
    });

    await page.getByRole('button', { name: '批量下载' }).click();

    const matchedRequest = await request;
    expect(JSON.parse(matchedRequest.postData())).toEqual([
      '51110/20260425/52/',
      '51110/20260425/53/',
      '51110/20260425/mixed/'
    ]);
  });

  test('切换到 S3 Tab 只显示 S3 buckets，切回 FTP 保留目录状态', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');

    await switchTab(page, '北向日志');

    await expect(activePane(page).locator('.ant-tree-title')).toHaveText(['gnb', 'gnb162', 'gnb1622']);
    await expect.poll(async () => activeBodyText(page)).toMatch(/No Data/);

    await clickTreeNode(page, 'gnb', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/s3/gnb');
    });
    await waitForTableText(page, /0002/);

    await switchTab(page, '网元日志');

    const text = await activeTableText(page);
    expect(text).toMatch(/manifest\.txt/);
    expect(text).toMatch(/mixed/);
  });
});
