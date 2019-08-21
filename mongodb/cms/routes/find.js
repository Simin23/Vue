var express = require('express');
var router = express.Router();
var url = require('url')
var {
    find
} = require('../libs/db')
/* GET users listing. */

router.use((req, res, next) => {
    // 全局添加
    res.append("Access-Control-Allow-Origin", "*");
    next();
});

//渲染列表页
router.post('/list', async function (req, res, next) {

    let data = await find('list', {

    })
    // console.log(123)
    res.send(data)
});

//通过id查询商品
router.post('/goodsId', async function (req, res, next) {
    let {
        id
    } = req.body;
    console.log(id);

    let data = await find('goodsList', {
        "goodsList":{
            "goodsId": "1151400104352026626"
        }
        // 'goodsId': "1151400104352026626"
    })
    // console.log(123)
    res.send(data)
});

module.exports = router;