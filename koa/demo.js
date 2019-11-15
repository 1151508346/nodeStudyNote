async function getData(){
	return  new Promise(function(res,rej){
		setTimeout(function(){
			var  name = "Jack";
			res(name);
		},1000)
	})
}
async function demo(){
	var d = await getData();
	console.log(d)
}

demo();

var p = new Promise(function(res,rej){
	var name = "Jack";
	res(name);
})
console.log(p)
