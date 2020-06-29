# webpack-remove-console

Webpack-remove-console plugin clears console by replacing console functions during bundling。

> NOTE: Support Webpack4 and Webpack5

## Installation
The plugin is available via npm:

```bash
npm install --save-dev webpack-remove-console
# or
yarn add -d webpack-remove-console
```

## Usage 

```js
var WebpackRemoveConsole = require("webpack-remove-console");
 
module.exports = {
 plugins: [
    new WebpackRemoveConsole();
  ]
}
```

