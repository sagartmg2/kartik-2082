

let colorNames = ["white", "red", "blue", "green", "black"]

/*  
    we can create an array of colors like above  
    BUT
    what if we need to store  hex-values of respecitve colors too

    in that case, 
    we can use objects within arrays

*/

let colors = [
    { name: "white", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)" },
    { name: "red", hex: "#FF0000", rgb: "rgb(255, 0, 0)" },
    { name: "blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)" },
    { name: "green", hex: "#00FF00", rgb: "rgb(0, 255, 0)" },
    { name: "back", hex: "#000000", rgb: "rgb(0, 0, 0)" }
];

/*  
    And they have indexes too.   
    NOTE: each element of an array always have some index
*/

let colorsWithIndex = [
    { name: "white", hex: "#FFFFFF", rgb: "rgb(255, 255, 255)", arrayIndex: 0 },
    { name: "red", hex: "#FF0000", rgb: "rgb(255, 0, 0)", arrayIndex: 1 },
    { name: "blue", hex: "#0000FF", rgb: "rgb(0, 0, 255)", arrayIndex: 2 },
    { name: "green", hex: "#00FF00", rgb: "rgb(0, 255, 0)", arrayIndex: 3 },
    { name: "back", hex: "#000000", rgb: "rgb(0, 0, 0)", arrayIndex: 4 }
];

console.log(colors);
