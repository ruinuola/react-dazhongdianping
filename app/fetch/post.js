import 'whatwg-fetch'
import 'es6-promise'

// 将对象拼接成 key1=val1&key2=val2&key3=val3 的字符串形式
function obj2params(obj){
	var result = '';
	var item;
	for ( item in obj ) {
		// encodeURIComponent() 函数可把字符串作为 URI 组件进行编码。
		result += '&' + item + '=' + encodeURLComponent(obj[item]);
	}

	if (result) {
		result = result.slice(1);
	}

	return result;
}

// 发送post请求
export function post(url, paramsObj){
	var result = fetch(url, {
		method: 'post',
		credentials: 'include',
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: obj2params(paramsObj)  //注意post时候参数的形式
	})

	return result;
}

