// 1. print "Hello World"
    console.log("Hello World");


// 2. Declare variables with let, const
    const name = "Afra Anjum"; // name doesn't change so it is constant
    let age = 16; // age changes so it needs to be updated


// 3. Swap two variables 
    // way 1: use temporary variable
    let a = 1
    let b = 2
    let c = b
    console.log(a,b);
        c = a
        a = b
        b = c
    console.log(a,b);

    // way 2: use arithmetic (only works for numbers)
    let x = 1
    let y = 2
    console.log(x,y);
    x = x + y
    y = x - y
    x = x - y
    console.log(x,y);

    // way 3: destructuring 
    let p = "hello";
    let q = "world";
    console.log(p, q);

    [p, q] = [q, p]; 
    console.log(p, q);


// 4. Convert Celcius to Farenheit
    const celcius = 69;
    const farenheit = (celcius * 1.8) + 32;
    console.log(`4 result - celcius=${celcius}, farenheit=${farenheit}`)


// 5. Find the largest of 3 numbers
    // way 1: compare 2 numbers at a time
    const number1 = 1
    const number2 = 2
    const number3 = 3
    let largest = 0
    if(number1 > number2 && number1 > number3){
        largest = number1
    }
    else if (number2 > number3) {
        largest = number2
    }
    else {
        largest = number3
    }
    console.log("5.1 result:",largest)

    // way 2: Compare the current largest with the third number

    let large = (number1 > number2) ? number1 : number2
    if(large < number3){
        large = number3
    }
    console.log("5.2 result:", large)

    // way 3 : use method
    const var1 = 1
    const var2 = 2
    const var3 = 3

    const largestVar = Math.max(var1,var2,var3)
    console.log("5.3 result",largestVar)

    // way 4 : using array and looping
    const arr = [number1, number2, number3];
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
    if(arr[i] > max) {
        max = arr[i];
    }
    }

    console.log("5.4 result:", max);