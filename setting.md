{
"workbench.colorTheme": "Dracula",
"workbench.iconTheme": "material-icon-theme",

//'extension
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnPaste": false, // required
"editor.formatOnType": true, // required
"editor.formatOnSave": true, // optional
"editor.formatOnSaveMode": "file", // required to format on save

"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
},

"liveServer.settings.CustomBrowser": "chrome",
"liveSassCompile.settings.showOutputWindowOn": "Error",
"liveSassCompile.settings.watchOnLaunch": true,
"code-runner.clearPreviousOutput": true,

"editor.tabSize": 2,
"editor.fontSize": 18,
"explorer.confirmDelete": false,
"prettier.jsxSingleQuote": true,
"prettier.singleQuote": true,

"[css]": {
"editor.suggest.insertMode": "replace"
},

"files.associations": {
// "\*.js": "javascriptreact"
},

//? Better Comments Setting
"better-comments.tags": [
{
"tag": "!",
"color": "#FF2D00",
"strikethrough": false,
"underline": false,
"backgroundColor": "transparent",
"bold": false,
"italic": false
},
{
"tag": "?",
"color": "#18122B",
"strikethrough": false,
"underline": false,
"backgroundColor": "#facddc",
"bold": false,
"italic": false
},
{
"tag": "'",
"color": "#16213E",
"strikethrough": false,
"underline": false,
"backgroundColor": "#FEE0C0",
"bold": false,
"italic": false
// "#DEBACE"
},

    {
      "tag": "#",
      "color": "#13315c",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "#E5989B",
      "bold": true,
      "italic": false
    },
    {
      "tag": "todo",
      "color": "#FF8C00",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "transparent",
      "bold": false,
      "italic": false
    },
    {
      "tag": "*",
      "color": "#98C379",
      "strikethrough": false,
      "underline": false,
      "backgroundColor": "white",
      "bold": false,
      "italic": false
    }

],

}
