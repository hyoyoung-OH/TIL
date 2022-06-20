// 문제: 자연수를 입력 받아 헤당 수만큼 별을 찍는 문자열 반환 함수를 작성하시오
// 입력값: 5, 7, 12
// 출력값: #1: ***** #2: ******* #3: ************

/* user  code */

function answer(num) {
  let result = '';

  //내가 구현한 코드
  switch (num) {
    case 5:
      result = '*****';
      break;
    case 7:
      result = '*******';
      break;
    case 12:
      result = '************';
      break;
  }

  /* 답안
  for (let i = 0; i < num; i++) {
    result += '*';
  }
  */

  return result;
}

/*main code */
let input = [
  // TC: 1
  5,

  //TC: 2
  7,

  //TC: 3
  12,
];

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}
