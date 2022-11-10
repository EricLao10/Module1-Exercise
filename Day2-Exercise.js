//Converting Celcius to Fahrenheit
var fTemp = 132
var cTemp = (fTemp - 32) * 5 / 9
console.log(`${fTemp}F is ${cTemp} +C`)

//Even or Odd checking
let number = 67
if(number % 2== 0){
    console.log("The number is even")
}else{
    console.log("The number is odd")
}

//Prime number checking
let prime = 7
if (prime === 1){
    console.log(`${prime} is not a prime number.`)
  }else if(prime === 2){
    console.log(`${prime} is a prime number`)
}else{
    for(var x = 2; x < prime; x++){
      if(prime % x === 0){
        console.log(`${prime} is not a prime number.`)
      }
    }console.log(`${prime} is a prime number`)
  }

//Sum of numbers 1 to n
let n = 10
 var sum = 0;
    for(i = 0; i <= n; i++){
    sum += i; 
    }
    console.log(`1 + ${n} = ${sum}`)

//Factorial of a number
var target = 5
let fact = 1
    for (wot = 1; wot <= target; wot++) {
        fact *= wot
    }
    console.log(`The factorial of ${target} is ${fact}.`)        

//Fibonacci numbers
let n1 = 0, n2 = 1, next;
const fibono = 10
console.log('Fibonacci numbers:');

for (let i = 1; i <= fibono; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
    n2 = next
}