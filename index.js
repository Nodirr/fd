let modal = document.querySelector('.animate-modal');

function openModal() {
  modal.classList.toggle('open-modal');
  
}



let inp = document.querySelector('.inp');
let btn = document.querySelector('.btn');
let h1 = document.querySelector('.h1');

btn.onclick = function () {
  console.log(inp.value);
  h1.innerHTML = inp.value;
};

let colorInp = document.querySelector('.colorInp');
let colorBtn = document.querySelector('.colorBtn');
let colorH1 = document.querySelector('.colorH1');

colorBtn.onclick = function () {
  console.log(colorInp.value);
  colorH1.innerHTML = colorInp.value;
  document.body.style.backgroundColor = colorInp.value;
};
