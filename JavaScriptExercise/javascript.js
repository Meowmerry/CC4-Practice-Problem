// ======== 1.1 ===================
array1 = [1, 2, 30, 400]
array2 = array1.map(function (x) {
    return x * 2
})
console.log(array2) //[ 2, 4, 60, 800 ]

array1 = [1, 2, 30, 400]
array2 = array1.map((x) => {
    return x * 2
})
console.log(array2)  // [ 2, 4, 60, 800 ]

array1 = [1, 2, 30, 400]
array2 = array1.map(x => x * 2)
console.log('No. 1.1' , array2) //[ 2, 4, 60, 800 ]

//=========== 1.2 ===================

array1 = [1, 2, 3, 4]
array2 = array1.map(x => x.toString())
console.log('No. 1.2' , array2)  //[ '1', '2', '3', '4' ]

//=========== 1.3 ===================

array1 = [1, "1", 2, {}]
array2 = array1.map(x => typeof (x))
console.log('No. 1.3' , array2)   // [ 'number', 'string', 'number', 'object' ]

//=========== 1.4 ===================

array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
array2 = array1.map(x => x.name.toUpperCase())
console.log('No. 1.4' , array2) //[ 'APPLE', 'BANANA', 'WATERMELON' ]

//=========== 1.5 ===================
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
array2 = array1.map(x => x.name)
console.log('No. 1.5' , array2) //[ 'apple', 'banana', 'watermelon' ]

//=========== 1.6 ===================

array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
]
 array2 = array1.map(x => x.age)
console.log('No. 1.6' , array2)   //[ 14, 18, 32 ]

//=========== 1.7 ===================
 array1 = [
    { name: "apple", surname: "London" },
    { name: "banana", surname: "Bangkok" },
    { name: "watermelon", surname: "Singapore" },
]
 array2 = array1.map(x => x.name + ' ' + x.surname)
console.log('No. 1.7' , array2)  //[ 'apple London', 'banana Bangkok', 'watermelon Singapore' ]
//=========== 1.8 ===================
 array1 = [1, 3, 4, 5, 6, 7, 8]
 array2 = array1.map((x) => {
    if (x % 2 !== 0) {
        return 'odd'
    } else {
        return 'even'
    }
})
console.log('No. 1.8' , array2)  // [ 'odd',  'odd', 'even', 'odd', 'even', 'odd', 'even' ]
//=========== 1.9 ===================
 array1 = [1, -3, 2, 8, -4, 5]
array2 = array1.map(x => Math.abs(x))

console.log('No. 1.9' , array2)   //[ 1, 3, 2, 8, 4, 5 ]

//=========== 1.10 ===================
 array1 = [100, 200.25, 300.84, 400.3]
 array2 = array1.map(x => x.toFixed(2))
console.log('No. 1.10' , array2)  //[ '100.00', '200.25', '300.84', '400.30' ]

//=========== 1.11 ===================
 array1 = [
    { name: "apple", birth: "2000-01-01" },
    { name: "banana", birth: "1990-10-01" },
    { name: "watermelon", birth: "1985-12-01" },
]

 array2 = array1.map(x => {
    let birthday = new Date(x.birth)
    let today = new Date()
    let age = Math.floor((today - birthday) / (365 * 24 * 60 * 60 * 1000))
    return { name: x.name, birth: x.birth, age: age }
})
console.log('No. 1.11 ' ,array2)
// No. 1.11  [
//     { name: 'apple', birth: '2000-01-01', age: 19 },
//     { name: 'banana', birth: '1990-10-01', age: 29 },
//     { name: 'watermelon', birth: '1985-12-01', age: 33 }
//   ]
  

//=========== 1.12 ===================
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
    return `<tr> <td> ${x.name} </td>  <td>${day} ${month} ${year}</td></tr>`
})
console.log('No. 1.12  ' ,array2)

// No. 1.12   [
//     '<tr> <td> apple </td>  <td>1 Jan 2000</td></tr>',
//     '<tr> <td> banana </td>  <td>10 Oct 1990</td></tr>',
//     '<tr> <td> watermelon </td>  <td>30 Dec 1985</td></tr>'
//   ]

//=========== 2.1 ===================
 array1 = [1, 2, 30, 400]  // filter เลขที่มากกว่า 10
 array2 = array1.filter( x => {
     return x > 10
})
console.log('No. 2.1  ' ,array2) //[ 30, 400 ]

//=========== 2.2 ===================
 array1 = [1, 2, 3, 4]    // filter เลขคี่
 array2 = array1.filter(x => x % 2 !==0 )
console.log('No. 2.2  ' ,array2) // [ 1, 3 ]

//=========== 2.3 ===================
 array1 = [1, "1", 2, {}]  // filter Number
 array2 = array1.filter(x => typeof(x) === "number")
console.log('No. 2.3  ' ,array2) //[ 1, 2 ]

//=========== 2.4 ===================
 array1 = ["apple", "banana", "orange", "pineapple", "watermeon"] // filter ตัวอักษร > 6
 array2 = array1.filter(x => x.length > 6 )   //["pineapple", "watermeon"] //
console.log('No. 2.4  ' ,array2)

//=========== 2.5 ===================
// filter age < 18
 array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]
  array2 =  array1.filter(x => x.age <18 )
  console.log('No. 2.5  ' ,array2)

  //=========== 2.6 ===================
  // filter ไม่เอาคนที่อายุ 32
array1 = [
    { name: "apple", age: 14 },
    { name: "banana", age: 18 },
    { name: "watermelon", age: 32 },
    { name: "pineapple", age: 16 },
    { name: "peach", age: 24 },
  ]
array2 = array1.filter(x => x.age !== 32)
console.log('No. 2.6  ' ,array2)

 //=========== 2.7 ===================
 // filter เลขบวก
 array1 = [1, -3, 2, 8, -4, 5]
 array2  = array1.filter( x => x > 0)
 console.log( 'No. 2.7  ' ,array2) // [1, 2, 8, 5] 

 //=========== 2.8 ===================
array1 = [1,3,4,5,6,7,8]
array2 = array1.filter( x => x%3 == 0)//[3, 6] // filter เลขหาร 3 ลงตัว
console.log('No. 2.8  ' ,array2)

 //=========== 2.9 ===================
 // filter string
 array1 = ["peach", 1, -3, "2", {}, []]
 array2 = array1.filter(x => typeof(x) ==='string' )
 console.log('No. 2.9  ' ,array2)

  //=========== 2.10 ===================
  // filter คำที่เป็นอักษรใหญ่ทุกตัว
 array1 = ["APPLE", "appLE", "PEACH", "PEach"]
 array2 = array1.filter(x => x.toUpperCase() === x )
 console.log('No. 2.10  ' ,array2)

 //=========== 2.11 ===================
 // filter คนเกิดเดือน 10
 array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]
array2 = array1.filter( x => {
    date = new Date(x.birth)
    m = date.getMonth()
    return m === 9
})
console.log('No. 2.11  ' ,array2)

 //=========== 2.12 ===================
 // filter คนเกิดก่อนปี 2000
 array1 = [
    { name: "apple", birth: "2001-01-01" },
    { name: "banana", birth: "1990-10-10" },
    { name: "watermelon", birth: "1985-12-30" },
    { name: "peach", birth: "2002-10-13" },
  ]
array2 = array1.filter( x => {
    date = new Date(x.birth)
    y = date.getFullYear()
    return y < 2000
})
console.log('No. 2.  ' ,array2)
 //=========== 2.11 ===================

 
 

 
