// check if a number is prime
function checkPrime(num){
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; 
        }
    }

    return true;
}


// 2. find factorial of a number
function findFactorial(num){
    if(num < 0) return `factorial isn't defined for ${num}`

    if(num ===0) return 1
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    }
    return factorial
}


// 3. generate fibonacci sequence
function fib(n){
    if(n === 0) return []
    if(n === 1) return [0]
    let fibArr = [0,1]

    for(let i = 2; i < n; i++){
        fibArr[i] = fibArr[i - 1] + fibArr[i - 2];
    }
    return fibArr;
}


// 4. sum of digits of a number
function sumOfDigits(num){
    let number = num.toString()
    let arr = number.split("");
    let sum = 0;

    for(let digit of arr){
        sum += Number(digit)
    }
    return sum;
}


// 5. Armstrong number check
function checkArmstrong(num){
    let number = num.toString()
    let digits = number.split("");
    let sum = 0;
    
    for(let digit of digits){
        let cube = Math.pow(Number(digit), digits.length);
        sum += cube;
    }

    if(sum === num) return true
    else return false;
}