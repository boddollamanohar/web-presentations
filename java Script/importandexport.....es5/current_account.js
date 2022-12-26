const Account=require('./aacount')
class Open_Account extends Account{
    constructor(id,Name,amount,msg,fullname,place){
    super(id,Name,amount,msg,fullname,place)
    this.place=place;

    }
}
let s1 = new Open_Account(101,"Vasu",10000,"msg","nara")
let s2 = new Open_Account(102,"Vasudeva",10000,"msg","lokesh","ka")
console.log(s1);
console.log(s2);