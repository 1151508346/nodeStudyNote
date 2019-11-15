var a = 10;
if(a==10){
	var b = require('./b.js');
	b.bfun('Jack',20);
	
}else{
	require('./c.js');
};
function show(){
	return 'this  is  show().......';
};
exports.show = show;