// 이벤트 위임: 클릭 이벤트를 items부모에만 등록한 다음 쓰레기통 아이템만 클릭되었을 때 해당하는 아이템을 삭제할 것
// 쓰레기통 아이콘을 클릭했을 떄 해당하는 아이템인 지 아닌 지 어떻게 알까?
// 아이템마다 고유한 아이디를 부여하고 쓰레기통 아이템에 아이디를 기억하게 해서 아이콘이 클릭되면 아이콘에 할당되어 있는 아이디를 활용해서 원하는 아이템을 찾아서 삭제

// 1. 사용자가 타이핑 할 수 있다.
// 2. 사용자가 +키나 엔터키를 쳤을 때 item을 등록한다
// 3. 쓰레기통 아이콘을 클릭하면 아이템이 삭제됨

const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");
const form = document.querySelector(".new-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  onAdd();
});

function onAdd() {
  //1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  //2. 새로운 아이템을 만듬(텍스트 + 삭제버튼)
  const item = createItem(text);
  //3. items 컨테이너안에 새로 만든 아이템을 추가한다
  items.appendChild(item);
  //4.  새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });
  //5. 인풋을 초기화한다.
  input.value = "";
  input.focus();
}

let id = 0; //UUID를 이용하는 것이 더 좋음
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);
  itemRow.innerHTML = `
      <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete">
          <i class="fas fa-trash-alt" data-id=${id}></i>
        </button>
      </div>
      <div class="item divider"></div>
  `;
  id++;
  return itemRow;
}

// addBtn.addEventListener("click", () => {
//   onAdd();
// });

// input.addEventListener("keyup", (event) => {
//   if (event.key === "Enter") {
//     onAdd();
//   }
// });

// items.addEventListener("click", (event) => {
//   const id = event.target.dataset.id;
//   if (id) {
//     const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
//     toBeDeleted.remove();
//   }
// });
