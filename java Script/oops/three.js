class Account{
    min_Bal = 500;
    Acc_Bal = 000;
    holder_Name=""
    set_holderName (Name){
        this.holder_Name(Name)

    }
    deposit_Amount (amount){
        this.min_Bal =this.min_Bal+amount;
    }
    }
/*let a1= new Account 
let a2= new Account 
console.log(a1)
console.log(a2)
a1.holder_Name("manohar")
a1.holder_Name("mahesh")
console.log(a1)
console.log(a2)
a1.deposit_Amount(500015)
a2.deposit_Amount(1000011)