class CustomersData {
    constructor() {
        this.customers = [];
    }

    pushCustomer(line) {
        this.customers.push(JSON.parse(line));
    }

    getCustomers() {
        return this.customers;
    }
}

module.exports = CustomersData;