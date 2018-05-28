// 生产环境还是开发环境 production development
const ENV = 'development';
// 后台服务地址
const HOST = ENV == 'development' ? 'https://easy-mock.com/mock/5aeac9972e1f640533761f2c/test' : 'http://117.161.11.37';
const PORT = ENV == 'development' ? '2222' : '7991';

// const SERVER_URL = HOST + ':' + PORT;
const SERVER_URL = HOST;

// 设置全局变量
window.constants = {
  ENV,
  // 后台服务地址
  SERVER_URL,
  // 查询每页记录数
  LIMIT: 10000,

}
