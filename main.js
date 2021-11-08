// 1. input 텍스트 타입기능
// 2. 아이템추가 : + 버튼 / enter키
// 3. 추가된 아이템은 쓰레기통 버튼으로 삭제기능

const items = document.querySelector('.items');
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd() {
  // logic

  // 1. 사용자가 입력한 텍스트 받아오기
  const text = input.value;
  if (text == '') {
    input.focus();
    return;
  }

  // 2. 새로운 아이템 생성 (텍스트 + 삭제 버튼)
  //   const item = creatItem();

  // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다
  //   items.appendChild(item);

  // 4. 인풋을 초기화 한다.
  input.value = '';
  input.focus();
}

function creatItem(text) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');

  const item = document.createElement('div');
  item.setAttribute('class', 'item');

  const name = document.createElement('span');
  name.setAttribute('class', 'item__name');
  name.innerText = text;

  const deleteBtn = document.createElement('button');
  deleteBtn.setAttribute('class', 'item__delete');
  deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
  deleteBtn.addEventListener('click', () => {
    items.removeChild(itemRow);
  });

  const itemDivider = document.createElement('div');
  itemDivider.setAttribute('class', 'itme__divider');

  //   실제로 넣어주기
  item.appendChild(name);
  item.appendChild(deleteBtn);

  itemRow.appendChild(item);
  itemRow.appendChild(itemDivider);

  return itemRow;
}

addBtn.addEventListener('click', () => {
  onAdd();
});

input.addEventListener('keypress', (event) => {
  console.log('key');
});
