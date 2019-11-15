Koa2中上传图片其实有很多模块,下面给大家介绍的一个koa-multer上传图片的模块。


koa-multer是一个 node.js 中间件，用于处理 multipart/form-data 类型的表单数据，它主要用于上传文件。它是写在 busboy 之上非常高效。


注意: Multer 不会处理任何非 multipart/form-data 类型的表单数据，意思就是我们要上传图片必须在form表单上面加  multipart/form-data




1.安装Koa2 的koa-multer ：



npm install --save multer


2.引入配置koa-multer模块 ：


const multer = require('koa-multer');
//配置    
var storage = multer.diskStorage({
    //文件保存路径
    destination: function (req, file, cb) {
        cb(null, 'public/uploads/')  //注意路径必须存在
    },
    //修改文件名称
    filename: function (req, file, cb) {
        var fileFormat = (file.originalname).split(".");
        cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);
    }
})
//加载配置
var upload = multer({ storage: storage })

3.使用koa-multer
router.post('/doAdd', upload.single('face'), async (ctx, next) => {
    ctx.body = {
        filename: ctx.req.file.filename,//返回文件名
        body:ctx.req.body
    }
});

        
4.注意Form表单加上enctype="multipart/form-data"


