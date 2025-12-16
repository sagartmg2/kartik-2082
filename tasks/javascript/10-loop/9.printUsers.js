let users = [
  {
    name: "ram",
    subjects: ["python", "ai", "ml"],
  },
  {
    name: "sita",
    subjects: ["python", "ml"],
  },
  {
    name: "hari",
    subjects: ["js", "node"],
  },
];

users.forEach((user) => {
  let subjects = "";
  user.subjects.forEach((el, index) => {
    if (index == user.subjects.length - 1) {
      subjects += `${el}`;
    } else {
      subjects += `${el}, `;
    }
  });

  // by using arry.reduce funciton, can do in single line

  console.log(`${user.name} is studying ${subjects}`);
});

/* 
    output:
    ram is studying python, ai, ml
    sita is studying python, ml
    hari is studying js, node 

*/
