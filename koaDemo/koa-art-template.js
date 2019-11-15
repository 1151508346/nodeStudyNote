一、Koa2中常见模板引擎的性能对比


适用于 koa 的模板引擎选择非常多，比如 jade、ejs、nunjucks、art-template等。

art-template 是一个简约、超快的模板引擎。


它采用作用域预声明的技术来优化模板渲染速度，从而获得接近 JavaScript 极限的运行性能，并且同时支持 NodeJS 和浏览器。


art-template支持ejs的语法，也可以用自己的类似angular数据绑定的语法


官网：http://aui.github.io/art-template/
中文文档: http://aui.github.io/art-template/zh-cn/docs/

视频教程:https://www.itying.com/goods-800.html





二、在Koa中使用art-template模板引擎

1.安装art-template 和 koa-art-template

npm install --save art-template
npm install --save koa-art-template


2.配置Koa2中间件：


const Koa = require('koa');
const render = require('koa-art-template');
const app = new Koa();
render(app, {
  root: path.join(__dirname, 'view'),
  extname: '.art',
  debug: process.env.NODE_ENV !== 'production'
});
app.use(async function (ctx) {
  await ctx.render('user');
});


app.listen(8080);




三、art-template模板引擎语法


参考：http://aui.github.io/art-template/zh-cn/docs/syntax.html






绑定数据

    {{list.name}}

  
绑定html数据


         {{@list.h}}
   
条件

        {{if num>20}}大于20{{else}}小于20{{/if}}
循环数据



{{each list.data}}

	   {{$index}}---{{$value}}

	{{/each}}


引入模板


{{include 'public/footer.html'}}

