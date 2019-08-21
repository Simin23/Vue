var express = require('express');
var router = express.Router();
var {
    // findDocuments,
    // insertDocuments
    find,
    insert
} = require('../libs/db')
/* GET users listing. */

router.use((req, res, next) => {
    // 全局添加
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

//查-注册
router.post('/sign/:_username', async function (req, res, next) {
    // let {
    //     _username
    // } = req.body;
    let param = req.params._username
    // console.log(req.body)
    let data = await find('user', {
        'username': param
    })

    console.log(data)
    res.send(data)
});


//查-登录
router.post('/login', async function (req, res, next) {
    let {
        username,
        password
    } = req.body;
    // let param = req.params._username
    // console.log(req.body)
    let data = await find('user', {
        'username': username,
        'pwd':password
    })

    console.log(data)
    res.send(data)
});

//插入
router.post('/check', async function (req, res, next) {
    let {
        username,
        tel,
        password
    } = req.body;
    // console.log(_username,_tel,_pwd)
    // console.log(req.body)
    let data = await insert('user', {
        'username': username,
        'tel': tel,
        'pwd': password,
    })


    console.log(data)
    res.send(data)
});

module.exports = router;