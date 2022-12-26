const Account=require('./aacount')
class Saving_Account extends Account {
    
    constructor(id,Name,amount,msg,fullname){
        super(id,Name,amount,msg)

     this.fullname=fullname;


    }
}

