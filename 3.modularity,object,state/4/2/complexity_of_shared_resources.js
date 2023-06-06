function exchange(account1, account2) {
    const difference = account1("balance") - account2("balance")
    account1("withdraw")(difference)
    account2("deposit")(difference)
}

function make_account_and_serializer(balance) {
    function withdraw(amount) {
        if (balance > amount) {
            balance = balance - amount
            return balance;
        } else {
            return "Insufficient funds"
        }
    }
    function deposit(amount) {
        balance = balance + amount
        return balance;
    }
    const balance_serializer = make_serializer()
    return m => m === 'withdraw'
        ? withdraw
        : m === 'deposit'
        ? deposit
        : m === 'balance'
        ? balance
        : m === 'serializer'
        ? balance_serializer
        : console.error('unknown request -- make_account')
}

function deposit(account, amount) {
    const s = account("serializer")
    const d = account("deposit")
    s(d(amount))
}

function serialized_exchange(account1, account2) {
    const serializer1 = account1("serializer")
    const serializer2 = account2("serializer")
    serializer1(serializer2(exchange))(account1, account2)
}