querySelector(), querySelectorAll()
<br>

1. querySelector()
   : document.querySelector()는 입력한 선택자와 일치하는 문서 내의 첫번째 element를 반환한다. 일치하는 요소가 없다면null을 반환한다. 괄호 안에 들어가는 매개변수는 유효한 css 선택자여야한다.

```javascript
document.querySelector(CSS selectots)
//예시
document.querySelector("p"); // 매개변수로 p를 줬을 때는 HTML에서 <P>태그를 가진 요소들 중에 가장 첫번째 노드를 리턴
document.querySelector(".items"); // 클래스 이름을 통해 찾고 싶을 때
document.querySelector("#main"); // id를 통해 찾을 때
```

2. querySelectorAll()
   : 주어진 CSS선택자와 일치하는 모든 요소를 반환한다. 이때 반환 타입은 리스트 타입이다. 따라서 인덱스를 통해 조작할 수 있다.

```html
<p class="test">test1</p>
<p class="test">test2</p>
<p class="test">test3</p>
```

```javascript
const test = document.querySelectorAll(".test");

function testFunc() {
  let i;
  for (i = 0; i < test.length; i++) {
    test[i].innerHTML = i;
  }
}
```

test를 가진 <P>태그가 3개 있다. JS에서 querySelectorAll(".test")를 통해 3개의 요소를 test 변수에 저장한다. 그러면 test변수는 마치 다른 언어의 배열과 같은 역할을 한다. test[i]와 같이 인덱스를 통해 원하는 요소에 접근할 수 있고 length라는 속성도 제공되고 있다.
