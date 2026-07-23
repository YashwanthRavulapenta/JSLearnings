const prompt = require("prompt-sync")();
let s = "yasifjhbd"
for(let i =0;i<9;i++){
    console.log(s[i])
}

let str = "React"
let newStr = str.split("");
newStr.reverse()
console.log(newStr.join(""))

let string1 = "yashhh"
let ansStr = ""
for(let i=0;i<=string1.length-1;i++){
    ansStr =  string1[i] + ansStr;
}
console.log(ansStr);


//for enumerable properties we use for-in loop 
//Enumerable properties for Array is : indexes
//Enumerable properties for Object is : keys
let str1 = "yash"
for(let e in str1){
    console.log(e,str1[e]);
}

for(let e of str1){
    console.log(e)
}

let arr1 = [24,56.8,-23,true,NaN,null,"yash",[56,67,"yash"],{"name":"yash","age":20}]
//Enumerable properties for Array is : indexes
for(let eachItem in arr1){
    console.log(arr1[eachItem])
}

for(let eachItem of arr1){
    console.log(eachItem)
}

let obj1 = {
    name : "yash",
    age : 49
}
for(let each in obj1){
    console.log(each+":"+obj1.each);
}


let day = prompt("Enter a day");
switch(day){
    case 'Monday':
        console.log("sambar rice");
        break;
    case 'Tuesday':
        console.log("lemon rice");
        break;
    case 'Wednesday':
        console.log("Zeera rice");
        break;
    case 'Thrusday':
        console.log("Egg rice");
        break;
    case 'Friday':
        console.log("Veg rice")
    case 'Saturday':
        console.log("tomato rice");
        break;
    case 'Sunday':
        console.log("chicken rice");
        break;
    default:
        console.log("Nothing to cook"); 
}


















for(let i=0;i<10;i++){
    if(i==3){
        break;
    }
    console.log(i);
}

for(let i=0;i<5;i++){
    if(i==3){
        continue;
    }
    console.log(i);
}