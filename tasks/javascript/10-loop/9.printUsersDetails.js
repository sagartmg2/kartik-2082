let users = [
  {
    name: "ram",
    subjects: [
      {
        name: "python",
        price: 1000,
      },
      {
        name: "ai",
        price: 2000,
      },
    ],
  },
  {
    name: "hari",
    subjects: [
      {
        name: "python",
        price: 1000,
      },
      {
        name: "ai",
        price: 2000,
      },
    ],
  },
  {
    name: "sita",
    subjects: [
      {
        name: "python",
        price: 1000,
      },
      {
        name: "ai",
        price: 2000,
      },
      {
        name: "ml",
        price: 2000,
      },
    ],
  },
];

/* 
    output:
    ram is studying python, ai, ml and his total cost is  3000

*/

users.forEach((user) => {
  let subjects = "";
  let total = 0;

  user.subjects.forEach((el, index) => {
    if (index == user.subjects.length - 1) {
      subjects += `${el.name}`;
    } else {
      subjects += `${el.name}, `;
    }

    // total = total + el.price
    total += el.price;
  });

  // by using arry.reduce funciton, can do in single line

  console.log(
    `${user.name} is studying ${subjects} and his total cost is ${total}`
  );
});
