

let Response = function(){

	let codeData = Response.$codeData;
	
	let defaultRes = {message:""};
	let args = Array.from(arguments)//[].slice.call(arguments);

	//参数中字符串类型为消息
	let message = args.find(arg=>{ return typeof arg === 'string'|| arg instanceof String});

	//参数中对象类型为数据
	let data = args.find(arg=>({}).toString.call(arg)=='[object Object]') || {};

	//参数中数字类型为错误码
	let error = args.find(arg=>{ return typeof arg === 'number' && isFinite(arg) }) || 0;

	// 根据error取code中定义的消息模板
	if(codeData[error]){
		defaultRes = codeData[error] || defaultRes;
	}
	
	let res = {
		data
	};
	if(message!=undefined){
		res.message = message;
	}
	res.error = error;
	res.success = error === 0;//为0成功
	

	return {...defaultRes, ...res}
	
};

Response.$codeData = {};

Response.init = function(codeData){
	Response.$codeData = codeData || {};
}

module.exports = Response;