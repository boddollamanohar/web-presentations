class Account {
    Acc_Id;
    Acc_Name;
    Acc_Bal=0
    constructor(Id,Name,Amount){
    this.Acc_Id=Id;
    this.Acc_Name=Name;
    this.Acc_Bal=Amount;
    }
Deposite(Amount){

this.Acc_Bal = this.Acc_Bal + Amount;
}
get_Bal(Amount){
    return this.Acc_Bal = this.Acc_Bal-Amount;


}}
let a=new Account(101,"abc",1000)
let b=new Account(102,"abcd",5000)

console.log(a);
console.log(b);
let r1 = a.get_Bal()
console.log(r1)

