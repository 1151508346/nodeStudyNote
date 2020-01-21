
// 在接口方法中使用
// 引入模块
const sendEmail = require('./sendEmail')
let emailCode  = 000000 //验证码为6位随机数
let email = {
        title: 'Blog个人网站--邮箱验证码',
        htmlBody: '<h1>Hello!</h1><p style="font-size: 18px;color:#000;">验证码为：<u style="font-size: 16px;color:#1890ff;">'+ emailCode +'</u></p><p style="font-size: 14px;color:#666;">10分钟内有效</p>>'
    }
let mailOptions = {
       from: '<wang_guohan@uxsino.com>', // 发件人地址
       to: '1151508346@qq.com', // 收件人地址，多个收件人可以使用逗号分隔
       subject: email.title, // 邮件标题
       html: email.htmlBody // 邮件内容
   };
sendEmail.send(mailOptions);
