
ejs模板引擎的使用
npm install koa-views --save
npm install ejs --save

var view = require('koa-views');

// app.use((view(__dirname ,{extension:"ejs"})))
//  app.use((view('view',{extension:"ejs"})))  模板后缀名为ejs
//  app.use((view('view',{map:{"html":"ejs"}}))) 模板的后缀名是html


router.get('/', async function(cxt){
    let title = "hello ejs";
    let content = "<h1>aaa</h1>"

    await cxt.render('index',{
        title:title,
        content:content,
    })
})
/**
 *  配置 公共信息
 *  app.use(async(ctx,next)=>{
 *     ctx.state = {
 *         username:"张三",
 *     }
 *    await next();
 *  })
 * 
 */
// ----
index.html

<body>
    <h1><%=title%></h1>
    // 渲染标签使用<%-content%>
    <div><%-content%></div>
</body>




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
  ctx.body(data); //获取到的数据样式为 name=jack&age=20;
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






