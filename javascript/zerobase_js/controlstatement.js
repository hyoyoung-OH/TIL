//switch는 표현식을 평가하여 그 값이 일치하는 case문을 실행하는 조건문
// switch. case, break, default 키워드를 통해 구성되며, switch의 조건에 맞는 case 구문을 수행
// 일반적으로 하나의 case만 수행되도록 case 끝을 break로 끝맺음

let day_number = 8;
let day = '';

switch (day_number) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Mon';
    break;
  case 2:
    day = 'Tue';
    break;
  case 3:
    day = 'Wen';
    break;
  case 4:
    day = 'Thu';
    break;
  case 5:
    day = 'Fri';
    break;
  case 6:
    day = 'Sat';
    break;
  default:
    day = 'error';
    break;
}

console.log(day);

//Loop Statement

//for문
// 조건식이 거짓으로 평가될 때 까지 코드 블록을 반복실행
// for(변수 선언문 또는 할당문; 조건식; 증감식) {조건식이 참인 경우 반복 실행될 문;}

for (let i = 0; i < 2; i++) {
  console.log(i);
}

//while문
// 주어진 조건식의 평가 결과가 참이면 코드 블록을 계속해서 반복 실행
// for문은 반복횟수가 명확할 때 사용, while문은 반복횟수가 불명확할 때 주로 사용
// while문은 조건문의 평가 결과가 거짓이 되면 코드 블록을 실행하지 않고 종료

let count = 0;
//count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
while (count < 3) {
  console.log(count);
  count++;
}

//조건식의 평가 결과가 언제나 참이면 무한루프가 된다.
//무한루프에서 탈출하기 위해서는 코드 블록 내에 if 문으로 탈출 조건을 만들고 break문으로 코드 블록을 탈출한다.
let count2 = 0;

//무한루프
while (true) {
  console.log(count2);
  count2++;
  //count가 3이면 코드 블록을 탈출한다.
  if (count === 3) break;
  //0 1 2
}

// do...while문
// 코드 블록을 먼저 실행하고 조건식을 평가한다. 따라서 코드블록은 무조건 한 번 이상 실행된다.

let count3 = 0;
//count가 3보다 작을 때까지 코드 블록을 계속 반복 실행한다.
do {
  console.log(count3);
  count3++;
} while (count < 3);
