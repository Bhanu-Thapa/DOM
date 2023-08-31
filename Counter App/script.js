let val = document.querySelector('input');

let decrement = document.querySelector('.decrement');

decrement.addEventListener('click', () => {
  let num = Number(val.value);

  if (num === 0) {
    alert('negetive value not allowed');
  } else {
    val.value = num - 1;
  }
});

function increment() {
  let num = Number(val.value);

  if (num === 10) {
    alert('reached highest value 10.');
  } else {
    val.value = num + 1;
  }
}

function reset() {
  val.value = 0;
}
