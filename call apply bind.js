// ----------call, apply and bind methods

let admin = {
    firstName: 'Prateek'
}
user.sayHi()
console.log(admin.firstName)
user.sayHi()//rahul

console.log(user.sayHi)
user.sayHi.call(admin)

hello()
hello.call(admin)
hello.call(user)

hello.call(admin, 1, 2)
hello.apply(admin, [3, 4])

// bind .......................

let newHello = hello.bind(admin)
newHello(1,2)

hello.bind(admin)()
hello.call(admin)
hello.apply(admin)

var message = 'Hello Earth'
const obj = {
    message: 'Hello, World'
}
function print() {
    console.log(this.message)
}

print() 
print.call(obj)
print.apply(obj)
print.bind(obj)()
