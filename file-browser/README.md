# File Browser

React 16 + Ant Design 3 based file browser workbench with:

- left directory tree
- query-string driven navigation
- file table, search, sort, and type filter
- preview modal for image, PDF, and text
- mock file-system service and API declaration files

## Scripts

```bash
npm install
npm start
```

Open `http://localhost:3000/files`.

## Structure

```txt
src/pages/file-browser
src/services/fileBrowser
```

`src/services/fileBrowser/api.js` keeps API endpoint declarations.
`src/services/fileBrowser/schema.js` keeps response shape declarations.
