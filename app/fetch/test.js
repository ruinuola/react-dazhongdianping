import 'whatwg-fetch'
import 'es6-promise'

var result = fetch('/api/1', {
	credentials: 'include',//表示跨域请求是可以带cookie的
	headers: {'Accept':'application/json, text/plain, */*'}
})

result.then(res=>{
	return res.text()//将返回的 Response 数据转换成字符串格式
	//return res.json()//将返回的 Response 数据转换成JSON格式
}).then(text=>{ //json=>{
	console.log(text)  //console.log(json)
})