//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
   let nums =  [1,3,5,2]

   
   console.log(nums.reduce((acc,c) => acc + c));
    
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared

newArr = nums => nums.map(num => num**2)



    
//Create a function that takes a string
//Print the reverse of that string to the console

function reverseString(str){
    // split
    let splitString = str.split('')
    // reverse
    let reverseArray = splitString.reverse()
    // join
    let joinArray = reverseArray.join('')
    return joinArray 
}

let unoReverse = str => console.log(str.split('').reverse().join(''))

console.log(reverseString("hello"));


//Create a function that takes in a string
//Alert if the string is a palindrome or not

const palindromeCheck = str => console.log(str === str.split('').reverse().join('') )

palindromeCheck('racecar')