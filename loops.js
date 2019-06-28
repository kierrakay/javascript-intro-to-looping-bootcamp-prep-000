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

function doWhileLoop(num) {
let num = 0;
do {
    console.log("I run once regardless."); 
    x++;
} while (x < 1);

let num2 = 10;
do {
    console.log("I run once regardless.");
    x++;
} while (x <= 10);
}