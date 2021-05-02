var zigzagLevelOrder= function(root){
	let results = [];
  const lot = (root, level) =>{
  	if(!root) return;
    
    if(results[level]) results[level].push(root.val)
    else results[level] = [root.val];
    lot(root.left, level +1);
    lot(root.right, level +1);
  }
  lot(root, 0);
  return results.map((b,i)=> i%2 ? b.reverse(): b)

}
console.log(zigzagLevelOrder([3,9,20,null,null,15,7]))
