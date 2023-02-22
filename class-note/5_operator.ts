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

interface Developer1 {
    name: string;
    skill: string;
}

interface Person3 {
    name: string;
    age: number;
}

function askSomeone(someone: Developer1 | Person3) {
    someone.name
    someone.skill // 에러 발생! ( Developer1 과 Person3 의 공통 속성이 아니기 때문에!)
    someone.age // 에러 발생! ( Developer1 과 Person3 의 공통 속성이 아니기 때문에!)
}

askSomeone({ name: '디벨롭퍼', skill: '웹 개발'});
askSomeone({ name: '캡틴', age: 100 });


/**
 *  & (인터섹션 타입)
 */

 function askSomeone1(someone: Developer1 & Person3) {
    // Developer1과 Person3가 갖고 있는 모든 속성 사용 가능!
    someone.name
    someone.skill 
    someone.age 
}

askSomeone1({ name: '디벨롭퍼', skill: '웹 개발'}); // 에러 발생! age 값을 넘기지 않았음.
askSomeone1({ name: '디벨롭퍼', skill: '웹 개발', age: 100});


let minhyung: string | number | boolean;
let jisung: string & number & boolean;