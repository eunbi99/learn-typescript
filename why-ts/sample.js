// function sum(a,b) {
//     return a + b;
// }
// let result = sum(10, '20'); // 1020

// @ts-check

/**
 * 
 * @param { number } a 첫번째 숫자
 * @param { number } b 두번째 숫자
 */

function sum(a, b) {
    return a + b;
}

sum(10, 20);
// sum(10,'20'); @ts-check기능을 통해 ts처럼 검증을 한다.