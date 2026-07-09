function greetName(greeting){
    function greetToSomeone(name){
        function greetAtTime(time){
            // return `${greeting} to ${name} at ${time}:00`
            if(greeting=="Good Morning"){
                return `${greeting} to ${name} at ${time}:00AM`
            }else{
                return `${greeting} to ${name} at ${time}:00PM`
            }
        }
        return greetAtTime
    }
    return greetToSomeone
}

const greetToSomeoneAtMorningAtTime = greetName("Good Morning")("Yash")(6)
console.log(greetToSomeoneAtMorningAtTime) 
const greetToSomeoneAtEveningAtTime = greetName("Good Evening")("Yash")(9)
console.log(greetToSomeoneAtEveningAtTime) 

// const greetToSomeoneAtMorning = greetName("Good Morning")
// console.log(greetToSomeoneAtMorning("yashhh"))
// console.log(greetToSomeoneAtMorning("snehuu"))
// console.log(greetToSomeoneAtMorning("Shiva"))
// console.log("-----------------")
// const greetToSomeoneAtEvening = greetName("Good Evening")
// console.log(greetToSomeoneAtEvening("yashhh"))
// console.log(greetToSomeoneAtEvening("snehuu"))
// console.log(greetToSomeoneAtEvening("Shiva"))


