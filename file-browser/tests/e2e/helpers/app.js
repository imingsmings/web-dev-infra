const { expect } = require('@playwright/test');

const gotoFileBrowser = async (page) => {
  await page.goto('/#/files', { waitUntil: 'networkidle' });
};

const activePane = (page) => {
  return page.locator('.ant-tabs-tabpane-active').first();
};

const activeTreeTitle = (page, text) => {
  return activePane(page).locator('.ant-tree-title', { hasText: text }).first();
};

const activeTreeSelectedTitles = (page) => {
  return activePane(page).locator('.ant-tree-node-selected .ant-tree-title');
};

const activeTreeNode = (page, text) => {
  return activeTreeTitle(page, text).locator('xpath=ancestor::*[contains(@class, "ant-tree-treenode")][1]');
};

const activeTreeSwitcher = (page, text) => {
  return activeTreeNode(page, text).locator('.ant-tree-switcher').first();
};

const activeRowByText = (page, text) => {
  return activePane(page).locator('tbody tr.ant-table-row').filter({ hasText: text }).first();
};

const activeRowCheckbox = (page, text) => {
  return activeRowByText(page, text).locator('.ant-checkbox-input');
};

const activeRowDownloadButton = (page, text) => {
  return activeRowByText(page, text).locator('button').last();
};

const activeTable = (page) => {
  return activePane(page).locator('.ant-table').first();
};

const activeTableText = async (page) => {
  return activeTable(page).innerText();
};

const activeBodyText = async (page) => {
  return activePane(page).innerText();
};

const waitForTableText = async (page, matcher) => {
  await expect.poll(async () => {
    return activeTableText(page);
  }).toMatch(matcher);
};

const clickTreeNode = async (page, text, requestPredicate) => {
  const request = requestPredicate
    ? page.waitForRequest(requestPredicate)
    : Promise.resolve();

  await activeTreeTitle(page, text).click();
  await request;
};

const expandTreeNode = async (page, text, requestPredicate) => {
  const request = requestPredicate
    ? page.waitForRequest(requestPredicate)
    : Promise.resolve();

  await activeTreeSwitcher(page, text).click();
  await request;
  await page.waitForTimeout(300);
};

const collapseTreeNode = async (page, text) => {
  await activeTreeSwitcher(page, text).click();
  await page.waitForTimeout(300);
};

const openDirectory = async (page, text) => {
  await activeRowByText(page, text).dblclick();
  await page.waitForLoadState('networkidle');
};

const search = async (page, value, requestPredicate) => {
  const pane = activePane(page);
  await pane.locator('.ant-input-search input').fill(value);

  const request = requestPredicate
    ? page.waitForRequest(requestPredicate)
    : Promise.resolve();

  await pane.locator('.ant-input-search-button').click();
  await request;
  await page.waitForLoadState('networkidle');
};

const clearSearch = async (page, requestPredicate) => {
  const pane = activePane(page);
  const request = requestPredicate
    ? page.waitForRequest(requestPredicate)
    : Promise.resolve();

  await pane.locator('.ant-input-search input').fill('');
  await request;
  await page.waitForLoadState('networkidle');
};

const switchTab = async (page, text) => {
  await page.locator('.ant-tabs-tab', { hasText: text }).click();
  await page.waitForLoadState('networkidle');
};

module.exports = {
  activeBodyText,
  activePane,
  activeTreeNode,
  activeRowByText,
  activeRowCheckbox,
  activeRowDownloadButton,
  activeTableText,
  activeTreeSelectedTitles,
  activeTreeSwitcher,
  activeTreeTitle,
  collapseTreeNode,
  clearSearch,
  clickTreeNode,
  expandTreeNode,
  gotoFileBrowser,
  openDirectory,
  search,
  switchTab,
  waitForTableText
};
