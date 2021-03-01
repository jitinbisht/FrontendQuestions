function debounce(fun, delay) {
  let timeout;
  return function executeFunction(...args) {
    const laterToExecute = () => {
      clearTimeout(timeout);
      fun(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(laterToExecute, delay);
  };
}

function add(a, b) {
  console.log(a + b);
}
const debounceCheck = debounce(add, 1000);
debounceCheck(3, 4); //=> 7
