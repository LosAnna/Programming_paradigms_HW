// Задача:
// Написать игру в “Крестики-нолики”. Можете использовать
// любые парадигмы, которые посчитаете наиболее
// подходящими. Можете реализовать доску как угодно - как
// одномерный массив или двумерный массив (массив массивов).
// Можете использовать как правила, так и хардкод, на своё
// усмотрение. Главное, чтобы в игру можно было поиграть через
// терминал с вашего компьютера.

const victories = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cage = document.querySelector(".cage");
const title = document.querySelector(".title");
const winTitle = document.querySelector(".win");
const reload = document.querySelector(".hide");
const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let check = true;

function showFields() {
  cage.innerHTML = "";
  arr.forEach((element) => {
    const template = document
      .querySelector(".template")
      .content.cloneNode(true);
    const field = template.querySelector(".field");
    console.log(checkWin());
    if (checkWin()) {
      field.disabled = true;
    } else {
      if (Number.isFinite(element)) {
        field.textContent = "";
      } else {
        field.textContent = element;
        field.disabled = true;
      }
    }
    field.addEventListener("click", () => {
      if (check) {
        title.textContent = "Ходит игрок O";
        let i = arr.indexOf(element);
        arr[i] = "X";
        check = !check;
      } else {
        title.textContent = "Ходит игрок X";
        let i = arr.indexOf(element);
        arr[i] = "O";
        check = !check;
      }
      showFields();
    });
    cage.append(field);
  });
  checkWin();
}
showFields();

function checkWin() {
  victories.forEach((el) => {
    if (arr[el[0]] === arr[el[1]] && arr[el[1]] === arr[el[2]]) {
      winTitle.textContent = `Победил игрок ${arr[el[0]]}`;
      cage.innerHTML = "";
      title.textContent = "";
      reload.classList.remove("hide");
      reload.addEventListener("click", () => {
        location.reload();
      });
    }
  });
}
