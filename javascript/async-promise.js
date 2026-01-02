// exception handling

let num1 = 1;
try {
  let reuslt = num1 + num2;
  console.log({ reuslt });
} catch (err) {
  console.log(err);
}



// promise
console.log("start");

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("fulfilled");
    reject("couldnot do it");
  }, 2000);
});


console.log(promise);

promise
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("end");
