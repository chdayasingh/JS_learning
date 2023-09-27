// Ex-1

function arrayFromRange(min, max){
    let output = [];

    for(let i=min; i<=max; i++){
        output.push(min);
        min++;
    }
    return output;
}

const numbers = arrayFromRange(-10, -4);
// console.log(numbers)


// Ex -3
const nums = [1,2,3,4];

function getMax(arr){
    // using reduce method
    return nums.reduce((accumulator, curr_num) =>{ 
        return curr_num > accumulator ? curr_num : accumulator;
    });
}

// console.log(getMax(nums));



// Ex-4

const movies = [
    { title: 'A', year: 2023, rating: 4.5},
    { title: 'B', year: 2022, rating: 4.6},
    { title: 'C', year: 2023, rating: 4.0},
    { title: 'D', year: 2021, rating: 4.9},
    { title: 'E', year: 2023, rating: 3.9},
    { title: 'F', year: 2023, rating: 4.7}
]

// All the movies in 2023 with rating > 4
// sort them by theier rating
// Descending order
// Pick their title

const titles = movies
    .filter(obj => obj.year == 2023 && obj.rating >= 4)
    .sort((a,b)=>{
        if(a.rating < b.rating) return -1;
        if(a.rating === b.rating) return 0;
        return 1;
    })
    .reverse()
    .map(obj => obj.title);

console.log(titles);