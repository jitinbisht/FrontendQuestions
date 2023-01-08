Function.prototype.myBind = function (...args) {
  // throw 'Not implemented!';
  const obj = this;
  const params = args.slice(1)
  return function(...args2){
    obj.apply(args[0], [...params, ...args2])
  }
};
