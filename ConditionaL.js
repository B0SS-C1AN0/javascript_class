//the project was to create a prompt
 //for the user to guess the right integer
var numbers = prompt("guess the number");
if (numbers == 2) {
     console.log("correct");
} else {
 console.log("wrong");    
}

 //i also tried the code in ternary conditions
 var numbers = prompt("guess the number");
 console.log(numbers==2 ? "correct" : "not correct");

 //conditionals in arrow function
 const behaviour = (bad, good, isGood) => {
     console.log(isGood ? good : bad);
   };
   
   // Usage example
   behaviour("This is bad behavior.", "This is good behavior.", true);  // Outputs: This is good behavior.
   behaviour("This is bad behavior.", "This is good behavior.", false); 

  