function make_withdraw(balance) {
    return amount => {
        if (balance >= amount) {
            balance = balance - amount
            return balance;
        } else {
            return 'insufficient balance';
        }
    }
}

const W1 = make_withdraw(100)
W1(50)