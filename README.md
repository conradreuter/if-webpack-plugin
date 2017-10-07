# If Webpack Plugin

[![npm](https://img.shields.io/npm/v/if-webpack-plugin.svg?style=flat-square)](https://npmjs.com/package/if-webpack-plugin)


## Installation

```npm install --save-dev if-webpack-plugin```

or

```yarn add -D if-webpack-plugin```


## Usage

In your Webpack configuration in the plugins section:

```
// webpack.config.js
const IfPlugin = require('if-webpack-plugin')
const SuperCoolPlugin = require('super-cool-webpack-plugin')
const LessCoolPlugin = require('less-cool-webpack-plugin')
module.exports = {
  // ...
  plugins: [
    new IfPlugin(
      foo === 'bar',
      new SuperCoolPlugin(),
      new LessCoolPlugin()
    )
  ]
}
```

The third argument can also be omitted in order to include an empty
plugin, i.e. a plugin that simply does nothing:

```
// webpack.config.js
const IfPlugin = require('if-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  // ...
  plugins: [
    new IfPlugin(
      process.env.NODE_ENV === 'production',
      new UglifyJsPlugin()
    )
  ]
}
```
