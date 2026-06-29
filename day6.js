const prompt = require("prompt-sync")();
//Control flow statements 

//if-else
// let a = 10;
// let b = 20;
// if(a>b){
//     console.log(a);
// }else{
//     console.log(b);
// }

// //if-else ladder
// if(10>20){
//     console.log(20);
// }else if(20>40){
//     console.log(40);
// }else{
//     console.log(10);
// }

// //break
// //break is inside an if block, which is not allowed.

// // if(20>10){
// //     console.log("start");
// //     break;
// //     console.log("end");
// // }
// // console.log("final end");

// let age = prompt("enter age : ");
// age = Number(age);
// console.log(typeof(age));
// if(age >= 18){
//     console.log("eligible to Vote");
// }else{
//     console.log("Not eligibe for vote");
// }

// //Atomorphic nUmber or not
// let number1 = prompt("enter number1 : ");
// let sq = number1 * number1;
// let len = String(sq).length;
// if(sq%(10**String(number1).length) == number1){
//     console.log("atomorpic");
// }else{
//     console.log("not atomorphic");
// }

// let bill = prompt("enter bill : ")
// switch(1){
//     case (bill>1000):
//         console.log("you 50% discount");
//         break;
//     case (bill>500):
//         console.log("you got 30% discount");
//         break;
//     case (bill>200):
//         console.log("you got 10% discount");
//         break;
//     default:
//         console.log("not applicable discount");
//         break;
// }

// let computerQuess = Math.random();
// computerQuess = Math.floor(computerQuess*20);

// let tries = 0;
// while(true){
//     let guessNumber = prompt("Guess Number : ");
//     if(guessNumber == computerQuess){
//         tries++;
//         console.log(`yes your are win after : ${tries} tries`)
//         break;
//     }else if(guessNumber < computerQuess){
//         console.log(`Guess something big`);
//         tries++;
//     }else{
//         console.log("guess something lower");
//         tries++;
//     }
// }

let obj1 = {
    name:"yash",
    noOfProblems:45,
    isFirstBench:false
}
let obj2 = {
    name:"snehu",
    noOfProblems:89,
    isFirstBench:true
}
let obj3 = {
    name:"shiva",
    noOfProblems:56,
    isFirstBench:false
}

let obj4 = {
    name : "prabha",
    noOfProblems:80,
    isFirstBench:false
}

let arr = [obj1,obj2,obj3,obj4];
console.log(arr);

for(let eachObj of arr){
    if(eachObj.noOfProblems>=70 && eachObj.isFirstBench){
        console.log(`CR is ${eachObj.name}`);
    }else{
        console.log("not applicable")
    }
}

