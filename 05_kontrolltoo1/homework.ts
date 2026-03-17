class CurrencyConverter {
    constructor(protected amount: number) {}

    // Conversion rates (hardcoded)
    usdToEur(): number {
        return this.amount * 0.93; // 1 USD = 0.93 EUR
    }

    usdToGbp(): number {
        return this.amount * 0.81; // 1 USD = 0.81 GBP
    }

    eurToUsd(): number {
        return this.amount * 1.075; // 1 EUR = 1.075 USD
    }

    eurToGbp(): number {
        return this.amount * 0.87; // 1 EUR = 0.87 GBP
    }

    gbpToUsd(): number {
        return this.amount * 1.23; // 1 GBP = 1.23 USD
    }

    gbpToEur(): number {
        return this.amount * 1.15; // 1 GBP = 1.15 EUR
    }
}

// Example usage
const money = new CurrencyConverter(100);
console.log("100 USD to EUR:", money.usdToEur());
console.log("100 USD to GBP:", money.usdToGbp());
console.log("100 EUR to USD:", money.eurToUsd());