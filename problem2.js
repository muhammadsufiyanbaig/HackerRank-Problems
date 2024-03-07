let arr = [1,1,0, -1, -1];
let arrLength = arr.length;
let PostiveInt = [];
let NegtiveInt = [];
let ZeroArray = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        NegtiveInt.push(arr[i]);
    } else if (arr[i] > 0) {
        PostiveInt.push(arr[i]);
    } else {
        ZeroArray.push(arr[i]);
    }
}

let PostiveIntLength = PostiveInt.length;
let NegtiveIntLength = NegtiveInt.length;
let ZeroArrayLength = ZeroArray.length;

let ratios = [
    (PostiveIntLength / arrLength).toFixed(6),
    (NegtiveIntLength / arrLength).toFixed(6),
    (ZeroArrayLength / arrLength).toFixed(6)
]

let NegtiveRatio = Number((NegtiveIntLength / arrLength).toFixed(6))*(-1)*(-1);
let PostiveRatio = Number((PostiveIntLength / arrLength).toFixed(6))*(-1)*(-1);
let ZeroArrayRatio = Number((ZeroArrayLength / arrLength).toFixed(6))*(-1)*(-1);

console.log(ratios[0]);
console.log(ratios[1]);
console.log(ratios[2]);

