// Part 1: Fizz Buzz - Preston, Iris, Natalie, Wen

// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("Fizz Buzz")
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i)
//     }
// }

// Part two is at the end


// Part 3: Feeling Loopy

// Here is the code for the group solve
// const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
// let row = "";
// for (const char of csv) {
// 	if  (char !== "\n" && char !== ","){
// 		row += char;
// 	} else if (char !== "," ) {
//         console.log(row);
//         row = "";
// 	} else if (char == ","){
//         row += char + " "
//     } else {
//             console.log(char)}
// }

// Trying it another way myself

// assign the strings
// const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor\'s Assistant,26";
// let currentData = "";

// // regular "for loop" ->    determines the length of string 
// //                          and runs the loop that many times
// for (let i = 0; i <csv.length; i++) {
//     const character = csv[i];

//     // if the character is not the endline character, print to screen
//     // increase the 
//     if (character === "\n") {
//         // show the currentData
//         console.log(currentData);

//         //reset the currentData
//         currentData = "";
//     } else {
//         currentData += character + " ";
//     }
// }
// log the last word after the final comma
// if (currentData) {
//     console.log(currentData);
// }

// Part 2: Prime Time

/* THE NEGATIVE VIEW
 initialize variable "count" to zero
 set "count" to stop at 100
 increase "count" by 1 on each iteration */
 for (let count = 0; count <= 100; count++) {

    // define variable "notPrime" as false
        let notPrime = false;
        /* initialize variable "i" to 2 (won't
         run 0->100 if "i=0" or "i=1" WHY NOT?!)
         set the upper limit of this loop
         increase by 1 on each iteration */
        for (let i=2; i <= count; i++) {
            /* if the remainder of "count" divided
             by "i" IS zero AND "i" is not equal
             to "count" --> set "notPrime" to 
             true */
            if (count%i===0 && i!==count) {
                notPrime = true;
            }
        }
        // but if both of those conditions are not
        // met, then set "notPrime" to false
        if (notPrime === false) {
                    //print "count"
                    console.log(count);
        }
    }
    
    