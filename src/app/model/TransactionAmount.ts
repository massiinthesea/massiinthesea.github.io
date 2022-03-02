import { Currency } from "./Currency";

export class TransactionAmount {
    private amount: number;
    private currency: Currency;

    constructor(amount: number, currency: Currency) {
        this.amount = amount;
        this.currency = currency;
    }
}