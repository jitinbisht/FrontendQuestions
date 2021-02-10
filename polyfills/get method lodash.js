var test={a:{b:{c:20}}};

function get(mainObj, path, def=null){
	var newPath = path.split('.');
  
  newPath.forEach(item => {
  		mainObj = mainObj[item];
  })
  return mainObj;
}

console.log(get(test, 'a.b.c', ''));
//20
