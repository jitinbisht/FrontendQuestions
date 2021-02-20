//https://dmitripavlutin.com/how-to-compare-objects-in-javascript/

1. Shallow equality:

const hero1 = {
  name: 'Batman',
  city: 'Gotham'
};
const hero2 = {
  name: 'Batman',
  city: 'Gotham'
};

shallowCompare(hero1, hero2);

function shallowCompare(object1, object2) {
  const key1 = Object.keys(object1);
  const key2 = Object.keys(object2);
  
  if(key1.length !== key2.length) {
    return false;
  }
  
  for(key in key1) {
    if(object1[key] !== object2[key]) {
      return false
    }
  }
  return true;
}

=============================

2. Deep equality for nested objects.

const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};
const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham'
  }
};

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
        ) {
         return false;
        }
   }
      return true;
 }
 
 function isObject(object) {
  return object !== null && typeof object === 'object';
}
