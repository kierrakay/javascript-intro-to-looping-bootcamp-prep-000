function forLoop(array) {
  for ( let i = 0; i < 25 ; i++) {
    if (i === 1) {
      array.push(`I am 1 strange loop.`)
      } else {
      array.push(`I am ${i} strange loops.`)
      }
    }
return array;
}


function whileLoop(n) {
  let countdown = n ;
  
  while (countdown > 0) {
    console.log(--countdown);
  }
  return "done";
}









do {
  // Your code here
} while (condition);






function doWhileLoop(num) {
let x = 0;
do {
    console.log("I run once regardless.");  // Prints numbers from 0 to 4
    x++;
} while (x < 1);

let x = 10;
do {
    console.log(); // Prints 10
    x++;
} while (x <= 5);
}