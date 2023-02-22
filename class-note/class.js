function Person(name,age) {
    this.name = name;
    this.age = age;
}
let capt = new Person('캡틴',100);

class Person {
    // 클래스 로직
    constructor(name, age){
        console.log('생성 되었습니다.');
        this.name = name;
        this.age = age;
    }
}

let seho = new Person('세호', 30);
console.log(seho); // Person { age: 30, name: "세호" }

// 자바스크립트 프로토타입
var user = { name: 'capt', age: 100 };
var admin = {}; // undefined
admin.__proto__ = user; // {name: 'capt', age: 100}
admin.name // 'capt'
admin.age // 100
admin.role = 'admin';