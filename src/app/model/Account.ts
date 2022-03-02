export class Account {
    private id: number;
    private accountNumber: string;

    constructor(id: number, accountNumber: string) {
        this.id = id;
        this.accountNumber = accountNumber;
    }

    static generateList() {
        let a: Account[] = [];
        a.push(new Account(0, "AZ820CDET"));
        a.push(new Account(1, "LG480BUZC"));
        a.push(new Account(2, "FE963BTRF"));
        a.push(new Account(3, "VS531NJKD"));
        a.push(new Account(4, "WS928LLDV"));
        return a;
    }
}