//Multiples of 3 and 5
let count = 40
let sum = 0

for ( i = 3; i <= count; i++){
    let newSum = sum + i
    if((i % 3 == 0)&&(i % 5 == 0)){
        console.log(`BizzBuzz===>${newSum}`)
    }else if(i % 3 == 0 ){
        console.log(`Bizz===>${newSum}`)
    }else if(i % 5 == 0){
        console.log(`Buzz===>${newSum}`)
    }
}

//Multiplication
const number = 9
for(let i = 1; i <= 10; i++){
    const result = i * number
    console.log(` ${number} * ${i} = ${result} `)
}

//Palindrome
var string = "damn"
let len = string.length

for(let i = 0; i < len / 2; i++){
    if(string[i] !== string[len - 1 - i]) {
        console.log(`${string} is not a palindrome`)
    }else{
        console.log(`${string} is a palindrome`)
    }
}

//Convert cm to km
var centim = 243068
let kilom = centim / 1000
console.log(`${centim}cm is equal to ${kilom}km`)

//Convert number to currency (IDR)
var total = 1000
console.log(`Rp.${total}.00`)

//Removing certain characters
var Str = "Hello World"
var newStr = Str.replace('ell','')

console.log(newStr)

//Capitalize the first letter of each string
const word = 'halo halo bandung';
const set = word.split(" ");

//Tugas buat Capitalize dan Reverse di skip, maaf kak.

