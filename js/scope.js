
function createBankAccount() {
    let balance = 500;

    const user = {
        deposit: function (amount) {
            if (typeof amount === 'number' && amount > 0) {
                balance += amount;
                return balance;
            }
        },

        withdraw: function (amount) {
            if (typeof amount === 'number' && amount > 0 && balance >= amount) {
                balance -= amount;
                return balance;
            }
        },

        getBalance: function () {
            return balance;
        }
    }

    return user;
}

const customer = createBankAccount();
console.log(customer.deposit(200));
console.log(customer.withdraw(300));



