const Response = require('./');
const code = require('./code');

Response.init(code);


console.log("Response()", Response());
console.log("Response(0)", Response(0));
console.log("Response('0')", Response("0"));
console.log("Response('1')", Response("1"));
console.log("Response(1)", Response(1));
console.log("Response(2)", Response(2));
console.log("Response(3)", Response(3));
console.log("Response(null)", Response(null));//不合法的传参
console.log("Response(undefined)", Response(undefined));//不合法的传参
console.log("Response('')", Response(''));
console.log("Response({})", Response({}));
console.log("Response({ff:1})", Response({ff:1}));
console.log("Response(false)", Response(false));//不合法的传参
console.log("Response([1,2,3])", Response([1,2,3]));//不合法的传参
console.log("Response('asdasd')", Response("asdasd"));
console.log("Response('aa', 2)", Response("aa",2));
console.log("Response(2, 'aa')", Response(2, "aa"));
console.log("Response({foo:1}, 0)", Response({foo:1}, 0));
console.log("Response({foo:1}, 1)", Response({foo:1}, 1));
console.log("Response({foo:1}, 'awqkej')", Response({foo:1}, "awqkej"));
console.log("Response(1, 'awqkej')", Response(1, "awqkej"));
console.log("Response({foo:1}, 1, 'asdasd')", Response({foo:1}, 1, "asdasd"));
console.log("Response(1, 'asdasd', {foo:1})", Response(1, "asdasd", {foo:1}  ));//参数无顺序
