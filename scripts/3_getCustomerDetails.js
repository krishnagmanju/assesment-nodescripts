const Web3 = require('web3');
const { InsuranceContract } = require("../config");

// to get customer details
async function details() {
    const customerDetails = await InsuranceContract.methods.customerDetails().call();
    console.log(customerDetails)
}
details()