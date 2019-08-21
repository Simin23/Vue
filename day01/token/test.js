const {
    createToken,
    decodeToken
} = require('./token');

//生成一块手牌
// const token = createToken({
//     username:'wahaha',
//     password:'111'
// },300);
// console.log(token);
const obj = decodeToken('eyJkYXRhIjp7InVzZXJuYW1lIjoid2FoYWhhIiwicGFzc3dvcmQiOiIxMTEifSwiY3JlYXRlZCI6MTU2MzgwMDk1NCwiZXhwIjozMDB9.iRrQEgCP+5TXgdhm1LF0wgUIQKD/2jrCxxpaaMoD4j4=');
console.log(obj);