var array = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133];

//**************Dan Cohen***********
//Solution one

var numberSlots = {};

for (var i = 0; i < array.length; i++) {
    numberSlots[array[i]] = true;
}

for (var j = 1; j <= array.length; j++) {
    if (!(numberSlots[j])) {
        console.log(j);
        break;
    }
}



//Solution two
// use brackets
//don't say 201

var sumOfAllNumbers = 0;
for (var i = 0; i < 201; i++)
    sumOfAllNumbers = sumOfAllNumbers + i;

for (var j = 0; j < array.length; j++)
    sumOfAllNumbers = sumOfAllNumbers - array[j];

var missingNumber = sumOfAllNumbers;
console.log(missingNumber);

//********olinsoffer********

function findMissingNum(numArr) {
    let orderedNums = lowToHigh(numArr);

    for (let i = 0, l = numArr.length; i < l; i++) {
        if (orderedNums[i] !== i + 1) {
            console.log(i + 1);
            return "found";
        }
    }

    function lowToHigh(arr) {
        let l = arr.length, done = false;
        while (!done) {
            hits = 0;
            for (let i = 0; i < l; i++) {
                if (arr[i] > arr[i + 1]) {
                    let low = arr[i],
                        high = arr[i + 1];
                    arr[i] = high;
                    arr[i + 1] = low;
                    hits += 1;
                }
            }
            if (hits === 0) {
                done = true;
            }
        }
        return (arr);
    }
}

findMissingNum(array);

//Eugene******* watch your styling!
//Don't need to define sort callback

var array = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133]
console.log(array);
function sortNumber(a, b) {
    return a - b;
}

array.sort(sortNumber);

for (var i = 0; i < (array.length - 1); i++) {
    if (array[i] - array[i + 1] !== -1) {
        var missing = (array[i]) + 1;
    }

}
console.log("The misssing number is " + missing);

// Second solution

var lastNumber = 200;

var expectedSum = (lastNumber * (lastNumber + 1)) / 2

var actualSum = 0;

for (var i = 0; i < array.length; i++) {
    actualSum += array[i];
}

var missing2 = (expectedSum - actualSum);

console.log(missing2);

//lana********
//Partner Extension 2
//Find the missing number in the following shuffled integer array of 1 to 200
//Assume you get the array below as input and you need to print the missing number. Please propose two solutions.
var array = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133];
/**
 * Proposition 1: 
 *      step 1: sort the array into increasing order
 *      step 2: run a loop thru the array and test to see if the number following it is one greater
 *          e.g for(var i = 0; i<array.length; i++){
 *              if(array[i] != array[i+1] - 1){
 *                  return array[i+1];
 *                  }    
 *              }  
 * 
 * Proposition 2:
 *      step1: while loop to add up all the numbers from 0-200, save it in a variable called expectedSum
 *      step2: loop thru the array and keep a running total of all the numbers that are in the array
 *      step3: subtract the expectedSum - total and return that answer
 *      
 */
var expectedSum = 0;
var counter = 0;
while (counter <= 200) {
    expectedSum += counter;
    counter += 1;
}
var total = 0;
for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}

var missingNum = expectedSum - total;
console.log(missingNum);

//*****Aahron

var ar = [182, 28, 30, 40, 41, 150, 199, 71, 77, 173, 181, 147, 91, 192, 166, 60, 34, 188, 113, 130, 25, 59, 82, 170, 79, 11, 112, 92, 104, 69, 42, 2, 125, 99, 39, 29, 160, 131, 178, 159, 121, 21, 200, 15, 194, 14, 54, 138, 145, 195, 85, 120, 10, 118, 33, 106, 132, 198, 58, 64, 83, 140, 5, 35, 50, 18, 84, 129, 174, 197, 96, 93, 128, 13, 16, 187, 9, 80, 27, 153, 23, 102, 52, 158, 4, 97, 65, 143, 110, 7, 86, 176, 87, 149, 98, 165, 66, 139, 155, 161, 6, 74, 196, 48, 144, 185, 88, 177, 68, 72, 116, 37, 142, 127, 180, 154, 61, 141, 191, 63, 136, 22, 32, 186, 49, 156, 103, 168, 109, 70, 115, 183, 111, 44, 90, 12, 123, 124, 75, 100, 184, 189, 162, 107, 164, 148, 152, 101, 94, 73, 8, 95, 163, 146, 46, 81, 117, 26, 175, 20, 105, 114, 157, 62, 108, 78, 51, 3, 119, 134, 172, 17, 193, 55, 126, 169, 135, 179, 45, 89, 47, 151, 43, 171, 19, 36, 167, 67, 56, 76, 24, 57, 38, 122, 53, 1, 137, 31, 133]

function missingNum (array) {
    var sum = 0, expSum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    for (var j=1; j <= array.length + 1; j++) {
        expSum += j;
    }
    var result = expSum-sum;
    console.log(result);
}

missingNum(ar); 