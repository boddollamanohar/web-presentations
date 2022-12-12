class employes {
    minimum_Balance = 500;
    Account_Balance = 1000
    deposit_Amount(){

    }
    get_balance(){

        return  Account_Balance-minimum_Balance;
    }
}
let emp1 = new employes();
let emp2 = new employes();
emp1.deposit_Amount(5000)
emp2.deposit_Amount(5000)
console.log (emp1)
console.log (emp2)



