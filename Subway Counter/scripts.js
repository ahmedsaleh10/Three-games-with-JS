// document.getElementById("count-el").innerText=5;
let count = 0;
let count_el = document.getElementById("count-el");
function increment() {
  count++;
  count_el.innerText = count;
}

function save() {
  console.log(count);
}
