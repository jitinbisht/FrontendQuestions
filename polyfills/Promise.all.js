const p1 = Promise.resolve(3);
const p2 = 1337;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 100);
});


Promise.myAll = function(promises) {
  return new Promise((resolve, reject) => {
  	let results = [];
  	let completedPromises = 0;
  	promises.forEach((promise, index) =>{
    	Promise.resolve(promise).then(value => {
      	results[index] = value;
        completedPromises += 1;
        if(completedPromises === promises.length){
        	resolve(results)
        }
      })
      .catch(error => {
      	reject(error);
      })
    })
  })
}

Promise.myAll([p1, p2, p3]).then((values) => {
  console.log(values); // [3, 1337, "foo"]
});
//ERROR:
Promise.myAll([p1, p2, Promise.reject("rejected promise")]).then((values) => {
  console.log(values);
}).catch(err => console.log(err))  // "rejected promise"
