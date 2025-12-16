let users = [
  { name: "ram", member: true, hasTicket: false },
  { name: "hari", hasTicket: false },
  { name: "sita", member: false, hasTicket: false },
  { name: "shyam", member: false, hasTicket: true },
];


/* EXPECTED-OUTPUT
    ram can enter the event 
    ram can not enter the event 
    sita can not enter the event 
    shyam can enter the event 
*/
