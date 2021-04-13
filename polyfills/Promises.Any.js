const promiseAny = (promises) => {
  let failedPromise = 0;
 
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      promise.then(result => {
        resolve(result);
      }).catch(err => {
        failedPromise++;
        if(promises.length === failedPromise){
          reject(err);
        }
      })
      
    })
  })
}
