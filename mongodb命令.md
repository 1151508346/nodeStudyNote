

mongod 启动数据库
mongo  连接数据库

show dbs 查看数据库

show tables 查看表
 
 use 进入数据库
 db.one.insert({"name":"Jack"}); 创建数据表并插入一条数据

 db.createCollection("student") 创建student数据表

 db.student.find()查看student 数据表

 db.student.find({"name":"Jack"});按条件查找

 db.student.drop();删除集合

 db.dropDatabase();删除数据库

 db.student.insert({title: 'MongoDB 教程', 
    description: 'MongoDB 是一个 Nosql 数据库',
    by: '菜鸟教程',
    url: 'http://www.runoob.com',
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
})
db.col.find().pretty();按照json格式查询结果

db.update({name:"Jack"},{$set:{name:"Lucy"}})


更新多条
	db.student.update({name:"Jack"},{$set:{name:"Lucy"}},{multi:true});
											在没有数据更新的时候是否插入		是否更新多条数据	
	db.student.update({name:"Jack"},{$set:{name:"Lucy"}},true,true）

删除 name="Jack"

	db.student.remove(name:"Jack");

查询两条记录
	只有title
	 db.col.find({},{"title":1,_id:0}).limit(2)

			查询title和_id两个字段的两条记录 _id为真
	  db.col.find({},{"title":1,_id:1}).limit(2)
	   db.col.find({},{"title":1}).limit(2)

	skip()还可以使用skip()方法来跳过指定数量的数据，skip方法同样接受一个数字参数作为跳过的记录条数。

	db.col.find().limit(1).skip(2).pretty();
排序指定字符  rows:1 升序 ，
			 rows:-1降序
db.col.find({},{"title":1,_id:0}).sort({"likes":-1})
{ "title" : "PHP 教程" }
{ "title" : "Java 教程" }
{ "title" : "MongoDB 教程" }


创建复合索引 1为升序 -1 位降序
db.col.createIndex({"title":1,"description":-1})；

建索引过程会阻塞其它数据库操作，background可指定以后台方式创建索引，即增加 "background" 可选参数。 "background" 默认值为false。
在后台创建索引
db.values.createIndex({open: 1, close: 1}, {background: true})