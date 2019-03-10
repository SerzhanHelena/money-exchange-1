// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   let result = {};
   if (currency > 10000) return { error: "You are rich, my friend! We don't have so much coins for exchange"};
   if (currency <= 0) return {};
const coins = {
    H: 50,
    Q: 25,
    D: 10,
    N: 5,
    P: 1
}
 for (let key in coins) {
    if (currency >= coins[key]) {
        let exchangedMoney = Math.floor(currency / coins[key]);
        result[key] = exchangedMoney;
        currency = currency - exchangedMoney * coins[key];
    }
 }
return result;
}
