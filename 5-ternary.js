// *** TERNARY *** //

// Let's review if/else statements
let name = `Bob Ross`;
if(name !== `Bob Ross`) {
    name = `Bob Ross`
}
else {
    name = `Best man`
}

console.log(name)

// What if we could write the same thing, but with less typing?

//                condition ? if true : if false
let x = name === `Bob Ross` ? 1000000 : -10;

console.log(x)

// How do we use an if/else statement to assign a variable?

// How do we do it with a ternary?

x = -1

let thing = x > 0 ? `It's positive` : x === 0 ? `It's zero` : `It's negative`
//          false :                 false:                  true: `It's negative`

console.log(x)

// Can we nest ternaries?