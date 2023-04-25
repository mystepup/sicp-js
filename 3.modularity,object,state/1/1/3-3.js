function make_account(balance, password) {
    let wrong_input_pwd_counter = 0;
    function withdraw(amount) {
        if (balance >= amount) {
            balance = balance - amount;
            return balance;
        } else {
            return "Insufficient funds"
        }
    }

    function deposit(amount) {
        balance = balance + amount;
        return balance;
    }

    function wrong_password() {
        wrong_input_pwd_counter++;
        if (wrong_input_pwd_counter > 7) {
            return "call the cops"
        } else {
            return "Incorrect password"
        }
    }

    function dispatch(input_pwd, m) {
        return input_pwd !== password
            ? wrong_password
            : m === "withdraw"
            ? withdraw
            : m === "deposit"
            ? deposit
            : console.error(`unknown request -- make_account :${m}`)
    }
    return dispatch
}

const acc = make_account(100, "password")

console.log(acc("password", "withdraw")(40))

console.log(acc("wrong", "deposit")(40))
console.log(acc("wrong", "deposit")(40))
console.log(acc("wrong", "deposit")(40))
console.log(acc("wrong", "deposit")(40))
console.log(acc("wrong", "deposit")(40))
console.log(acc("wrong", "deposit")(40))
console.log(acc("wrong", "deposit")(40))
console.log(acc("wrong", "deposit")(40))
