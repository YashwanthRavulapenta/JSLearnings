const prompt = require("prompt-sync")();


// function add(a,b){
//     return a+b;
// }

// console.log(add(4,5))




// function checkEvenOrNot(num){
//     if(num%2==0){
//         return 'even'
//     }
//     return 'odd'
// }

// const num = checkEvenOrNot(45);
// console.log(num)



// function divisibles(num){
//     let ans = [];
//     for(let i=1;i<=num;i++){
//         if(!(num%i)){
//             ans.push(i);
//         }
//     }
//     return ans.join(",");
// }

// let factors = divisibles(45)
// console.log(factors)

// prompt("enter a number : ")


// function isPrime(num){
//     if(num <= 1) return false;
//     if(num==2) return true;
//     if(num%2==0) return false;
//     for(let i=3;i<=Math.sqrt(num);i+=2){
//         if(num%i ==0 ){
//             return false;
//         }
//     }
//     return true;
// }


// function primeInRange(num){
//     let primeArr = []
//     let count = 0;
//     for(let i=1;i<=num;i++){
//         if(isPrime(i)){
//             primeArr.push(i);
//             count++;
//         }
//     }
//     return [primeArr.join(",") , count];
// }

// console.log(primeInRange(50))


function isPalindrome(str){
    let l = 0;
    let h = str.length-1;
    while(l<=h){
        if(str[l]==str[h]){
            l++;
            h--;
        }else{
            return false;
        }
    }
    return true;
}

let name = prompt("Enter a string : ");
name = name.toLowerCase();
console.log(isPalindrome(name))