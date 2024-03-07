/* ****ABSOLUTE DIFFERECE OF SQUARE MATRIX****  */

// let arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [9, 8, 9],
//   [5, 10, 4],
// ];
// let minDimension = Math.min(arr.length, arr[0].length);
// console.log(minDimension);
// let sumRight = 0;
// let sumLeft = 0;
// let arrIndex = arr.length -1 ;

// for (let i = 0; i < arr.length; i++) {
//   const element = arr[i];
//   sumRight += element[i];
// }
// for (let i = arr.length - 1; i >= 0; i--) {
//   const element = arr[i];
//   const leftElement = element[arrIndex - i];
//   sumLeft += leftElement;
// }
// let difference = Math.abs(sumLeft - sumRight);

let arr = [
    [1, 2, 3, 4],
    [4, 5, 6, 7],
    [9, 8, 9, 8],
    [5, 10, 4, -2],
  ];
  
  let RightSum = 0;
  let LeftSum = 0;
  let minRows = Math.min(arr.length, arr[0].length);
  if (arr.length === arr[0].length) {
   
  for (let i = 0; i < minRows; i++) {
    RightSum += arr[i][i];
    LeftSum += arr[i][arr[0].length - 1 - i];
  }
  console.log(LeftSum);
  
let difference = Math.abs(RightSum - LeftSum);
// return difference 
  } else {
    console.log("matrix is not a square matrix");
  }
  console.log(difference);