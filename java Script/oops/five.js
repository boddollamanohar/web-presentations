class account{
    min_Bal =500;
    acc_Bal=10000;
    deposit_amount (amount){
         this.acc_Bal=this.acc_Bal+ amount
    }
 get_Bal(amount){
     return this.acc_Bal=this.acc_Bal+ amount
 }
}
let a1 = new account ()
let a2 = new account ()
console.log(a1)
console.log(a2)

a1. deposit_amount(10005)
a2. deposit_amount(10001)


console.log(a1)
console.log(a2)

console.log("display balance" )
let r1 = a1.get_Bal(5000)
let r2 = a1.get_Bal(500)
console.log(r1)
console.log(r2)