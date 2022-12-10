class Account {
    min_Balance = 500;

    open_Account() {
        console.log("  succussfully account onpened")
    }
    deposit_Amount() {
        console.log("you have been 500 deposited")
    }
    get_Statement() {
        console.log(" you have 500 rupees only")
    }
    get_Balance() {
        console.log(" 500/-")
    }
    withdraw_Account() {
        console.log(" ok please wait some time")
    }
    close_Account() {
        console.log("ok, wait some time")
    }
}
let a1 = new Account();
console.log(a1)
console.log(a1.min_Balance)
a1.open_Account()
a1.deposit_Amount()
a1.get_Statement()
a1.get_Balance()
a1.withdraw_Account()
a1.close_Account()

