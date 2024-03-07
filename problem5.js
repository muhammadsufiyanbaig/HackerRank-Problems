let candles = [4,4,1,2];
let maxHeight = Math.max(...candles);
let TallestCandleArray = candles.filter(height => height === maxHeight);
let TotalTallestCandles = TallestCandleArray.length;
console.log(TotalTallestCandles);
