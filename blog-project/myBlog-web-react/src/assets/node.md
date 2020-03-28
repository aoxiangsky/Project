# NodeJs

## 内置对象

### 分类

全局对象：何时何处都能访问
核心对象：向系统索要，引入即可使用
自定义对象：按路径引入使用

#### process(全局对象)

- 每个系统的环境变量几乎不一样，可以利用环境变量中的某个具体特定的值来区分不同的机器

- `process.env`是一个对象，我们可以通过其属性名来获取具体的环境变量的值
- 设置一个特定的环境变量，以达到简单区分不同的机器，从而针对生产/开发环境运行不同的效果
  
- `peocess.argv`获取命令行参数

#### filename/dirname（全局对象）

- _filename 获取当前文件的目录，绝对路径
- _dirname当前运行文件的绝对路径

#### nodejs实现规范

- CommonJS：规范JavaScript语言作为后端语言运行的标准
  - 具备什么能力，该怎么做，比如具备的服务器功能/可以操作文件...
  - 模块应该怎么写：Module：
    - 依赖一个模块 require("模块名id")
    - 需要被模块依赖 module.exports= 给外部的数据
    - 一个文件是一个模块哦

#### 核心对象（path）

- 1:`const path = require('path');`

- 路径 ----> 在处理路径的时候很擅长，但是，其不负责判断路径是否存在文件
- 拼接并修正路径`path.join(_dirname,'a','b');`以当前目录a/b
- 相对路径获取绝对路径 `path.resolve('xxx')`
- 接收一个合法的路径字符串，转换成一个对象
  - `let pathObj = path.parse(mypath)`

- 接收一个路径对象，转换成一个字符串路径
  - `let str = path.format(pathObj)`

```javascript
{
    root:'c:\\',
    dir:'C:\\Users\\孙悟空',
    base:'金箍棒.txt',//这属性可以用于修改文件名和后缀
    ext:'.txt',
    name:'金箍棒'
}

```

- 注意：path对象是方便我们操作路径的，对于获取来讲：parse解析成对象，format转换成字符串，join拼接并修正...对于修改路径对象来讲，可以用base属性更改，不能用 name,ext属性修改

#### 模块

- 弊端
  - 在js中要涉及到逻辑，还要再html中，为逻辑对象考虑引用顺序
  - 所有对象默认都是全局对象，命名冲突
  - commonjs规范
  - 一个文件就是一个模块
    - 导入require('./xxx.js')
    - 导出用module.exports = xxx;
    - 在每一个模块内声明的变量属于模块内的作用域

##### fs文件模块

- 文件读写
- 其他功能
- 扩展介绍

###### 操作文件对象

- IO

  - I :input输入
  - O:output 输出
  - 文件的操作就是IO

- 复制文件的过程,  I: 通过计算机,存储文件到剪切板

  - 粘贴到指定目录:   O: 通过计算机,将剪切板上的数据,写出到 指定目录

- node中有两种IO的操作

  - 同步IO

    - 一行代码(读文件)不执行完毕...后续代码不能执行

  - 异步IO (建议)

    - 一行代码(读写文件) 不执行完毕(正在读写中) ... 后续代码也可以执行

  - 代码体验:

    - 读写文件  

    - ```js
      const fs = require('fs'); //必须这个名称
      //读 fs.readFile(路径,回调函数);
      //写 fs.writeFile(路径,数据,回调函数);
      ```

    - 总结: 异步的读/写文件  参数1:都是路径,可以相对可以绝对,最后一个参数都是回调函数,回调函数的参数中错误对象优先

- 同步和异步IO的区别: 同步IO会阻塞后续代码执行,异步IO不会阻塞后续代码执行

#### nginx负载均衡

- ![1531408911142](assets/1531408911142.png)

#### 包（文件夹）

- 多个文件，有效的被组织与管理的一个单位
- 留一个入口

##### npm||yarn

- 自己先有一个包描述文件(package.json)
- 创建一个包描述文件 `npm init [-y]`
- 会根据当前的文件夹来自动生成包名（不允许中文，不允许大写英文字母）
- 下载一个包 `npm install art-template jquery@1.5.1 --save`

  - 记录依赖`--save`
- 根据package.json文件中的`dependencies`属性恢复依赖

  - 恢复包 `npm install`
- 卸载一个包 `npm uninstall jquery@1.5.1 --save`
- 查看包的信息

  - `npm info jquery`
- 查看包的信息中的某个字段(版本)

  - `npm info jquery versions`
- 查看包的文档

  - `npm docs jquery`
- 安装全局命令行工具

  - `npm install -g http-server`
- 卸载全局命令行工具

  - `npm uninstall -g http-server`
- 查看全局包的下载路径

  - `npm root -g`

- 修改存储目录

  - `npm config set prefix "D:\xxx"`
  - 不要node_modules
  - 接看，修改环境变量中的path属性
    - 添加或改为`D:\xxx`
    - 目的就是为了在任意目录启动xxx.cmd

  - 重启命令行

##### 包的区别

- 凡是我们下载到项目的node_modules中的包，基本都是拿来做`require(xxx)`调用其函数和属性
- 还有一类属于工具性的包（全局命令行工具）
  - 在命令行直接用的

- 全局工具和项目包的区别
  - 全局工具哪个目录都可以通过命令行启动，通过任意目录启动该工具，给相对路径传递任意目录的文件使用该工具
  - 项目中的包，部分具备命令行工具的能力，但需要命令行环境变量的支持

##### nrm是npm的镜像源管理工具

