let students = [
  {
    name: "Ramesh",
    scores: [
      { exam: "first-term", gpa: 2 },
      { exam: "second-term", gpa: 4 }
    ]
  },
  {
    name: "Rita",
    scores: [
      { exam: "first-term", gpa: 1.5 },
      { exam: "second-term", gpa: 4 }
    ]
  },
  {
    name: "Kiran",
    scores: [
      { exam: "first-term", gpa: 4 },
      { exam: "second-term", gpa: 2.9 }
    ]
  }
];


/* 
    EXPECTED-OUTPUT: 
    ramesh scored gpa 2 in first-term and 4 in second-term
    rita scored gpa 1.5 in first-term and 4 in second-term
    kiran scored gpa 4 in first-term and 2.9 in second-term

*/
