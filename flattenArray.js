//1st Method

const myArray = [['hey'],['ho'],[['lets'], ['go']]]
const flattenArray = arr => {

  const result = [];

  arr.forEach(el => {
    if (Array.isArray(el)) {
      result.push(...flattenArray(el));
    } else {
      result.push(el);
    }
  });

  return result;
}

flattenArray(myArray)

======================================================

2nd Method:

const arr = [[1,2],[3,[4,[5]]]];
 
const flattened = arr.flat(Infinity);
console.log(flattened)
======================================================


function flatten(arr)
{
    return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flatten(cur) : cur), []);
};
 
const arr = [[1,2],[3,[4,[5]]]];
 
const flattened = flatten(arr);
console.log(flattened);
 =======================================================
