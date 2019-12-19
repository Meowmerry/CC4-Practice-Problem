//========== 1.1 =======================

Array1 = [1,2,30,400]
Array2 = Array1.map( x => x*2)
console.log('The answer is ', Array2) // The answer is  [ 2, 4, 60, 800 ]

//========== 1.2 =======================
array1 = [1,2,3,4]
array2 = array1.map( x => x.toString())

console.log('The answer is ', array2)
//========== 1.3 =======================
array1 = [1, "1", 2, {}, true, []] 
array2 = array1.map( x => typeof(x))

console.log('The answer is ', array2)
//========== 1.4 =======================
array1 = ["apple", "banana", "orange"]
array2 = array1.map( x => x.toUpperCase() )

console.log('The answer is ', array2)
//========== 1.5 =======================
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
  ]
array2 = array1.map( x => x.name)
console.log('The answer is ', array2)
//========== 1.6 =======================
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 }, ]

array2 = array1.map( x => x.age)
console.log('The answer is ', array2)
//========== 1.7 =======================
array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
  ]
array2 = array1.map( x => x.name + '  ' + x.surname)
console.log('The answer is ', array2)
//========== 1.8 =======================
array1 = [1,3,4,5,6,7,8]
array2 = array1.map( x => ( x %2 === 0 ? 'odd' : 'even'))

console.log('The answer is ', array2)
//========== 1.9 =======================
array1 = [1, -3, 2, 8, -4, 5]
array2 = array1.map( x => Math.abs(x))

console.log('The answer is ', array2)
//========== 1.10 =======================
array1 = [100, 200.25, 300.84, 400.3]
array2 = array1.map( x => x.toFixed(2))

console.log('The answer is ', array2)
//========== 1.11 =======================
array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
  ]

  array2 = array1.map( x => {
    birthDay = new Date(x.birth)
    today = new Date()
    age = Math.floor(( today - birthDay) / (365 * 24 * 60 * 60 * 1000))

    return { name: x.name, birth: x.birth, age: age}
})
console.log('The answer is ', array2)
//========== 1.12 ======================
array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
  ]
array2 = array1.map( x => {
    let months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
    let date = new Date(x.birth)
    let day = date.getDate()
    let month = months[date.getMonth()]
    let year = date.getFullYear()
    return  `<tr><td>${x.name}</td><td>${day} ${month} ${year}</td></tr>`            
})

console.log('The answer is ', array2) 

//============ 2.1 ===============
array1 = [1,2,30,40]
array2 = array1.filter( x => x >10)
console.log('The answer is ', array2)

//============ 2.2 ===============
array1 = [1, 2, 3, 4]
array2 = array1.filter( x => x %2 ==1 )

console.log('The answer is ', array2)
//============ 2.3 ===============
array1 = [1, "1", 2, {}] 
array2 = array1.filter(x => typeof(x) === 'number')

console.log('The answer is ', array2)
//============ 2.4 ===============
array1 = ["apple", "banana", "orange", "pineapple", "watermeon"]
array2 = array1.filter(x => x.length > 6)
console.log('The answer is ', array2)
//============ 2.5 ===============
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]
array2 = array1.filter(x => x.age < 18)

console.log('The answer is ', array2)
//============ 2.6 ===============
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]

  array2 = array1.filter( x => x.age !== 32)
console.log('The answer is ', array2)
//============ 2.7 ===============
array1 = [1, -3, 2, 8, -4, 5]
array2 = array1.filter( x => x > 0)

console.log('The answer is ', array2)
//============ 2.8 ===============
array1 = [1,3,4,5,6,7,8]
array2 = array1.filter( x => x % 3 == 0)

console.log('The answer is ', array2)
//============ 2.9 ===============
array1 = ["peach", 1, -3, "2", {}, []]
array2 = array1.filter( x => typeof(x) == 'string')

console.log('The answer is ', array2)
//============ 2.10 ===============
array1 = ["APPLE", "appLE", "PEACH", "PEach"]
array2 = array1.filter( x => x === x.toUpperCase())

console.log('The answer is ', array2)
//============ 2.11 ===============
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]
array2 = array1.filter( x => {
    date = new Date(x.birth)
    month = date.getMonth()
    return month === 9 // index อันดับที่ 9 
})

console.log('The answer is ', array2)
//============ 2.12 ===============
array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]

array2 = array1.filter( x => {
    date = new Date(x.birth)
    year = date.getFullYear()
    return year < 2000
})
console.log('The answer is ' , array2)