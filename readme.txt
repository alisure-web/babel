Babel是一个广泛使用的转码器.
可以将ES6代码转为ES5代码，从而在现有环境执行。

http://www.ruanyifeng.com/blog/2016/01/babel.html

-1.IDE设置
    （http://www.jianshu.com/p/b4390919a5b5）
    1.设置IDEA可用ES6
        Settings > Languages & Frameworks > JavaScript
        设置为ECMAScript6即可。


0.配置文件：.babelrc
    {
      "presets": [
        "es2015",
        "stage-2"
      ],
      "plugins": []
    }

1.安装babel:
    # ES2015转码规则
    npm install --save-dev babel-preset-es2015

    # ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
    npm install --save-dev babel-preset-stage-0
    npm install --save-dev babel-preset-stage-1
    npm install --save-dev babel-preset-stage-2
    npm install --save-dev babel-preset-stage-3

2.安装命令行转码babel-cli：
    全局安装：
        npm install --global babel-cli
    本地安装：
        npm install --save-dev babel-cli

3.配置package：
    "scripts": {
        "build": "babel src -d dist"
    }

4.运行：
    npm run build

5.scripts中的命令解释：
    # 转码结果输出到标准输出
    babel example.js

    # 转码结果写入一个文件
    # --out-file 或 -o 参数指定输出文件
    babel example.js --out-file compiled.js
    # 或者
    babel example.js -o compiled.js

    # 整个目录转码
    # --out-dir 或 -d 参数指定输出目录
    babel src --out-dir lib
    # 或者
    babel src -d lib

    # -s 参数生成source map文件
    babel src -d lib -s

6.babel-node:
    babel-cli工具自带一个babel-node命令，提供一个支持ES6的REPL环境。
    它支持Node的REPL环境的所有功能，而且可以直接运行ES6代码。

    测试：
        babel-node src/babel.js

7.babel-register
    babel-register模块改写require命令，为它加上一个钩子。
    此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码。

    babel-register只会对require命令加载的文件转码，而不会对当前文件转码

    安装：
        npm install --save-dev babel-register

    测试（register.js）：
        require("babel-register");
        require("./babel.js");

8.babel-core
    使用babel-core模块对某些代码调用Babel的API进行转码。

    安装：
        npm install babel-core --save

    测试：（core.js）

9.babel-polyfill
    Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，
    比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，
    以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。

    安装：
        npm install --save babel-polyfill

    使用：
        在脚本的头部加入：
            require('babel-polyfill');

