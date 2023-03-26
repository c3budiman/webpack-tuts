# Webpack tuts 

# Lesson 1 what is webpack?

![webpack](lesson_1/public/images/webpack.png)

## Webpack adalah module bundler
apa sih module bundler? singkat cerita coba deh bayangin lu install lodash tapi ga pake next js atau react. pure di html dan css biasa, gimana caranya?

pas jaman sebelum ada webpack atau module bundler lainnya yaitu jaman jaman jquery dan js vanilla. ya tentu saja di copy file source code nya taruh di assets dan jalanin pake tag di file html seperti ini kan?
```html
<script src="path/to/lodash.js"> </script>
```
salah satu drawback dari jaman dulu adalah, gimana kalo module passport buat login pake gmail ternyata dependent dengan module axios dan module axios dependent ke fetch dan begitu pula dengan module lain? sampai lu copy dan import berkali kali dan projek lu ga dibayar bayar karena lu ngerjain berbulan bulan buat import salah satu module ajah

well jaman sudah berganti di tahun 2012 an, webpack pun release dan memudahkan kita untuk memakai module module third party, selain itu juga memudahkan kita untuk mengatur keseleruhan source code. well benefit nya to be precise adalah sebagai berikut :

- Module bundling — Webpack bundles all the modules required by an application into a single file or a few files depending on the configuration.
- Code splitting — Webpack can split code into smaller chunks and load them on demand, reducing the initial load time of an application.
- Loaders — Webpack can transform files such as CSS, images, and fonts into modules that can be included in the bundle.
- Plugins — Webpack has a wide range of plugins that can be used to optimize code, generate assets, and customize the build process.

sekarang pertanyaan gw sama, gimana caranya kalo mau pake lodash tapi setelah ada webpack di halaman yang pake html dan css doang no react no next js no vite dll? cek readme.md lesson_1 untuk jawabannya.

# Lesson 2 Getting deeper

## Other Usecase of webpack
ada beberapa config yang bisa dilakukan di webpack, seperti sudah dijelaskan di usecase webpack ada 3 topik utama yang akan kita cover di lesson 2. karena module bundling udah gw jelasin kan ya di lesson 1.

## A. Basic config and loaders
ada beberapa masalah di lesson 1, yaitu gimana klo halaman nya multipage? gimana kalo init point nya bukan src/index.js. gimana kalo kita ingin pake scss dll. ya jawabannya ada di lesson 2.

## B. Code Splitting
oh yeah code splitting is great kalo lu punya banyak halaman atau modules dan well ga mungkin di jadiin satu js yang gede ajah. karena akan ngaruh di first contentful pain. dan load index nya.

## C. Plugin Webpack
config kebanyakan? plugin solusinya.

# Lesson 3 Webpack dalam React and NextJS

topik ini sebenernya cuman contoh contoh aja gimana nerapin webpack di dalam projek yang webpack nya sudah di atur/di config sama library atau framework, tapi ingin menambahkan kegunaan atau config tambahan.