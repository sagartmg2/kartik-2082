/* 
    array function   NOTE: break wont work here
    - foreach   // simply for loop
    - find   // gives one element from array
    - filter // filters out elements from array
    - map  // modify each and every element of that array.

*/

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number, index) => {
  console.log(`index ${index}, number:${number}`);
});

let firstEvenNumber = numbers.find((number, index) => {
  console.log(`index ${index}, number:${number}`);
  if (number % 2 == 0) {
    return true;
  }
});
console.log({ firstEvenNumber });

let evenNumbers = numbers.filter((number, index) => {
    console.log(`index ${index}, number:${number}`);
    if (number % 2 == 0) {
        return true;
    }
});

console.log({evenNumbers});


let doubleNumbers = numbers.map((el) =>{
    return el*2
})

console.log({doubleNumbers});
console.log(numbers);
