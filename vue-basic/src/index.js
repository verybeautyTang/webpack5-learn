const name = 'jasmine'

const age = 18

console.log(age)

const arr = [1, 2, 3, , 5]

// 这里的问题在于，一个对象里面的两个 key 值一样 no-dupe-key
const user = {
  name: 'jasmine1',
  name: 'jasmine2',
  age: 23,
}

// 这里的问题在于已经 return 了但是还在给数据赋值
function getdata() {
  let data = arr[0]
  const temp = user.age
  console.log(temp)
  return data
  data = arr[1]
}

getdata()
