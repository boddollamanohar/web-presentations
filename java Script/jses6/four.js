let user = {
    id : 101,
    name: "manohar",
    email: "iambmanohar@gamil.com"
}
let details ={
    location : "kuppam",
    email: 'bmanohar1432@gmail/com',
    salary :45000
}
/* console.log (details)
console.log (user) */
let user_details ={ ...user,...details,}
console.log(user_details)
