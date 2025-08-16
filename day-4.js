// 1. find max in an array
function findMax(arr){
    let max = arr[0];
    for(let num of arr){
        if(max <= num){
            max = num
        } 
    }
    return max
}

// 2. find min in an array
function findMin(arr){
    let min = arr[0];
    for(let num of arr){
        if(min >= num){
            min = num
        } 
    }
    return min
}

// 3. sum all elements in an array
function findSum(arr){
    let sum = 0;
    for(let num of arr){
        sum += num
    }
    return sum;
}


// 4. remove duplicates from array
function removeDup(arr){
    return [... new Set(arr)]
}

// 5. count occurences in an array
function dupArr(arr){
    let dups = {}
    for(let i = 0; i < arr.length; i++){
           let crrNum = arr[i]
            for(let j = i+1; j < arr.length; j++){
            if(j === crrNum){
                  dups[crrNum] = dups[crrNum]++
            }
        }
    }
    return dups
}

console.log(dupArr[1,1,1,2,4,5,6,1,3,2,2])