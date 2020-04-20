class Account {
    constructor(name, initialBalance) {
        this.name = name;
        this.initialBalance = initialBalance;
    }

    deposit(dep) {
        //enter deposit code here
        this.dep = dep;
        this.initialBalance += this.dep;
        return this.initialBalance;
    }

    withdraw(withdrawal) {
        //enter withdraw code here
        this.withdrawal = withdrawal;
        this.initialBalance -= this.withdrawal;
        return this.initialBalance;
    }

    balance() {
        return this.initialBalance;
    }
}

export { Account }
