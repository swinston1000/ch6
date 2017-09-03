//Dan Cohen
var arrB = [4, "a", 8, 3, "a", 7, "a", 2, "a"];
var tempArr = [];
var mostOccItem = arrB[0];
var occCount = 1;

for (var i = 0; i < arrB.length; i++) {
  if (tempArr[arrB[i]] == null)
    tempArr[arrB[i]] = 1;
  else
    tempArr[arrB[i]]++;

  if (tempArr[arrB[i]] >= occCount) {
    mostOccItem = arrB[i];
    occCount = tempArr[arrB[i]];
  }
}

//olinsoffer
//a bit complicated!!!

let items1 = [3, 'a' 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function greatestOccuringItem(arr) {
  typesArr = arr.filter(function (element, index, arrayN) { return arrayN.indexOf(element) === index; });
  let data = arr.join();
  let resultsArray = [];
  for (let i = 0, l = typesArr.length; i < l; i++) {
    let reg = new RegExp(typesArr[i], "g");
    let amount = data.match(reg).length;
    resultsArray.push(amount);
  }
  let result = highToLow(resultsArray);
  for (let i = 0, l = arr.length; i < l; i++) {
    let hits = 0;
    for (let j = i, l = arr.length; j < l; j++) {
      if (arr[i] === arr[j]) {
        hits += 1;
      }
    }
    if (hits === result[0]) {
      console.log(arr[i]);
      return;
    }
  }

  //bubble sort
  function highToLow(arr) {
    let l = arr.length, done = false;
    while (!done) {
      hits = 0;
      for (let i = 0; i < l; i++) {
        if (arr[i] < arr[i + 1]) {
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

//Partner Exercise 4 



//Eugene********

var array = [3, 'a', 'a', 'a', 4, 3, 'a', 4, 'a', 4, 4, 4, 4, 3, 3];
array.sort();
var max = 1;
var counter = 0;
var result;

for (var i = 0; i < array.length; i++) {
  if (array[i] === array[i + 1]) {
    counter++;
  } else {
    counter = 0;
  }

  if (counter > max) {
    result = array[i];
    max = counter;
  }
}

console.log(result + " occurs most");

//lana*****8
//Partner Extension 1 
//With a partner, write a JavaScript program to find the most frequently occuring item of an array.
var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var mapping = {};
var answer = array[0]

for (var i = 0; i < array.length; i++) {
  if (mapping[array[i]]) {
    mapping[array[i]]++;
  }
  else {
    mapping[array[i]] = 1;
  }
  if (mapping[array[i]] > mapping[answer]) {
    answer = array[i]
  }

}

console.log(answer);
console.log(mapping[answer]);
