
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static staticfun() {
        console.log('this  is  a static function');
    }
    show() {
        console.log(`name:${this.name},age:${this.age}`)
    }
}
Person.prototype.skill = function () {
    console.log('this is new skill function');
}
Object.assign(Person.prototype, {
    play() {
        console.log('我是新添加的play方法');
    }
})
exports.Person = Person;


// class person {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     get name() {
//         console.log('get')
//         return this._name;
//     }
//     set name(name) {
//         console.log('set')
//         this._name = name;//注意:_name出现的目的  是因为会形成递归调用
//     }
// }
// var pp;
// console.log(pp = new person('aa', 22));
// pp.name = 'adsadaa'//调用set方法
// console.log(pp.name);//调用get方法





