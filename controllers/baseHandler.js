const FileParser = require('./parseFile');
const FindCustomers = require('./findCustomers');
class CW100 extends FileParser {
    constructor() {
        super();
    }

    async getWithin100Customers(customers) {
        const pivot = 100;
        let finder = await new FindCustomers().appendHaversineDistances(customers);
        if (finder && finder.length > 0) {
            let filteredCustomers = finder.filter(customer => customer.haversineDistance <= pivot);
            if (filteredCustomers && filteredCustomers.length > 0) {
                filteredCustomers.sort((customer1, customer2) => customer1.user_id - customer2.user_id);
                return filteredCustomers;
            } else {
                throw "No Customers found within 100Km range!";
            }
        }
    }

    async showFormattedCustomers(inRangeCustomers) {
        console.log("\n\nCUSTOMERS\t|*|*|*|*|*|\tIN 100KM RANGE \n\n");
        console.log("USERID\t|*|*|*|*|*|\tNAME");
        console.log("-----------------------------------------------------------------");
        for (let eachCustomer of inRangeCustomers) {
            console.log(`${eachCustomer.user_id}\t|*|*|*|*|*|\t${eachCustomer.name}`);
        }
    }

    async initialize(pathToFile) {
        let key = null;
        try {
            await this.parseFile(pathToFile);
            let customers = await this.getCustomers();
            let getNearbyCustomers = await this.getWithin100Customers(customers);
            await this.showFormattedCustomers(getNearbyCustomers);
            return getNearbyCustomers;
        } catch (error) {
            console.log(error);
        }
        finally {
            console.log("Exiting!!");
        }
    }
}

module.exports = CW100;