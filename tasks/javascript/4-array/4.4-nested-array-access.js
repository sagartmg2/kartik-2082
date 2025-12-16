

/*  
    NOTE: each element of an array always have some index

*/

let colorNames = ["white", "red", "blue", "green", "black"]

/*
    the relative index of above array are 
    let colorNames = ["index-0", "index-1", "index-2", "index-3", "index-4"]

    to acess a PARTICULAR ELEMENT inside an array, we can use these index

*/

console.log(colorNames[1]);  // red // cause the index of red is 1 
console.log(colorNames[3]);  // green // cause the index of green is 3 





const colors = [
    { name: "white", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", arrayIndex: 0 },
    { name: "red", hex: "#FF0000", rgb: "rgb(255, 0, 0)", arrayIndex: 1 },
    { name: "blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)", arrayIndex: 2 },
    { name: "green", hex: "#00FF00", rgb: "rgb(0, 255, 0)", arrayIndex: 3 },
    { name: "black", hex: "#000000", rgb: "rgb(0, 0, 0)", arrayIndex: 4 }
];



/* code here */

/* 
TODO:
    using the colors array above print the following

    OUTPUT: 
     - hex value of color red is #FF0000
     - hex value of color black is #000000

*/



