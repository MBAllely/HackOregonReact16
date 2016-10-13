// Make a funciton that accepts an array of three numbers as an argument and returns the sum of the items in the array

var simpleAdder = function(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


// Make a function that accepts two array as arguments and combines them into a single array

var arraySmoosher = function(arr1, arr2) {
  newarr = [];

  arr1.forEach(function(index){
    newarr.push(index);
  });

  arr2.forEach(function(index){
    newarr.push(index);
  });

  return newarr;
}


// Make a function that accepts an array as the first argument and another input as a second argument.  The function should remove all instances of the second argument from the inital array, returning a "cleaned" array.

var censorship = function(arr, redact) {
    newarr = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== redact) {
            newarr.push(arr[i]);
        }
    }

    return newarr;
}


// Make a function that accepts an array as an argument and feed it an array of lowercased words.  The function should uppercase all words in the array that start with a vowel and return the modified array

// var vowelsUp = function(lowercasedArray) {
//
//     for (var i = 0; i < lowercasedArray.length; i++) {
//         if (lowercasedArray[i][0] === "a") {
//             lowercasedArray[i][0] = "A";
//         }
//     }
//
//     return lowercasedArray;
// }
