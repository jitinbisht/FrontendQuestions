const fizzbuzz = (num) => {
	if(num % 15 === 0){
  	console.log('fizzbuzzzz...')
  } else if(num % 3 === 0){
  	console.log('fizzz...')
  } else if(num % 5 === 0){
  	console.log('buzzzz...')
  } else {
  		console.log(num)
  }
}
console.log(fizzbuzz(15))
