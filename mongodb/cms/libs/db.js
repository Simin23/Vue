
const {
    MongoClient,
    ObjectId
} = require('mongodb');
const url = "mongodb://localhost:27017"; //连接路径
const dbName = 'mydata'; //连接的数据库名称

// MongoClient.connect(url, {
//     useNewUrlParser: true //解决终端出现DeprecationWarning问题
// }, (err, client) => {
//     if (err) throw err;

//     //选择需要连接的数据库
//     const db = client.db(dbName);
//     //集合的选择
//     const collection = db.collection('userinf');
//     collection.find({}).toArray((err, docs) => {
//         console.log(docs);
//     });
//     client.close();
// });

//连接
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useNewUrlParser: true //解决终端出现DeprecationWarning问题
        }, (err, client) => {
            if (err) {
                reject(err);
                throw err;
            } else {
                resolve(client);
            }
        });
    });
}

// 1.添加
const insert = (collect,params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        //选择需要连接的数据库
        const db = client.db(dbName);
        //集合的选择
        const collection = db.collection(collect);
        //添加
        collection.insert(params,(err, res) => {
            if(err){
                reject(err);
                throw err;
            }else{
                resolve(res);
            }
        });
        //关闭连接
        client.close();
    });
}

//2.删除
const del = (collect,params) => {
    return new Promise(async(resolve,reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(collect);
        //删除
        collection.remove(params,(err,res) =>{
            if(err) {
                reject(err);
                throw err;
            }else{
                resolve(res);
            }
        });
        //关闭连接
        client.close();
    });
}

//3.修改
const update = (collect,params1,params2) => {
    return new Promise(async(resolve,reject) => {
        const client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(collect);
        collection.updateOne(params1,{"$set" : params2},(err,res) => {
            if(err){
                reject(err);
                throw err;
            }else{
                resolve(res);
            }
        });
        client.close();
    });
}

// 4.查找
const find = (collect,params) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        //选择需要连接的数据库
        const db = client.db(dbName);
        //集合的选择
        const collection = db.collection(collect);
        //查找
        collection.find(params).toArray((err, docs) => {
            if(err){
                reject(err);
                throw err;
            }else{
                resolve(docs);
            }
        });
        //关闭连接
        client.close();
    });
}

//调用
// 1.增
// (async() => {
//     let data = await insert('userinf',{
//         'name' : 'abcde',
//         'pwd' : '1234'
//     });
//     console.log(data);
// })();

//2.删
// (async() => {
//     let data = await del('userinf',{
//         'name' : 'abcd'
//     });
//     console.log(data);
// })();

//3.改
// (async() => {
//     let data = await update('userinf',{
//         "name" : "abc"
//     },{
//         "pwd" : "abcd"
//     });
//     console.log(data);
// })();

//4.查
// (async() => {
//     let data = await find('userinf',{
//         'name' : 'abc'
//     });
//     console.log(data);
// })();



// 导出
module.exports = {
    insert,
    del,
    update,
    find,
    ObjectId
}