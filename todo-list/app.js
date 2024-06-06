const todoWrapper = document.getElementById("todo__wrapper");
const input__text = document.getElementById("input__text");
const todo__list = document.getElementById("todo__list");

const arr = [];

function listAdd(e) {
  e.preventDefault();
  if (e.target.title.value.trim() == "") {
    return;
  } else {
    arr.push({
      text: e.target.title.value,
      id: Math.floor(Math.random() * 10000),
    });
    render();
    e.target.title.value = "";
  }
}

function render() {
  todo__list.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    todo__list.innerHTML += `
      <div id="box__wrapper-${i}" class="title__wrapper" data-id="${arr[i].id}">
        ${arr[i].text} 
        <div class="button__wrapper">
          <button onclick="itemEdit(${arr[i].text})"><i class="fa-solid fa-pen"></i> edit</button>
          <button onclick="itemDelete(${arr[i].id})">delete</button>
        </div>
      </div>
    `;
  }
}

function itemDelete(id) {
  const index = arr.findIndex((item) => item.id === id);
  if (index !== -1) {
    arr.splice(index, 1);
    render();
  }
}
function itemEdit() {}
