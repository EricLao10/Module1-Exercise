//Area of Rectangle
const length = 40
const width = 30
let area = length * width
console.log(`The area of the rectangle is ${area}`)

//Perimiter of Rectangle
let perimeter = (length * 2) + (width * 2)
console.log(`The perimeter of the rectangle is ${perimeter}`)

//Diameter, Circumference, and Area of a Circle
const PI = 3.14
const radius = 30
let diameter = radius * 2
let circumference = diameter * PI
let areaCircle = PI * radius * radius
console.log(`The diameter of the circle is ${diameter},the circumference is ${circumference}, and the are is ${areaCircle}`)

//Angle of a triangle
const angle1 = 30
const angle2 = 45
let angle3 = 180 - (angle1 + angle2)
console.log(`The remaining third angle of the triangle is ${angle3}`)

//Difference of Dates

//Days conversion
const numberOfDays = 420
var years = Math.floor (numberOfDays / 365)
var months = Math.floor (numberOfDays % 365 / 30)
var days = Math.floor (numberOfDays % 365 % 30)
console.log(`${numberOfDays} days is ${years} years, ${months} months, ${days} days`)
