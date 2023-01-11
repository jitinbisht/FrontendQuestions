1. You could use a global variable, and a function to increase the counter:

 var counter = 0;

 function updateClickCount() {
     ++counter;
     // Do something with counter
 }
But, the pitfall is that any script on the page can change the counter, without calling updateClickCount().

2. Now, you might be thinking of declaring the variable inside the function:

 function updateClickCount() {
     var counter = 0;
     ++counter;
     // Do something with counter
 }
But, hey! Every time updateClickCount() function is called, the counter is set to 1 again.

3. Thinking about nested functions?

Nested functions have access to the scope "above" them.

In this example, the inner function updateClickCount() has access to the counter variable in the parent function countWrapper():

 function countWrapper() {
     var counter = 0;
     function updateClickCount() {
         ++counter;
         // Do something with counter
     }
     updateClickCount();
     return counter;
 }
This could have solved the counter dilemma, if you could reach the updateClickCount() function from the outside and you also need to find a way to execute counter = 0 only once not everytime.

4. CLOSURE TO THE RESCUE 
<script>
var updateClickCount = (function(){
    var counter = 0;

    return function(){
        ++counter;
        document.getElementById("spnCount").innerHTML = counter;
    }
})();
</script>

<html>
<button onclick="updateClickCount()">click me</button>
<div> you've clicked
    <span id="spnCount"> 0 </span> times!
</div>
</html>

