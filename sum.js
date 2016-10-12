var simpleAdder = function(arr) {
  var sum = 0;

  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

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
