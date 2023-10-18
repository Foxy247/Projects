//Arrays

//Create and array of tv shows. Loop through and print each show to the console
    let tvShows = ['GoT','The Rookie','Weel of Time']

    // tvShows.forEach(show => console.log(show));
    // console.log(tvShows)
//Create and array of numbers
let numbers = [1,2,3,4]
let nums = [14,3,2,7,12]

//Return a new array of numbers that includes every even number from the previous Arrays

    let onlyEvens = (arr) => arr.filter(n => n % 2 === 0)
    //    console.log(onlyEvens(nums)) 
        
//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
    function minMax(nums){
        let sorted = nums.sort((a,b)=> a-b)
        alert(sorted[1] + sorted[sorted.length - 2])
    }
     
    minMax(nums)
    


    

