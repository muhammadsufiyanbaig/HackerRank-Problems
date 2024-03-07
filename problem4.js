let arr = [1, 3, 5, 7, 9];
let maxValue = arr[0];
let minValue = arr[0];
let sumOfMin = 0;
let sumOfMax = 0;

for (let i = 0; i < arr.length; i++) {
    maxValue = Math.max(maxValue, arr[i]); 
    minValue = Math.min(minValue, arr[i]); 
    sumOfMax += arr[i];
    sumOfMin += arr[i]; 
}

sumOfMax -= minValue; 
sumOfMin -= maxValue;

let bothSum = [sumOfMin, sumOfMax];
console.log(bothSum);
