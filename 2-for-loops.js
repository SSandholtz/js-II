// *** FOR LOOPS *** ///

console.log( 1 < 2 )

// What is a for loop? What syntax does it use?
// starting, ending, incrementor

// declare 1
for (let i = 0; i < 10; i++) {
    // i < 10
    console.log(i)
    // i++
}

// How many different ways can we loop?

for (let i = 100; i > 20; i--) {
    console.log(i)
}

// Can we go backwards?

// How can we use a for loop with an array?

let bestPeople = [`Bob Ross`, `Mr. Rogers`, `Steve Irwin`, `The Rock`]

for (let i = 0; i < bestPeople.length; i++) {
    console.log(bestPeople[i])
}

// Can we go backwards through an array?

bestPeople = [`Bob Ross`, `Mr. Rogers`, `Steve Irwin`, `The Rock`]

for (let i = bestPeople.length - 1; i >= 0; i--) {
    console.log(bestPeople[i])
}


let nums = [1,2,3,4,5,6,7];

for (let i = 0; i < nums.length; i++) {
    nums[i] = nums [i] * 2;
    // nums[i] = [1,2,3,4,5,6,7,8,9][i] * 2;
    // nums[i] = [1,2,3,4,5,6,7,8,9][0] * 2;
    // nums[i] = 1 * 2;
    // nums[i] = 2;
    // nums[0] = 2;
    
    console.log(nums)
}