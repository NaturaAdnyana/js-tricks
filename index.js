// ===========Removing Duplicate Items===============
const array = [1,2,3,4,4,5,5,6,6,7,7,8];
// before removing duplicated items
console.log(array);
// after removing duplicated items
const uniqueArray = [... new Set(array)]
console.log(uniqueArray);

// ========How to avoid null & undefined value===========
let a = 0; // try undefined/null/0
let b = 0; // try undefined/null/0

// Use || to avoid null & undefined & 0
console.log(a || "A value not found");
// output : A value not found

// Use ?? to avoid null & undefined
console.log(b ?? "B value not found");
// output : 0

// ======How to avoid undeclared object==========
const object = {
  function1: () => {
    console.log("OK");
  },
  function2: () => {
    console.log("DONE");
  },
}
object.function1();
object.function2();
object.function3 ?. (); 
// there is no function3, so we can put ? symbol
// So, it will not return undefined
/* Output : 
  OK
  DONE
*/

// ======How to execute string==========
let stringCode = "console.log('Hello World')"
console.log(stringCode);

// use eval
eval(stringCode);
// Output : Hello World

// ======How to convert to boolean==========
let tesOne = "This is String";
let tesTwo = undefined; // try 0, null, undefined, ""

console.log(!!tesOne);
console.log(!!tesTwo);
/* Output : 
  true
  false
*/

// ======How to convert to str -> int, int -> str==========
let str = "10";
let int = 10;

// str -> int
console.log(typeof +str); //just put operators in front of it
// Output : number

// int -> str
console.log(typeof (int + "")); //just put + and "" in front of it
// Output : string