- 1:全局安装 `npm install -g nrm`
- 2:查看当前可选的镜像源 `nrm ls`
- 3:切换镜像源 `nrm use taobao`
- 选修：添加自己公司私有源`nrm add name http://www.xxx.xxx/`

##### 包的加载机制

- 我们未来可能需要辨识一个包中，入口是否是我们想要的启动程序
- 逐级向上查找node_module,直到盘符根目录
- 1:查找node_modules下的包名文件夹中的main属性(常用)
- 2:不常用:查找node_modules下的包名.js
- 3:查找node_modules下的包名文件夹中的index.js(常用)
- 逐级向上，node_modules，要么main属性，要么index.js

### http核心模块

---

#### http超文本传输协议

- 协议至少双方 -> http双方！！

  - 客户端(浏览器)    -> 服务器 BS

  - 原生应用(QQ)  -> 服务器 CS

- 就是数据如何传输
- 特点
  - 一问一答（现有请求，后有响应）
  - 5大特点
    - 支持客户/服务器模式；
    - 简单快速
    - 灵活
    - 无连接
    - 无状态

#### 请求与响应交互的过程

- 见图

#### 主体对象(核心对象http)

- 服务器对象`http.createServer()`
- 客户端对象`http.request({host:'www.baidu.com'})`
- 请求报文对象(对于服务器来说，是可读) req
- 响应报文对象(对于服务器来说，是可写) res

#### 状态码分类

- 1XX    临时相应正在进行中
- 2XX    完成
- 3XX    重定向
- 4XX    请求错误
- 5XX    服务器异常

#### 创建服务器步骤

- 1:引入http核心对象
- 2:利用http核心对象的.createServer(callback); 创建服务器对象
- 3:使用服务器对象.listen(端口,ip地址) 开启服务器
- 4:callback(req,res) 根据请求处理响应

#### 请求对象

- 请求首行中的url `req.url`
- 请求首行中的请求方式 `req.method`
- 请求头中的数据`req.headers`  是一个对象
- 头信息中，也可以作为与服务器交互的一种途径

#### 获取请求体数据

- 代码对比

- 浏览器:  $('#xx').on('submit',function(e){    })
- 服务器:  req.on('data',function(d){ d.toString(); })

#### querystring核心对象

- querystring.parse(formStr)
- username=jack&password=123转换成如下
- { username: 'jack', password: '123' }

#### 响应对象

- 响应首行 `res.writeHead(状态码)`
- 写响应头

  - 一次性写回头信息

    - `res.writeHead(200,headers)`

  - 多次设置头信息

    - `res.setHeader(key,value);`

- 写响应体

  - 一次性写回响应体

    - `res.end();`

  - 多次写回响应体

    - `res.write();`

#### 请求与响应

- 头行体
- content-type是对请求或者响应体数据，做出的说明

#### 响应体数据

- res.write('字符串'||读出文件的二进制数据)
- res.end('字符串'||读出文件的二进制数)

#### 总结梳理

- http故事剧情中的主角 :  服务器（女）（响应报文） 客户端（男）（请求报文）
  - 因为都是男人主动找女人
  - 服务器:http.createServer创建服务器，监听端口listen，处理响应on('request',(req,res)=> { })
  - 请求报文： 由于我们是服务端代码，所以该报文是浏览器发的，我们看就行了
    - 头行体（异步）
  - 响应报文：由于我们是服务端代码，所以响应报文，我们写就行了
    - 头行体
      - 头设置1次，和多次
      - 体写1次和多次

#### querystring 核心对象

- querystring.parse(formStr)
- username=jack&password=123转换成如下
- { username: 'jack', password: '123' }

#### 回写页面

- 做一个简单的查询功能,查询后,页面跳转,显示查询结果
- 数据关系是英雄名称
- 请求方式必须是get请求

#### 跨域问题

- 传统开发方式:前端代码及请求数据接口都在同一个服务器上,前端代码测试依赖服务器
- 前后端分离:
  - 静态服务器: 运行前端代码
  - 后台服务器: 运行数据接口服务器
  - __互不影响,浏览器向其他服务器发送ajax请求,会产生跨域__

#### jsonp

- 知识点补充

- url核心对象

  - ```js
    const url = require('url');
    url.parse('http://xxx.com?id=1',true); // 第二个参数是将id=1转换成对象
    // output:  { protocal:'http',..省略..query:{id:1}   }
    ​``` ​
    ```

#### CORS

- ```js
  Access-Control-Allow-Origin: 'http://xxx.com'  //允许哪个域在跨域的时候访问,*代表所有
  // 告诉浏览器,跨域时允许有cookie,同时客户端也要设置withCredentials:true + Origin不能是*
  Access-Control-Allow-Credentials: true  
  Access-Control-Allow-Methods: 'GET,POST,PUT,DELETE';   // 默认允许get/post
  Access-Control-Allow-Headers:'xxx';   // 允许你自己加的头来通信
  ```

- 浏览器在非简单请求(get/post)||包含自定义头||content-type非键值对的时候,会先请示服务器,来一个OPTIONS请求,如果不满足,拒绝发送ajax请求

#### 代理

- 下载依赖包便于请求操作 ```npm i request -S```

#### nginx代理

- __操作最好在管理员权限下进行__
- nginx -s [opt]  opt:stop, quit, reopen, reload
- 启动nginx: 命令行进入到解压目录 `start nginx`
- 查看nginx启动进程 ```tasklist /fi "imagename eq nginx.exe"```
- 关闭进程 ```nginx -s stop```
