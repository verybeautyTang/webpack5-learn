
import './index.css'

import sum  from './sum.ts'

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