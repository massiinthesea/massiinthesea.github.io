import { Account } from "./Account";
import { Currency } from "./Currency";
import { Metadata } from "./Metadata";
import { TransactionAmount } from "./TransactionAmount";

export class Transaction {
    public id: number;
    private accountToDebit: Account;
    private amount: TransactionAmount;
    private feePaidByReceiver: boolean;
    private destinationAccount: Account;
    private metadata: Metadata[];
    private creationDate: Date;
    private archived: boolean = false;

    constructor(formContent) {
        this.accountToDebit = formContent.accountToDebit;
        this.amount = new TransactionAmount(formContent.amount, formContent.currency);
        this.feePaidByReceiver = formContent.feePaidByReceiver;
        this.destinationAccount = formContent.destinationAccount;
        this.metadata = formContent.metaData
        this.creationDate = new Date();
     }


    public archive() {
        this.archived = true;
    }

    public isArchived() {
        return this.archived;
    }

}