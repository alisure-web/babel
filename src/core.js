/**
 * Created by ialis on 2017/6/10.
 */

/*
* 使用babel-core模块对某些代码调用Babel的API进行转码
* */
var babelCore = require("babel-core");

/* 转换语句 */
var es6Code = "let x = n => n + 1";
var result = babelCore.transform(es6Code, {
    presets: ["es2015"]
});
console.log(result.code);
console.log();
console.log(result.map);
console.log();
console.log(result.ast);
console.log();

/* 转换文件: 异步 */
babelCore.transformFile("babel.js",{
    presets: ["es2015"]
}, function (err, result) {
    console.log("----------------------------------");
    console.log("transformFile");
    console.log("----------------------------------");
    console.log(result.code);
    console.log("----------------------------------");
});

/* 转换文件: 同步 */
var fileCode = babelCore.transformFileSync("babel.js",{
    presets: ["es2015"]
});
console.log("----------------------------------");
console.log("transformFileSync");
console.log("----------------------------------");
console.log(fileCode.code);
console.log("----------------------------------");
