var CurrencyConverter = /** @class */ (function () {
    function CurrencyConverter(amount) {
        this.amount = amount;
    }
    // Conversion rates (hardcoded)
    CurrencyConverter.prototype.usdToEur = function () {
        return this.amount * 0.93; // 1 USD = 0.93 EUR
    };
    CurrencyConverter.prototype.usdToGbp = function () {
        return this.amount * 0.81; // 1 USD = 0.81 GBP
    };
    CurrencyConverter.prototype.eurToUsd = function () {
        return this.amount * 1.075; // 1 EUR = 1.075 USD
    };
    CurrencyConverter.prototype.eurToGbp = function () {
        return this.amount * 0.87; // 1 EUR = 0.87 GBP
    };
    CurrencyConverter.prototype.gbpToUsd = function () {
        return this.amount * 1.23; // 1 GBP = 1.23 USD
    };
    CurrencyConverter.prototype.gbpToEur = function () {
        return this.amount * 1.15; // 1 GBP = 1.15 EUR
    };
    return CurrencyConverter;
}());
// Example usage
var money = new CurrencyConverter(100);
console.log("100 USD to EUR:", money.usdToEur());
console.log("100 USD to GBP:", money.usdToGbp());
console.log("100 EUR to USD:", money.eurToUsd());
