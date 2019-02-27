// *** ARRAYS *** //

// How can we store a list?
const first = 'buy groceries';
const second = 'take out trash';
const third = 'wash laundry';
 //What is an array?
 //contains a list of items
 // ordered, and accessible by numbers

      //array   //string
 var toDoList = [first, second, third];

 console.log(toDoList[0])
 console.log(toDoList.length)

 var index = 0;
 console.log(toDoList[index])
 // trick to figure out the last item of an array
 console.log(toDoList[toDoList.length - 1])

 console.log(typeof toDoList.length)

// What is an array? What syntax does it use?

// What can we keep in an array?

const canIReallyDoThat = [false, null, undefined, `yes`, 3, {name: `todd`}, [[[]]], function() {return 5} ]
console.log(canIReallyDoThat)

// How can we access the items in an array?

let nestedArray = [1, [2, [3]]]

console.log(nestedArray[1][1][0])

// How can we access the end of an array?

// METHODS //

let methodsExample = [1,2,3]

// push

methodsExample.push(10)

console.log(methodsExample)

// pop

methodsExample.pop()

console.log(methodsExample)

// unshift

methodsExample.unshift(10)

console.log(methodsExample)

// shift

methodsExample.shift(10)

console.log(methodsExample)

// slice
                                  // resolves into an array
                                  // non destructive
let partialArray = methodsExample.slice(0, 1)

console.log(partialArray)

// splice

let partialArrayTwo = methodsExample.splice(1, 1)

console.log(methodsExample)
console.log(partialArrayTwo)
