const array1= ['a', 'b', 'x', 'z']; 
const array2= ['k', 'x', 'c']  

function findCommonElements3(arr1, arr2) { 
var res = []
     arr1.forEach(item => {
        debugger;
        if(arr2.includes(item)){
                    res.push(item)
        }

        }) 
        return res;
} 
console.log(findCommonElements3(array3, array4));

//o/p: ['x']
