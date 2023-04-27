function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
console.log(sum([1, 2, 3, 4]));

function double(arr) {
  const newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i] * 2);
  }
  
  return newArray;
}
console.log(double([1, 2, 3, 4]));
