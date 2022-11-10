//Funtion to create Triangle pattern with numbers
let triangle = height => {
   let result = ""
   let one = 1
   let two = 0

   for (a = 0; a <= height; a++) {
     for (b = 0; b < a; b++) {
       result += `${one}${two},`
        two++
       if (two == 10) {
         two = 0
         one++
       }
     }
     result += `\n`
   }
   return result
 };
 console.log(triangle(5))

 //FizzBuzz
 let number = 0

 for(let i = 1; i <= 100; i++){
  let newNumber= number + i
   if(i % 3 === 0 && i % 5 === 0){
    console.log(`FizzBuzz==> ${newNumber}`)
    }else if (i % 3 === 0){
    console.log(`Fizz==> ${newNumber}`)
    }else if (i % 5 === 0){
    console.log(`Buzz==> ${newNumber}`)
    }
  }
 
//BMI
height = 170;
weight = 90;
BMI = weight/(height**2); 

    if(BMI < 18.5){
      return`less weight`
    }else if((BMI > 18.5)&&(BMI < 24.9)){
      return `ideal`
    }else if((BMI > 25)&&(BMI < 29.9)){
      return `overweight`
    }else if((BMI > 30)&&(BMI < 39.9)){
      return `very overweight`
    }else{
      return `obese`
    }

//Remove odd numbers in an array
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
var answer = a.filter(function (num) {return num % 2 === 0})

console.log(answer)

//Split strings into an array (ini mungkin salah?)
let strings = "Hello Yahallo My name is Something weird"
var words = strings.split(" ");
console.log(words)


