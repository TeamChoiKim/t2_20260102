// <!-- 1강 – 자바스크립트 소개 & 출력
// 핵심: console.log, 실행 흐름
// 문제 1
// 콘솔에 다음 문장이 정확히 출력되도록 하세요.
// 자바스크립트 공부 시작!
console.log("자바스크립트 공부 시작!");

// 문제 2
// 아래 문장을 한 줄씩 출력하세요.
// HTML
// CSS
// JavaScript
console.log("HTML");
console.log("CSS");
console.log("JavaScript");
console.log("1강-------------------");
// 📘 2강 – 변수 (let, const)
// 핵심: 변수 선언, 값 변경
// 문제 1
// 변수 age에 본인 나이를 저장
// 콘솔에 아래 형식으로 출력
// 내 나이는 00살 입니다.
let age = 38;
console.log(`내 나이는 ${age}살 입니다.`);
// 문제 2
// const birthYear에 태어난 연도 저장
// 값을 바꾸려고 시도해보고 무슨 일이 일어나는지 확인하기
const birthYear = 1987;
birthYear = 1990;
console.log(birthYear);
console.log("2강-----------------");
// 📘 3강 – 자료형 (String, Number, Boolean, null, undefined)
// 핵심: 자료형 구분
// 문제 1
// 다음 변수들의 자료형을 콘솔에 출력하세요.
let name = "Mike";
let agE = 30;
let isAdult = true;
let money = null;
let hobby;
console.log(typeof Mike);
console.log(typeof 30);
console.log(typeof true);
console.log(typeof null);
console.log(typeof hobby);
// 출력 예:
// string
// number
// boolean
// object
// undefined

// 문제 2
// 아래 연산 결과를 예측하고 실제 결과와 비교해보세요.
// console.log("10" + 5);
console.log("105");
// console.log("10" - 5);
console.log("10"- 5);
console.log("3강-------------------")
// 📘 4강 – 연산자
// 핵심: 산술, 비교, 할당 연산자
// 문제 1
// 변수 x = 10, y = 3
// 아래 결과를 각각 출력
// x + y
let x = 10, y = 3;
console.log(x + y);
// x % y
console.log(x % y);
// x ** y
console.log(x ** y);
// 문제 2
// 아래 비교 연산의 결과를 예측 후 출력
// console.log(10 == "10");
// console.log(10 === "10");
console.log(true);
console.log(false);
console.log("----------------------")
// 📘 5강 – 조건문 (if, else)
// 핵심: 조건에 따른 분기
// 문제 1
// 변수 age가
// 20 이상이면 → "성인입니다"
// 아니면 → "미성년자입니다"
// 출력하기
let aGe = 21;
if(aGe >= 20){
    console.log("성인입니다");
}
else{
    console.log("미성년자입니다");
}
// 문제 2
// 변수 score에 점수를 넣고
// 90 이상: "A"
// 80 이상: "B"
// 나머지: "C"
// 출력하기 -->
let score = prompt("점수를 입력하세요");
score = Number(score);
if(score >= 90){
    alert("A");
}
else if(score >= 80 && score < 90 ){
    alert("B");
}
else{
    alert("C");
}

const a = 20;
let b = 10;
function asdf(a){
    const aggf = function (a,b){
        a+b;
    }
    console.log(aggf)
    function ag(){
        a*b;
    }
    console.log(ag)
}