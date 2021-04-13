const promiseAll = (promises) => {
  let result = [];
  let completedPromises = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then((value) => {
        result[index] = value;
        completedPromises += 1;
        if(completedPromises === promises.length) {
          resolve(results);
        }
      })
      .catch(error => {
        reject(error);
      })
    })
  })
}
