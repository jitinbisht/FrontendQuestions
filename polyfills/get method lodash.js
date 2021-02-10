var test={a:{b:{c:20}}};

function get(mainObj, path, def=null){
	var newPath = path.split('.');
  
	 
  for(item of newPath){
  	mainObj = mainObj[item];
  }
	
//   newPath.forEach(item => {
//   		mainObj = mainObj[item];
//   })
  return mainObj;
}

console.log(get(test, 'a.b.c', ''));
//20
