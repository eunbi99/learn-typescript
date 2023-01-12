interface User {
    age: number;
    name: string;
}

// 변수에 인터페이스 활용
let seho: User = {
    age: 33,
    name: '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User) { // User라는 인터페이스 형식만 받겠다.
    console.log(user);
}

const capt = {
    name: '캡틴',
    age: 25
}
getUser(capt);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number;
}

let sum: SumFunction;
sum = function(a: number, b: number) {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number] : string;
}

let arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10 // 10은 string 형식에 할당 할 수 없기때문에 에러 발생!

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string] : RegExp
}

let obj: StringRegexDictionary = {
    sth: /abc/,
    // cssFile: 'css' // 정규표현식이 아닌 string이기 때문에 에러 발생!
    cssFile: /\.css$/,
    jsFile: /\.js$/
}

Object.keys(obj).forEach(function(value) {})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

// 상속
interface Developer extends Person {
    language: string;
}

let captain: Developer = {
    language: 'ts',
    age: 100,
    name: '캡틴마블'
}

