var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');
var app = express();
app.use(bodyparser.json());//对数据进行json格式的处理
app.use(bodyparser.urlencoded({ extended: false }));//对数据进行加密处理
// 配置默认页面--服务器自动加载指定文件下的index.html文件
app.use(express.static(path.join(__dirname, 'www')));

// 客户端以get请求方式,
app.get('/a', function (req, res) {
    var js = {
        name: "aaa",
        age: "bbb",
        sex: "female"
    }
    // res.send(json);
    res.json(js)
});

app.post('/a', function (req, res) {
    var js = {
        name: "aaa",
        age: "bbb",
        sex: "female"
    }
    // res.send(json);
    res.json(js)
});

app.all('/b', function (req, res) {
    var js = {
        name: "Jack",
        age: 20,
        sex: "female"
    }
    // res.send(json);
    res.json(js)
});


app.get('/c/:id', function (req, res) {
    // var js = {
    //     name: "aaa",
    //     age: "bbb",
    //     sex: "female"
    // }
    // res.send(json);

    var param = JSON.parse(req.params.id);

    console.log(param)
    // res.send(param);
    res.json(param);
});




app.post('/d', function (req, res) {
    console.log(req.body)
    // res.send(param);
    res.send(req.body);
});












// 配置文件1.html 的虚拟路径是a--访问的时候通过/a就可以访问到1.html
// app.use('/a', function (req, res) {


//     // res.sendFile(path.join(__dirname, 'www', '1.html'));

//     //自定义状态码
//     // res.status(200).sendFile(path.join(__dirname, '1.html'));
// })
// 所有文件，也可以什么都不写
app.use("*", function (req, res) {
    res.status(200).sendFile(path.join(__dirname, 'www', '404.html'));
})



app.listen(3000, function (err) {
    if (err) {
        console.log('失败');
        throw err;
    }
    console.log('成功');
})