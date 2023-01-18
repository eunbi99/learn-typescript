// function logMessage(value: any) {
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

/**
 * 유니언 타입
 * 특정 파라미터에 한가지 이상의 타입을 사용하고 싶을 경우 유니언 타입을 사용
 * 
 */
let eunbi: string | number | boolean;
function logMessage(value: string | number) {
    if (typeof value === 'number') {
        value.toLocaleString();
    }
    if (typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person3 {
    name: string;
    age: number;
}

function askSomeone(someone: Developer | Person) {
    someone.name
    someone.skill
    someone.age
}