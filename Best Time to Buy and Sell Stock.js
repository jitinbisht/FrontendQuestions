#Best Time to Buy and Sell Stock

var maxProfit = function(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let profit = 0;
  prices.forEach(price=> {
    minPrice = Math.min(minPrice, price);
    profit = Math.max(profit, price - minPrice)
  });
  return profit;
};
maxProfit([7,1,5,3,6,4]);
