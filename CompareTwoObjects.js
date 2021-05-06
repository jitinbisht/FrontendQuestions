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

var obj1 = {
    numbers: [1, 2, 3],
    letters: ['a', 'b', 'c'],
    obj: { prop: 1, name: 'Jitin' },
    bool: false 
};

var obj2 = {
    numbers: [1, 2, 3],
    letters: ['a', 'b', 'c'],
    obj: { prop: 1 },
    bool: false 
};


Object.compare = function (obj1, obj2) {
	//Loop through properties in object 1
	for (var p in obj1) {
		//Check property exists on both objects
		if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;
 
		switch (typeof (obj1[p])) {
			//Deep compare objects
			case 'object':
				if (!Object.compare(obj1[p], obj2[p])) return false;
				break;
			//Compare function code
			case 'function':
				if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
				break;
			//Compare values
			default:
				if (obj1[p] != obj2[p]) return false;
		}
	}
 
	//Check object 2 for any extra properties
	for (var p in obj2) {
		if (typeof (obj1[p]) == 'undefined') return false;
	}
	return true;
};
