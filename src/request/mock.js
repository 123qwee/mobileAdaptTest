
import Mock from 'mockjs';

var data = Mock.mock(mockurl.home["/list"] ? constants.SERVER_URL + "/list" : "   ", "get", {
  'code': 200,
    'data|6-10': [{
        'id|+1': 1,
        'name': '@cname',
        'address': '@county(true)',
        'image':'@image("400x500")'
    }]
});
export default {
    data
}