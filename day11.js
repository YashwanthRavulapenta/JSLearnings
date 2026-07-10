

function backAccount(){
    let balance = 1000

    let functionsObj = {
        checkBalance:(pinNumber)=>{
            if(pinNumber===1234){
                console.log(`your balance is : ${balance}`)
            }else{
                console.log(`incorrect Pin number entered`)
            }
        },
        deposit:(money,pinNumber)=>{
            if(money > 0 && pinNumber === 1234){
                balance += money
            }else{
                console.log(`incorrect pin or money`)
            }
        },
        withdraw:(money,pinNumber)=>{
            if(money<0){
                console.log(`money is not permitted to withdraw`)
            }else if(pinNumber===1234){
                    if(money < 0){
                        console.log(`money is not permitted to withdraw`)
                        return
                    }else if(money > balance){
                        console.log(`insufficient money in Your Account`)
                    }else{
                        balance -= money
                    }
                    }else{
                        console.log(`incorrect Pin Entered`)
                    }
        }
    }
    
    return functionsObj
}

const person1Acc = backAccount()
// person1Acc.deposit(1000,1234)
// person1Acc.checkBalance(1234)
// person1Acc.deposit(-122,1234)
// person1Acc.checkBalance(1234)
// person1Acc.deposit(2000,1234)
// person1Acc.checkBalance(1234)
person1Acc.withdraw(-111,1232)
person1Acc.checkBalance(1234)

