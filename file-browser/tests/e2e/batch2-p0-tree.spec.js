const { test, expect } = require('@playwright/test');
const {
  activePane,
  activeTreeNode,
  activeTreeSelectedTitles,
  collapseTreeNode,
  clickTreeNode,
  expandTreeNode,
  gotoFileBrowser,
  openDirectory,
  switchTab,
  waitForTableText
} = require('./helpers/app');

test.describe('File browser tree behaviors', () => {
  test.beforeEach(async ({ page }) => {
    await gotoFileBrowser(page);
  });

  test('手动展开其他根节点时，当前选中节点保持高亮', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');
    await waitForTableText(page, /manifest\.txt/);

    await expandTreeNode(page, 'omc');

    await expect(activeTreeSelectedTitles(page)).toHaveText(['20260425']);
    await expect(activePane(page).locator('.ant-tree-title', { hasText: '7001' })).toBeVisible();
  });

  test('切到另一个根节点后，之前根节点的展开状态仍然保留', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');
    await waitForTableText(page, /manifest\.txt/);

    await expandTreeNode(page, 'omc');
    await clickTreeNode(page, '7001', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/omc')
        && request.url().includes('prefix=7001%2F');
    });

    await expect(activeTreeSelectedTitles(page)).toHaveText(['7001']);
    await expect(activePane(page).locator('.ant-tree-title', { hasText: '51110' })).toBeVisible();
    await expect(activePane(page).locator('.ant-tree-title', { hasText: '20260425' })).toBeVisible();
  });

  test('点击节点的父级后可以折叠，且不会被立即重新展开', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');
    await waitForTableText(page, /manifest\.txt/);

    await collapseTreeNode(page, '51110');
    await expect(activePane(page).locator('.ant-tree-title', { hasText: '20260425' })).toHaveCount(0);

    await page.waitForTimeout(500);
    await expect(activePane(page).locator('.ant-tree-title', { hasText: '20260425' })).toHaveCount(0);
  });

  test('叶子目录节点不显示展开箭头', async ({ page }) => {
    await clickTreeNode(page, 'datang', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/ftp/datang');
    });
    await openDirectory(page, '51110');
    await openDirectory(page, '20260425');
    await waitForTableText(page, /manifest\.txt/);
    await expandTreeNode(page, '20260425');
    await expect(activePane(page).locator('.ant-tree-node-content-wrapper[title="52"]')).toBeVisible();

    const leafCaret = activePane(page)
      .locator('.ant-tree-node-content-wrapper[title="52"]')
      .first()
      .locator('xpath=ancestor::li[@role="treeitem"][1]')
      .locator('.anticon-caret-down');
    await expect(leafCaret).toHaveCount(0);
  });

  test('S3 中有子目录的目录节点仍然保留展开箭头', async ({ page }) => {
    await switchTab(page, '北向日志');
    await clickTreeNode(page, 'gnb', (request) => {
      return request.url().includes('/uem5000/log/mt/storage/bucket/s3/gnb');
    });
    await openDirectory(page, '0002');
    await openDirectory(page, 'MR');
    await openDirectory(page, '2026032410');
    await waitForTableText(page, /retry/);
    await expandTreeNode(page, '2026032410');
    await expect(activePane(page).locator('.ant-tree-title', { hasText: 'retry' })).toBeVisible();

    const branchCaret = activeTreeNode(page, '2026032410').locator('.anticon-caret-down');
    await expect(branchCaret).toHaveCount(1);
  });
});
