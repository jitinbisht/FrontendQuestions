 let str = “baaabbabbb”;
 
 function maxLenSubStr(str){
      if(str.length < 3) return str.length;
      
      let temp = 2;
      let ans = 2;
      for(let i=2; i<str.length; i++){
       if (str.charAt(i) != str.charAt(i - 1) || 
            str.charAt(i) != str.charAt(i - 2)) 
            temp++; 
       else {
        ans=Math.max(temp, ans);
        temp=2;
      }
       ans=Math.max(temp, ans);
       return ans;
 }
 
 maxLenSubStr(str);
