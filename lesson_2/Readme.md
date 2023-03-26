# Lesson 2

## A. Webpack Config
### 1. pertama kita create dulu 3 file
- webpack.common.js ni gunanya untuk config webpack yang dipake bersama
- webpack.dev.js ini untuk dev, biar dia bisa hot reload, dan jit build
- webpack.prod.js ini untuk bener bener build project, uglify code, process css dan static in semua assets

### 2. package.json config
karena ada dev dan prod gituh, maka di package.json nya juga perlu tambahan script :
```json
...
"scripts": {
    "build": "NODE_ENV=production webpack --config webpack.prod.js",
    "dev": "webpack serve --open --config webpack.dev.js"
}
...
```
jadi intinya yang di run pertama kali adalah webpack.common.js kemudian antara prod atau dev.

### 3. webpack entry
```js
const path = require('path');

// tanpa code splitting
module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'bundlekece.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

//dengan code splitting
module.exports = {
  entry: {
    index: { import: './src/js/index.js', dependOn: 'shared' },
    sum: { import: './src/js/sum.js', dependOn: 'shared' },
    shared: 'lodash',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
```
pertama adalah entry dan output, entry adalah tempat dimana js file kita letakkan. intinya kodingan utama js kita, kalo dengan code splitting entry bisa jadi object dan bisa pake dependOn jika ada module yg di pake rame rame, sehingga tidak di bundle barengan.

output adalah file js yang di hasilkan atau bundlenya yang nantinya akan di pake buat render web jadinya. karena klo pake code splitting dia ada 3 maka output kita bisa tulis "[name]" gituh untuk membedakannya.


### 4. module dan plugins
untuk module dan plugins, macem macem sih settingnya tergantung module atau plugin yang digunakan, misal klo kita pake .babel
```js
// contoh setting module babel,
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    },
  ],
},
// contoh setting plugin html
plugins: [new HtmlWebpackPlugin({})],
```

module dan plugins bisa juga kita satukan pake merge.
```js
const { merge } = require('webpack-merge');
module.exports = merge(config1, config2)
```

### 5. devServer
kalo ingin kita jalankan tapi hotreload itu bisa juga pake devserver confignya sebagai berikut :
```js
devServer: {
    contentBase: './dist',
    port: 3000
},
```
contentbase adalah folder dimana kita pengen file file tersebut nongol di browser untuk di serve disini kita pake ./dist karena di output nya gw set ke ./dist. dan port adalah port tujuan yg akan di serve.