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
