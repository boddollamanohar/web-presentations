class parent {
    m1() {
        console.log("parent class - m1()")
    }
}
class child extends parent {
    m2() {
        console.log("child class - m1()")
    }
}
let a1 = new child();
a1.m1()
