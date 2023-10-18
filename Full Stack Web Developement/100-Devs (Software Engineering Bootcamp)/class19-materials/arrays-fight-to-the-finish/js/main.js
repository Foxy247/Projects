//Create an array of movie titles. Loop through the array and each element to the h2.
movieTitles = [
    'Die Gefährten', 
    'Die zwei Türme', 
    'Die Rückkehr des Königs'
]

for(let i = 0; i < movieTitles.length; i++){
    document.querySelector('h2').innerText += movieTitles[i]
}
// document.querySelector(h2) = movieTitles.forEach(x,i)

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let nums = [10,20,30]

    // nums.forEach((item, idx) => {
    //     nums[idx] = item + 3
    // })

    // console.log(nums);

    // numbers.forEach(x,i) x+3 

//Find the average of all the numbers from question two 
let sum = 0

nums.forEach((num) => sum+= num)

console.log(sum / nums.length);

//  (10+20+30)/3