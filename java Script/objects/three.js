let user = {
    id: 101,
    name: "abcd",

}
console.log(user)
user.location = 'bangalore'
user.salary = 35000
console.log(user)
delete user.location
console.log(user)
user.alter_lacotion = '123,abcd'
console.log(user)

