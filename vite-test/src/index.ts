import { sum } from './sum'
// import './index.css'

type User = {
    name:  string,
    age:  number
}

const user: User = {
    name: 'jasmine',
    age: 27
}

const sayHello = (user:User) => {
    console.log(user)
}

sayHello(user)

console.log(sum(1,2))