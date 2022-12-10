class Account {
    min_Bal = 500;

    open_Account() {
        console.log("Opened Account Succesffully")
    }
    deposit_Amount() {
        console.log("Deposited Amount Successfully")
    }
    get_St() {
        console.log("Displaying St")
    }

    get_Bal() {
        console.log("Display Bal")
    }
    withdrawl_Amount() {
        console.log("No Cash come tomorrow")
    }
    close_Account() {
        console.log("Not Possible Pay GST!")
    }
}
let a1 = new Account();
console.log(a1)
console.log(a1.min_Bal)
a1.open_Account()
a1.deposit_Amount()
a1.get_St()
a1.get_Bal()
a1.withdrawl_Amount()
a1.close_Account()