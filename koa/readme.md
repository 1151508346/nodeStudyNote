koa路由
	npm install koa-router

	
koa2 中间件
    koa2入门实战视频教程39讲--网盘免费下载： https://pan.baidu.com/s/1KNaA97kGwNhavch5rP_G7w


    一、什么是Koa的中间件



        通俗的讲：中间件就是匹配路由之前或者匹配路由完成做的一系列的操作，我们就可以把它叫做中间件。


        在express中间件（Middleware） 是一个函数，它可以访问请求对象（request object (req)）, 响应对象（response object (res)）, 和 web 应用中处理请求-响应循环流程中的中间件，一般被命名为 next 的变量。在Koa中中间件和express有点类似。


        中间件的功能包括：

        执行任何代码。
        修改请求和响应对象。
        终结请求-响应循环。
        调用堆栈中的下一个中间件。

        如果我的get、post回调函数中，没有next参数，那么就匹配上第一个路由，就不会往下匹配了。如果想往下匹配的话，那么需要写next()


    二、Koa应用可使用如下几种中间件：

        应用级中间件
        路由级中间件
        错误处理中间件
        第三方中间件



    1.应用级中间件



        const Koa = require('koa');
        const Router = require('koa-router');

        const app = new Koa();
        const router = new Router();
        app.use(async (ctx,next)=>{
            console.log(new Date());
            await next();
        })
        router.get('/', function (ctx, next) {
            ctx.body="Hello koa";
        })
        router.get('/news',(ctx,next)=>{
            ctx.body="新闻页面"
        });
        app.use(router.routes()); //作用：启动路由
        app.use(router.allowedMethods()); //作用： 当请求出错时的处理逻辑
        app.listen(3000,()=>{
            console.log('starting at port 3000');
        });

    2、路由中间件



        router.get('/', async(ctx, next)=>{
            console.log(1)
            next()
        })
        router.get('/', function (ctx) {
            ctx.body="Hello koa";
        })
        3、错误处理中间件




        app.use(async (ctx,next)=> {
            next();
            if(ctx.status==404){
            ctx.status = 404;
            ctx.body="这是一个404页面"
        }
        });


    4、第三方中间件
        const static = require('koa-static'); 
            const staticPath = './static'; 
            app.use(static(
            path.join( __dirname, staticPath)
        )) 



        const bodyParser = require('koa-bodyparser');
        app.use(bodyParser());

    三、Koa中间件的执行顺序

        Koa 的中间件和 Express 不同，Koa 选择了洋葱圈模型。


Koa2路由 以及 路由get传值
        koa2入门实战视频教程39讲--网盘免费下载： https://pan.baidu.com/s/1KNaA97kGwNhavch5rP_G7w


    一、Koa2路由的基本使用



        路由（Routing）是由一个 URI（或者叫路径）和一个特定的 HTTP 方法（GET、POST 等）组成的，涉及到应用如何响应客户端对某个网站节点的访问。


        通俗的讲：路由就是根据不同的URL地址，加载不同的页面实现不同的功能。


        Koa中的路由和Express有所不同，在Express中直接引入Express就可以配置路由，但是在Koa中我们需要安装对应的koa-router路由模块来实现。

        npm install --save koa-router

        const Koa = require('koa');
        const router = require('koa-router')();  //注意：引入的方式
        const app = new Koa();
        router.get('/', function (ctx, next) {
        ctx.body="Hello koa";
        })


        router.get('/news,(ctx,next)=>{
        ctx.body="新闻page"
        });


        app.use(router.routes()); //作用：启动路由
        app.use(router.allowedMethods()); // 作用： 这是官方文档的推荐用法,我们可以看到router.allowedMethods()用在了路由匹配router.routes()之后,所以在当所有路由中间件最后调用.此时根据ctx.status设置response响应头
        app.listen(3000,()=>{
        console.log('starting at port 3000');
        });

    二、Koa路由get传值



        在koa2中GET传值通过request接收，但是接收的方法有两种：query和querystring。


        query：返回的是格式化好的参数对象。
        querystring：返回的是请求字符串。


        const Koa = require('koa');
        const Router = require('koa-router');

        const app = new Koa();
        const router = new Router();
        router.get('/', function (ctx, next) {
            ctx.body="Hello koa";
        })
        router.get('/newscontent,(ctx,next)=>{

            let url =ctx.url;
                //从request中获取GET请求
                let request =ctx.request;
                let req_query = request.query;
                let req_querystring = request.querystring;
                //从上下文中直接获取
                let ctx_query = ctx.query;
                let ctx_querystring = ctx.querystring;
                ctx.body={
                url,
                req_query,
                req_querystring,
                ctx_query,
                ctx_querystring
            }

        });
        app.use(router.routes()); //作用：启动路由
        app.use(router.allowedMethods()); //作用： 当请求出错时的处理逻辑
        app.listen(3000,()=>{
            console.log('starting at port 3000');
        });


    三、Koa动态路由
        //请求方式   http://域名/product/123
        router.get('/product/:aid',async (ctx)=>{
           console.log(ctx.params); //{ aid: '123' }  //获取动态路由的数据
           ctx.body='这是商品页面';
        })
