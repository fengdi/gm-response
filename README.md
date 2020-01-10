# gm-response

#### 介绍
gm-response


#### 安装教程
`npm i gm-response`

#### 使用说明
云函数返回时调用此方法

```javascript
const Response = require('gm-response');
const code = require('./code');

Response.init(code);//引入错误码消息模板


exports.foo = function(){
	//your code...
	return Response(data, 0, '消息内容');//返回调用此方法
}
```
Response支持三个参数，只分类型不分顺序，都为可选。

|  类型 | 说明  | 字段 |
| ------------ | ------------ | ------------ |
|  对象 | 数据  | data |
| 字符串  | 消息   | message |
|  数字 |  错误码 | error 和 success |

注：（error为 **0** 时，success即为 **true** ）









