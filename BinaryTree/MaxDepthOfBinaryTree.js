var root = [3,9,20,null,null,15,7];

const maxDepth(root) {
  if(root === null) return 0;
  let left = maxDepth(root.left);
  let right = maxDepth(root.right);
  return Math.max(left,right) + 1;
}

maxDepth(root);
o/p: 3
