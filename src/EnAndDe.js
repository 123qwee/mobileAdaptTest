const Crypto = require('crypto');
// import FileReader from 'FileReader';
// var FileReader = require('FileReader');
// var bufferjs = require('bufferjs');
import base64 from 'js-base64';
import md5 from 'js-md5';
import sha256 from 'js-sha256';
const KEY = "751f621ea5c8f930";
const IV = "2624750004598718";
// 公钥
const PUB = `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvzMhv77Iynm3HRFhSlYQ
naYZYPr73WW/8Qw2fpfpkwMJeN5cGlB9l89KO44umoZJzttuorrwigf7ymJKsT9Z
3Qptg+iA1iWeKYJngdHzQ8t0qKvVqKykBI6b5bkLSHp7jyApSmnhvAj5LlzUKVvy
cLxdoVHHNtnQWsZfk78wj6nAS2FNtcqN6u0kc2A55wpC1ztPX3nNSsoskmV9BAqW
wbayhlTGPbBfCQdE4yHKd3pK7Yj/cnyoBnXHRBudOZ2SKNMwakjkQvuAGjC+K3EP
EXi71SKMaU9k0VMb+tR8/kv5WEnMc7kvmt5lgTAXMkidj6Tj49WaPpFtgWAxuWg/
L3Bec4sIonDPy56ye3VdqsvoeJBsBl1OcjPLoD1K2oe+NqWh7mHtJqexCbVbjHwX
dc97/YSpziqsDhkwIOnfpQWSysoRG9t+H2JOsjdFx/uKC0VJJ8SFm94fdTNFAdCN
qx6f5I7cF76bm0m334ZDbsT/yVQPGhoBAyPO4GTQOEvmNZmkhjBzsaCZFvr5jWUg
EIVv39H8qlqxLgCW+C69302qBFTD9iDNUz/Jcn+/TSe3a1BTxSIAgZvxmJSsz0c5
zxpfazJF3c7ZvM91kmp7HwRwjKnyhUd1G4FyF6HmTwNam+V9xa/gg39jAoFFF+v1
I1WNMeC/YRG02S7iCDOZ9msCAwEAAQ==
-----END PUBLIC KEY-----`;
// 私钥
const PRI = `-----BEGIN PRIVATE KEY-----
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
MLApuydRLDO6FSwaRCLf8uUxVHjs3rY=
-----END PRIVATE KEY-----`;

//AES加解密
var AESE = function (data, key = KEY, iv = IV) {
    var cipher = Crypto.createCipheriv('aes-128-cbc', key, iv);
    var crypted = cipher.update(data, 'utf8', 'binary');
    crypted += cipher.final('binary');
    crypted = new Buffer(crypted, 'binary').toString('base64');
    return crypted;
};

/**
 * 解密方法
 * @param key      解密的key
 * @param iv       向量
 * @param crypted  密文
 * @returns string
 */
var AESD = function (crypted, key = KEY, iv = IV) {
    crypted = new Buffer(crypted, 'base64').toString('binary');
    var decipher = Crypto.createDecipheriv('aes-128-cbc', key, iv);
    var decoded = decipher.update(crypted, 'binary', 'utf8');
    decoded += decipher.final('utf8');
    return decoded;
};
// AES+Base64加解密
/*
num:加密次数
*/
var AESAndBaseE = function (data, num = 1) {
    // 用base64加密一次，aes加密一次
    let EData = null,
        i = num;
    while (i > 0) {
        if (!EData) {
            EData = AESE(Base64.encode(data), KEY, IV);
        } else {
            EData = AESE(Base64.encode(EData), KEY, IV);
        };
        i--;
    };
    return EData
}
/*
num:解密次数
*/
var AESAndBaseD = function (data, num = 1) {
    // 用aes解密一次，base64解密一次
    let DData = null,
        i = num;
    while (i > 0) {
        if (!DData) {
            DData = Base64.decode(AESD(data, KEY, IV));
        } else {
            DData = Base64.decode(AESD(DData, KEY, IV));
        }
        i--;
    };
    return DData
}

// RSA加解密
var RSAE = function (data, num = 1) {
    let EData = null,
        i = num;
    let RSAencrypt = new JSEncrypt();
    RSAencrypt.setPublicKey(PUB);
    while (i > 0) {
        if (!EData) {
            EData = RSAencrypt.encrypt(data);
        } else {
            EData = RSAencrypt.encrypt(EData);
        };
        i--;
    };
    return EData
}
var RSAD = function (data, num = 1) {
    let DData = null,
        i = num;
    let RSAdecrypt = new JSEncrypt();
    RSAdecrypt.setPrivateKey(PRI);
    while (i > 0) {
        if (!DData) {
            DData = RSAdecrypt.decrypt(data);
        } else {
            DData = RSAdecrypt.decrypt(DData);
        }
        i--;
    };
    return DData
}
// RSA+AES加解密
var AESAndRSAE = function (data, num = 1) {
    let EData = null,
        i = num;
    let RSAencrypt = new JSEncrypt();
    RSAencrypt.setPublicKey(PUB);
    while (i > 0) {
        if (!EData) {
            EData = RSAencrypt.encrypt(AESE(data, KEY, IV));
        } else {
            EData = RSAencrypt.encrypt(AESE(EData, KEY, IV));
        };
        i--;
    };
    return EData
}
var AESAndRSAD = function (data, num = 1) {
    let DData = null,
        i = num;
    let RSAdecrypt = new JSEncrypt();
    RSAdecrypt.setPrivateKey(PRI);
    while (i > 0) {
        if (!DData) {
            DData = AESD(RSAdecrypt.decrypt(data), KEY, IV);
        } else {
            DData = AESD(RSAdecrypt.decrypt(DData), KEY, IV);
        }
        i--;
    };
    return DData
}
var MD5 = function (data, num = 1) {
    let EData = null,
        i = num;
    while (i > 0) {
        if (!EData) {
            EData = md5(data);
        } else {
            EData = md5(EData);
        }
        i--;
    };
    return EData
}

var SHA256 = function (data, num = 1) {
    let EData = null,
        i = num;
    while (i > 0) {
        if (!EData) {
            EData = sha256(data);
        } else {
            EData = sha256(EData);
        }
        i--;
    };
    return EData
}

function readAsBinaryString() {
    var file = './../static/QQ视频20180517165237.mp4';
    var reader = new FileReader();
    //将文件以二进制形式读入页面  
    reader.readAsBinaryString(file);
    reader.onload = function (f) {
        var result = document.getElementById("result");
        //显示文件  
        result.innerHTML = this.result;
    }
}

var readFile = function () {
    FileReader.readFile('./../static/QQ视频20180517165237.mp4', function (err, data) {
        console.log('读取中')
        if (err) {
            return;
        }
        let b = new Buffer(data);
        let c = b.toString('hex');
        debugger
        // let cipherBuffer = _this.cipher(data);
        // fs.writeFile('./downsuccess/' + name + '', cipherBuffer, [], function () {
        //     console.log(`${name}加密完成`);
        //     _this.downAll(_this.downList, _this.downCall)
        // })
    });
}
// export function cipher(buf) {
//     var encrypted = "";
//     var cip = crypto.createCipher('rc4', '密匙');
//     encrypted += cip.update(buf, 'hex', 'hex');
//     encrypted += cip.final('hex');
//     return encrypted
// };


export default {
    AESE,
    AESD,
    AESAndBaseE,
    AESAndBaseD,
    RSAE,
    RSAD,
    AESAndRSAE,
    AESAndRSAD,
    MD5,
    SHA256,
    readFile,
    readAsBinaryString,
}