class Account {
    constructor(id,name,amount,msg){
        this.id=id;
        this.name=name;
        this.amount=amount;
        this.msg=msg
    }
}
class Saving_Account extends Account {
    constructor(id,name,amount,msg,fullname){
        super(id,name,amount,msg)

     this.fullname=fullname;



    }

}
class Open_Account extends Saving_Account{
    constructor(id,name,amount,msg,fullname,place){
    super(id,name,amount,msg,fullname)
    this.place=place;
    }
}
let s1 = new Saving_Account(101,"Vasu",10000,"msg","nara")
let s2 = new Open_Account(102,"Vasudeva",10000,"msg","lokesh","ka")
console.log(s1);
console.log(s2);