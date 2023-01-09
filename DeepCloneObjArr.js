function clone(input){
	if(input === null || typeof(input) !== 'object') return input;
  const output = Array.isArray(input) ? [] : {};
  
  for(const key of Object.keys(input)) {
  	output[key] = clone(input[key])
  }
  return output;
}
