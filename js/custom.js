const form = document.querySelector("#toDoForm");
const list = document.querySelector("#toDoList");

let toDos = [];

if (localStorage["toDoData"] !== null && localStorage["toDoData"] !== undefined) {
  toDos = JSON.parse(localStorage["toDoData"]);
}

function buildUI() {
  let listItem = ``;
  toDos.forEach((toDo) => {
    listItem += `<li id="${toDo.id}">
      <div>
        <span>${toDo.title}</span>
        <button aria-label="Complete" class="button-complete">Done</button>
      </div>
    </li>`;
  });
  list.innerHTML = listItem;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  toDos.push({
    title: event.target[0].value,
    complete: false,
    id: self.crypto.randomUUID(),
  });

  localStorage["toDoData"] = JSON.stringify(toDos);

  buildUI();

  form.reset();
});

document.documentElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("button-complete")) {
    toDos = toDos.filter((toDo) => toDo.id !== event.target.parentElement.parentElement.id);
    localStorage["toDoData"] = JSON.stringify(toDos);
    buildUI();
  }
});

buildUI();
