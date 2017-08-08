var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var crypto = require('crypto');

// 生成一个 express 实例
var app = express();

// 设置视图文件存放目录
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 设置静态文件存放目录
app.use(express.static(path.join(__dirname, 'public')));

// 解析 urlencoded 请求体必备
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index', {
        title: '首页'
    });
});

app.get('/reg', function(req, res) {
    res.render('register', {
        title: '注册'
    });
});

app.post('/reg', function(req, res) {
    ...
});

app.get('/login', function(req, res) {
    res.render('login', {
       title: '登录'
    });
});

app.post('/login', function(req, res) {
    ...
});

app.get('/quit', function(req, res) {
    console.log('退出成功！');
    return res.redirect('/login');
});

app.get('/post', function(req, res) {
    res.render('post', {
        title: '发布'
    })
});

app.post('/post', function(req, res) {
    ...
});

app.get('/detail/:_id', function(req, res) {
    res.render('detail', {
        title: '笔记详情'
    });
});

app.listen(3000, function(req, res) {
    console.log('app is running at port 3000');
});
