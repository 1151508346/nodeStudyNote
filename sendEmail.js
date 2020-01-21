//新建sendEmail.js
// sendEmail.js
// 引入插件
const nodemailer = require('nodemailer');
// 创建可重用邮件传输器
const transporter = nodemailer.createTransport({
    host: "smtp.exmail.qq.com",
    // exmail.qq.com
    port: 465,// 端口
    secureConnection: false, // use SSL
    auth: {
        "user": 'wang_guohan@uxsino.com', // 邮箱账号
        "pass": 'Hanhan19950428*'         // 其他邮箱为授权码，在阿里云是SMTP密码，需要设置一下
    }
});
module.exports.send =  (mailOptions) => {
    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            return console.log(error);
        }
    });
}