const debounce = (func, delay) => {
  let inDebounce
  return function() {
    const context = this
    const args = arguments
    clearTimeout(inDebounce)
    inDebounce = setTimeout(() => func.apply(context, args), delay)
  }
}

function add(a, b) {
  console.log(a + b);
}
const debounceCheck = debounce(add, 1000);
debounceCheck(3, 4); //=> 7
