//functions

function add(num1=0,num2=0,num3=0){
    console.log(num1+num2+num3);
}
add(34,56);
add(56,7,45);
add(56,87,8,45);

//if we have multple numbers how then ??????
//rest operator - collect multiple elements and make into array or object (...num)
//1,3,56,67 ===> [1,3,56,67] using rest operator , in simple -> it packs the elements
function addition(...nums){

    console.log(nums);
    let s = 0;
    for(let eachNum of nums){
        s = s + eachNum;
    }
    console.log(s);
}

addition(34,6,57,23,4,57);
addition(78,89,45,4);

//Rest operator usage 2 - array destructuring
let nums1 = [24,56,78,8,[89],834,34];
let [first , second] = nums1;
console.log(first,second);
let [f,s,...allOther] = nums1; //rest operator
console.log(f,s,allOther);
console.log(f,s,allOther.flat());
console.log(f,s,allOther.flat().join(" "));


//type of function - 2
//console.log(funcTypeTwo(78,48));  => this statement not work beacause function exp is below it 
//Expression type of function : i.e function is assigned to variable 
const funcTypeTwo = function(num1 , num2){
    return num1-num2;
}
console.log(funcTypeTwo);
console.log(funcTypeTwo(58,48)); //this works fine


//type - 3 : Arrow functio : it belongs to ES6 feature

//console.log(funcTypeThree(3,5));  => not work out thiis also , call function before intilize

const funcTypeThree = (num1,num2) => {
    return num1*num2;
}

console.log(funcTypeThree(3,5));

const funcTypeThree1 = num1 => num1*num1 //optimized version : soo beautifull
console.log(funcTypeThree1(8));


//Imediately Invoke function : type - 4

(function(){
    let a = 10;
    console.log(a++ , ++a + a++ , a );
    console.log('hello bhaii')
})();
//it is like ()();


//Imediate Invoke funtion using arrow function
(()=>{
    console.log('hello yash');
})();


