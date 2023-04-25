// "open sesame"의 비밀번호를 가지는 은행 계좌 peter_acc
// 공동 계좌를 만들고 나면 "rosebud" 비밀번호를 통해서 paul_acc으로 peter_acc의 은행 업무를 처리할 수 있다.
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
            : m === "verify"
            ? true
            : console.error(`unknown request -- make_account :${m}`)
    }

    return dispatch;
}

function make_joint(bank, password, password_for_joint) {
    if (bank(password, "verify")) {
        return (input_pwd, m) => {
            return input_pwd === password_for_joint
                ? bank(password, m)
                : () => console.error('invalid password')
        }
    } else {
        console.error('invalid password')
    }
}


const peter_acc = make_account(100, "open sesame")
const paul_acc = make_joint(peter_acc, "open sesame", "rosebud")
paul_acc("rosebud", "withdraw")(10)
paul_acc("rosebud_wrong", "withdraw")(10)