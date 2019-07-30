const fs = require('fs');
const Customers = require('../model/customersModel');
class FileParser {
    constructor() {
        console.log("In File Parser");
        if (fs) {
            console.log("Successfully Initialized FS, parsing and reading file");
            this.customerModel = new Customers();
        } else {
            throw "Can't open File Stream, Aborting!!"
        }
    }

    async parseFile(pathToFile) {
        console.log("In parse file");
        if (!pathToFile) {
            throw "Please Specify the Path of the file";
        }
        
        let lineReader = require('readline').createInterface({
            input: fs.createReadStream(pathToFile)
        });
        lineReader.on('line', (line) => {
            this.customerModel.pushCustomer(line);
        });
        await new Promise((resolve) => {
            lineReader.on('close', () => resolve(this.customerModel.getCustomers()))
        })

    }

    async getCustomers() {
        return this.customerModel.getCustomers();
    }
}

module.exports = FileParser;