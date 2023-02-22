// text의 타입을 지정하지않는경우
function logText(text) {
    console.log();
    return text;
}
logText(10); // 숫자 10
logText('안녕'); // 문자 안녕
logText(true); // 진위값 true

// 제네릭 <T>
function logText<T>(text: T): T {
    console.log(text);
    return text;
}

// 파라미터의 타입을 지정해서 넘긴다.
logText<string>('하이');

// 유니온 타입을 사용하여 string과 number 타입 모두 받을 수 있다.
// 이 경우 인풋에 대한 문제점은 해결하였으나, 아웃풋에 대한 문제는 여전하다.
function logText(text: string | number) {
    console.log(text); 
    return text;
}

const a = logText('a');
a.split(''); 
logText(10);


function logText<T>(text: T): T {
    console.log(text);
    return text;
}

const str1 = logText<String>('abc');
str1.split('');

const login = logText<boolean>(true);


// interface Dropdown {
//     value: string;
//     selected: boolean;
// }

// const obj: Dropdown = { value: 10, selected: false };

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = { value: 'abc', selected: false };