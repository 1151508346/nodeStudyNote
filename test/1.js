require(__dirname + "/a.js");
var p1 = new Promise(function (res, rej) {
	if (true) {
		res('sadasd');
	} else {
		rej('fail');
	}

});
p1.then(function (data) {
	console.log(data);
}).then(function (data) {
	console.log(data);
});

console.log(__dirname);
