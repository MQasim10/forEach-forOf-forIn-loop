console.log("this loop is used to iterate over element of array");

//iteration over names of the array
let student = ["Qasim", "Haleem", "Muhammad"]

student.forEach(item => {

    console.log(item);
    
});

// iterate over number of array
let mark = [36,89,96,96,100,48,60];

mark.forEach(item => {
    console.log(` ${item}`);
})



// finding avarage
let sum = 0;
let avg = 0;
let i;
mark.forEach((item, i) =>{
    sum = sum+item;
    console.log(i+1 + " " +item);
    avg = sum/i;
})
console.log(`the total sum is : ${sum}`);
console.log(`the percent of the result is ${avg}`);
