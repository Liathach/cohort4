
import { Account } from './account.js'

test('Does Account work', () => {
    const acc = new Account("checkingAccount", 35);
    console.log(acc.initialBalance);
    expect(acc.name).toBe("checkingAccount");
    expect(acc.initialBalance).toBe(35);

    //Deposit $10 and check balance
    const deposit = acc.deposit(10);
    expect(acc.initialBalance).toBe(45);


    //Withdraw $15 and check balance
    const withdraw = acc.withdraw(15);
    expect(acc.initialBalance).toBe(30);

    //Return account balance
    console.log(acc.initialBalance);
    expect(acc.initialBalance).toBe(30);
});