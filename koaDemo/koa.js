1.简书

koa是由Express原班人马打造，致力于成为一个更小、更富有表现力、更健壮的Web框架。使用koa编写web应用，通过组合不同的generator,可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。koa不在内核方法中绑定任何中间件，它仅仅提供了一个轻量优雅的函数库，使得编写Web应用变得得心应手。

2.安装

Koa目前需要>=0.11.x版本的node环境。并需要在执行node的时候附带--harmony来引入generators。如果您安装了较旧版本的node，您可以安装n(node版本控制器)，来快速安装0.11.x

$ npm install -g n
$ n 0.11.12
$ node --harmony my-koa-app.js


3.应用

Koa 应用是一个包含一系列中间件 generator 函数的对象。 这些中间件函数基于 request 请求以一个类似于栈的结构组成并依次执行。 Koa 类似于其他中间件系统（比如 Ruby's Rack 、Connect 等）， 然而 Koa 的核心设计思路是为中间件层提供高级语法糖封装，以增强其互用性和健壮性，并使得编写中间件变得相当有趣。
Koa 包含了像 content-negotiation（内容协商）、cache freshness（缓存刷新）、proxy support（代理支持）和 redirection（重定向）等常用任务方法。 与提供庞大的函数支持不同，Koa只包含很小的一部分，因为Koa并不绑定任何中间件。
任何教程都是从 hello world 开始的，Koa也不例外_

var koa = require('koa');
var app = koa();
app.use(function *(){
this.body = 'Hello World';
});
app.listen(3000);


4.中间件级联

Koa 的中间件通过一种更加传统（您也许会很熟悉）的方式进行级联，摒弃了以往 node 频繁的回调函数造成的复杂代码逻辑。 我们通过 generators 来实现“真正”的中间件。 Connect 简单地将控制权交给一系列函数来处理，直到函数返回。 与之不同，当执行到 yield next 语句时，Koa 暂停了该中间件，继续执行下一个符合请求的中间件('downstrem')，然后控制权再逐级返回给上层中间件('upstream')。
下面的例子在页面中返回 "Hello World"，然而当请求开始时，请求先经过 x-response-time 和 logging 中间件，并记录中间件执行起始时间。 然后将控制权交给 reponse 中间件。当中间件运行到 yield next 时，函数挂起并将控制前交给下一个中间件。当没有中间件执行 yield next 时，程序栈会逆序唤起被挂起的中间件来执行接下来的代码。

var koa = require('koa');
var app = koa();
// x-response-time
app.use(function *(next){
var start = new Date;
yield next;
var ms = new Date - start;
this.set('X-Response-Time', ms + 'ms');
});
// logger
app.use(function *(next){
var start = new Date;
yield next;
var ms = new Date - start;
console.log('%s %s - %s', this.method, this.url, ms);
});
// response
app.use(function *(){
this.body = 'Hello World';


});
app.listen(3000);
5.配置

应用配置是 app 实例属性，目前支持的配置项如下：


app.name 应用名称（可选项）
app.env 默认为 NODE_ENV 或者 development
app.proxy 如果为 true，则解析 "Host" 的 header 域，并支持 X-Forwarded-Host
app.subdomainOffset 默认为2，表示 .subdomains 所忽略的字符偏移量。

app.listen(...)

Koa 应用并非是一个 1-to-1 表征关系的 HTTP 服务器。 一个或多个Koa应用可以被挂载到一起组成一个包含单一 HTTP 服务器的大型应用群。
如下为一个绑定3000端口的简单 Koa 应用，其创建并返回了一个 HTTP 服务器，为 Server#listen() 传递指定参数
var koa = require('koa');
var app = koa();
app.listen(3000);
app.listen(...) 实际上是以下代码的语法糖:

ar http = require('http');
var koa = require('koa');
var app = koa();
http.createServer(app.callback()).listen(3000);
这意味着您可以同时支持 HTTPS 和 HTTPS，或者在多个端口监听同一个应用。
var http = require('http');
var koa = require('koa');
var app = koa();
http.createServer(app.callback()).listen(3000);
http.createServer(app.callback()).listen(3001);
app.callback()
返回一个适合 http.createServer() 方法的回调函数用来处理请求。 您也可以使用这个回调函数将您的app挂载在 Connect/Express 应用上。

app.use(function)

为应用添加指定的中间件

app.keys=

设置签名Cookie密钥，该密钥会被传递给 [KeyGrip]
当然，您也可以自己生成 KeyGrip 实例：app.keys = ['im a newer secret', 'i like turtle'];
app.keys = new KeyGrip(['im a newer secret', 'i like turtle'], 'sha256');
在进行cookie签名时，只有设置 signed 为 true 的时候，才会使用密钥进行加密：this.cookies.set('name', 'tobi', { signed: true });



/**
 * cnpm intall koa-bodyParser --save;
 *     
 */
var bodyParser = require('koa-bodyParser');
app.use(bodyParser);
router.post('demo',function(ctx){
     //表单获取提交数据通过使用bodyParser中间件
     //{name:"Jack",age:20}
   ctx.body =  ctx.request.body
})
/*
    原生js获取POST提交的数据
 */
router.post('/doAdd',function(ctx){
   var data = await commen.getPostData(ctx);

  // console.log(data);
  ctx.body = data; //获取到的数据样式为 name=jack&age=20;
})
// ----

export.getPostData = function(ctx){
        return new Promise((res,rej)=>{
            try{
                let str = "";
                ctx.req.on('data',function(data){
                    str+=data;
                })
                ctx.req.end('end',function(data){
                    resolve(str);
                });

            }catch(e){
                rej(e)
            }
        })

}




// ------------------------

cnpm install koa-art-template;
cnpm install art-template;

var Koa = require('koa');
var render = require('koa-art-template');
var app = new Koa();
var router = require('koa-router')();
render(app,{
    roor:path.join(__dirname,"views"), //视图位置
    extname:".html",    //模板后缀名
    //dabug:true/false
    dabug:process.env.NODE_ENV !== "production" //是否开启调试模式
    
})
router.get('/',async function(ctx){
    let list = {
        name:"张三",
        age:20,
    }
    await render("index",{
        list:list,
    });

    ctx.cookies.set('userinfo','张三',{
        maxAge:60*1000*60,//60分钟过期
        // expires:"2019-6-21",  设置过期日期
        // 上面两个设置一个即可
        
        //说明只能通过news才能访问到设置的cookie
        path:"/news",  //配置可以访问的页面 
        // domain:""  设置域名   默认当前域名下的所有页面都可以访问
        

    })
    
    ctx.body = "index page";
});

router.get('news',async function(ctx){
    let list = {
        name:"张三",
        age:20,
    }
    await render("index",{
        list:list,
    });

    var username = ctx.cookies.get('username');
        
    ctx.body = "index page";
});
app.use(router.routes());

app.use(router.allowMethods());

app.listen(3000);

// -------------------------------

router模块

routes/admin.js


app.js
    var admin = require('./router/admin.js');
    router.use('/admin',admin.router()); //配置层级路由
    app.use(router.routes()).use(router.allowedMethods())

    


















