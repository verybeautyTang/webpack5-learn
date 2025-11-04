// import './index.css'
export const name: string = 'jasmine'

interface IAnimal {
  name: string
  age: string
}

const dog: IAnimal = {
  name: 'shown',
  age: '22',
}

console.log(dog)
function getName() {
  console.log('my name is jasmine')
}

getName()
