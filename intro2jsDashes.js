//********olinsoffer********
// no need for        number[i] === 0)

function e4(number) {
    let result = '';
    for (let i = 0, l = number.length; i < l; i++) {
        if ((number[i] % 2 === 0 && number[i + 1] % 2 === 0) || number[i] === 0) {
            result += number[i] + "-";
        } else {
            result += number[i];
        }
    }
    console.log(result);
}

e4("8025468");

//Yitzhak********
//don't need array...

var number = "025468";
var result = [number[0]];

for (var x = 1; x < number.length; x++) {
    if ((number[x - 1] % 2 === 0) && (number[x] % 2 === 0)) {
        result.push('-', number[x]);
    } else {
        result.push(number[x]);
    }
}
console.log(result.join(''));

//Eugene*************
//don't need else if

var output = [];
var number = prompt("Please enter number as string")
var str = number.split("");
for (var i = 0; i < str.length; i++) {
    if (str[i] % 2 === 0 && str[i + 1] % 2 === 0) {
        output += str[i] + "-";
    } else if (str[i] === 0) {
        output += str[i] + "-";
    } else {
        output += str[i];
    }
};
console.log(output)


//aharon - watch spacing!
//don't need && i < arr.length || arr[i] === 0
var arrayNo = [0, 2, 5, 4, 6, 8];

function addDash(arr) {
    var dash = "";
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] % 2 === 0) && (arr[i + 1] % 2 === 0) && i < arr.length || arr[i] === 0) {
            dash += arr[i] + " - ";
        } else {
            dash += arr[i];
        }
    } console.log(dash);
}
addDash(arrayNo);


//lana*********

//Partner Exercise 4 - put dashes between the even numbers
var userNum = prompt("Enter a number to be dashed");
var new_userNum = userNum[0];
for (var i = 0; i < userNum.length; i++ ){
    if ((userNum[i]%2==0) && (userNum[i+1]%2 == 0)){
        //userNum.splice(i,null,"-");
        new_userNum += "-";
    }
    if (i< userNum.length -1){
        new_userNum += userNum[i+1];
    }
    
}
console.log(new_userNum);