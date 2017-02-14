/**
 * Created by dllo on 17/2/13.
 */
//获取crypto模块
var crypto = require('crypto');

// md5 , sha1

//创建并返回一个hash对象，它是一个指定算法的加密hash，用于生成hash摘要
var hash_md5 = crypto.createHash('md5');
var hash_sha1 = crypto.createHash('sha1');
// hash.update('hello world');
//5eb63bbbe01eeed093cb22bb8f5acdc3
//更新hash的内容为指定的data。当使用流数据时可能会多次调用该方法
// hash_sha1.update('helloworld');
// hash_sha1.update('hello');
// hash_sha1.update('world');
//helloworld   6adfb183a4a2c94a2f92dab5ade762a47889a5a1
//             6adfb183a4a2c94a2f92dab5ade762a47889a5a1

/*
hash_sha1.update('hello');
hash_sha1.update('world');  console出来的结果和  hash_sha1.update('helloworld')相等;
*/

//计算所有传入数据的hash摘要。参数encoding（编码方式）可以为'hex', 'binary' 或者'base64'
// console.log(hash_sha1.digest('hex'));
// hash_sha1.update('world');
// console.log(hash_sha1.digest('hex'));
// 51e4f7fe35d35760b052c7c34288d205



//  Hmac: 加强版哈希算法,只要密钥（参数2）不同，最后得到的暗文也不同。
var Hmac = crypto.createHash('md5', 'secret_key1');
// Hmac.update('hello');
// console.log(Hmac.digest('hex'));
// var Hmac2 = crypto.createHmac('md5', 'secret_key2');
// Hmac2.update('hello');
// console.log(Hmac2.digest('hex'));
//key1:5d41402abc4b2a76b9719d911017c592
//key2:55c542f39bce80e9ef82d46eda515721



//AES: 对称加密的方法，加密解密使用用一个密钥，加密解密需要自己提前封装方法
var crypto = require('crypto');

var data = 'hello world';
var key = 'password';
//加密的方法
function encrypt(data, key) {
    //创建cipher加密方法
    var cipher = crypto.createCipher('aes192', key);
    //传值。参数1:要加密的数据，参数2:传进来的编码格式， 参数3:传回去的编码格式
    var crypted = cipher.update(data, 'utf8', 'hex');
    //得到暗号化后的值，return
    crypted += cipher.final('hex');
    return crypted;
};
//解密的方法
function decrypt(encrypted, key) {
    var decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};
var encrypted = encrypt(data, key);
var decrypted = decrypt(encrypted, key);

console.log('原数据是：' + data);
console.log('加密后数据是：' + encrypted);
console.log('解密后数据是：' + decrypted);






