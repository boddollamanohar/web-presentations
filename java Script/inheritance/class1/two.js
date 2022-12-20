class A {
    m1() {
        console.log("Class A - m1 method")
    }
    m2() {
        console.log("Class A - m2 method")
    }
}
class B extends A {

}
let a1 = new A()
a1.m1()
a1.m2()