//Function to calculate lowes, highest, and average number in an array
array=[12,24,48,96,192]
function maxMinAvg(array){
    var max=array[0]
    var min=array[0]
    var sum=array[0]
    for (var i=1;i<array.length;i++){
        if(array[i]>max){
            max=array[i]
        }
        if(array[i]<min){
            min=array[i]
        }
        sum=sum+array[i]
    }
    return[`Highest is ${max2}, Lowest is ${min2}, Average is ${sum/array.length}`]
}
console.log(maxMinAvg(array))

//Function to take words in an array, and return as them as a string
function arrayToString(arrayString){
    let result=""
        for (i=0;i<arrayString.length-1;i++) {
            result+=arrayString[i]+", "
        }
    result+="and "+arrayString[arrayString.length-1]
    return result
}
console.log(arrayToString(["Brother", "Sister", "Mother", "Father"]))

//Function to calculate each element in the same position of integers in two arrays
array1=[1,2,3]
array2=[3,2,1]
function Result(array1,array2) {
    let array3=[]
    for (let i=0;i<array1.length;i++) {
        let a=typeof array1[i]=="number"?array1[i]:0 
        let b=typeof array2[i]=="number"?array2[i]:0 
        array3.push(+a + +b)
    }
    return ` ${array1} + ${array2} = ${array3}`
}
console.log(Result(array1,array2))

//Function to add an element in an array without repeating any existing ones
words=["Something", "you", "like", "to", "do", "in", "forever"]
function add(array, element) {
    if (!array.includes(element)) {
        array.push(element)
    }
    return array;
}
console.log(add(words,"forever"))

//Function to remove all odd numbers in an array
array=[23,44,26,74,86,99,75]
function noOdds(array) {
    let newArray=[]
        for (i=0;i<array.length;i++) {
            if(array[i]%2==0) {
                if (newArray.includes(array[i])) {
                continue
                }
                newArray.push(array[i])
            }
        }
        return newArray
} 
console.log(noOdds(array))
