# Lesson 1

1. ya tentu saja install aja pake npm
2. npm init
3. npm install lodash
4. npm install --save-dev webpack webpack-cli kalo leled coba npm i -g webpack lalu npm i webpack-cli

lalu di package.json nya, di bagian script tinggal tambah build seperti ini:
```json
...
"scripts": {
    "build" : "webpack"
},
...
```
5. bikin public/index.html, dan src/index.js, intinya import si src/index.js di public/index.html dan coba jalanin console.log atau apa disana. terus coba import lodash si src/index.js nya terus jalanin, pasti error tapi step selanjutnya bakalan ngefix itu
6. jalanin dah
```shell
npm run build
```
7. di index.html nya arahin ke dist/main.js yang baru aja di create sama si webpack. akses lagi tuh html dan boom lodash works
8. selamat you already learn how to use webpack the really basic stuff tho

troubleshooting, hah ga bisa buka karena ga tau pathnya sans? lu bisa bikin server dummy pake python3 :

```sh
python -m http.server 3000
```

lalu akses localhost:3000/public nya