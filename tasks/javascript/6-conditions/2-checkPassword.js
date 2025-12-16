let name = "ram";
let email = "ram@ram.com";
let password = "ram-password";



/* EXPECTED-OUTPUT */
checkPassword("ram-password"); //  logged in
checkPassword("ram-wrong-password"); //  Invalid Credentials

/* 
    TODO: 
    create a function checkPassword  
    and 
    if the password matches for above user, print  logged in else print invalid credentials


    as self-research check for Logical operators too AND(&&) , OR(||) , NOT(!)
    THEN , 
    MUTATE/UPDATE THE FUNCTION  checkPassword

    checkPassword("ram@ram.com","ram-password")   // user logged in 
    checkPassword("ram@ram.com","ram-wrong-password")   // Invalid Credentails
    checkPassword("shayam@shyam.com","ram-password")   // Invalid Credentails


*/
