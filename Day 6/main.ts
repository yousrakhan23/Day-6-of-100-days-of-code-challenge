
// Q 71:

// compare let and const . create two examples wher let allows reassignment but const does not try to 
//reassign a const declared variable and cathc the error.

let age = 22 ; 
age = 21 ; 
console.log(age) ; 

let names = "Yousra" ; 
try {
    names = "Uzma" ; 
} catch (error) {
    console.log("error : can't reassign a `const` -declared variable");
}

//.......................................................................................................................

// Q 72:

// block scope with let and const demonstrate block scope by creating a code block with {} that uses both let and const 
// show how variables declared inside the block are not accessible outside of it .

// { 
//     let blockLet = "variable inside the block" ;
//     const blockConst = "also only inside the block" ; 

// console.log(blockLet) ; 
// console.log(blockConst) ;
// } 

// try {
//     console.log(blockLet) ;
// } catch (error){
//     console.log("`blockLet` is not accessible outside the block.");
// }

// try{
//     console.log(bloclConst) ; 
// }  catch (error){
//     console.log("`blockConst` is not accessible outside the block.") ;
// }

//...................................................................................................................

// Q 73:

// assigning and updating variables create a function wher u declare a variable using let and assign an initial 
// value then then update its value within the same function and log both the initial and updated values.

function updateVariable () {
    let num = 10 ; 
    console.log("Initial value :" , Number) ; 
    let number = 20 ; 
    console.log("updated value" , number)
}
updateVariable() ;

//.....................................................................................................................

// Q74:

// swaping variables . demonstrate how to swap the values of two variables . start with variables a = 5 and b= 10 , 
// then swap their values so that a becomes 10 and b becomes 5. 

function swapValues() {
    let a = 5 , b = 10 ;
    console.log("Before swap: a = " , a, "b = " ,b ) ;
    let temp = a ; 
    a = b ; 
    b = temp ; 
    console.log("After swap: a = " , a , "b = " , b) ;
}
swapValues();

//....................................................................................................................

// Q 75:

// compound assignment operators. use compound assignment operators to simplifing arithmatic operations start 
// with x= 4 and perform a series of operations (addition , subtr , multip , division) on x using compound operators.

function useCompoundOperators (){
    let x = 4 ;
    console.log("Initial value of x: " , x) ;

    x += 2 ; 
    console.log("After addition:" , x) ; 

    x -= 1 ; 
    console.log("After subtraction:" ,  x) ; 

    x *= 3 ;
    console.log("After multiplacation:" , x ) ;

    x/= 2 ;
    console.log("After division:" , x) ;


}
useCompoundOperators();

//........................................................................................................................

