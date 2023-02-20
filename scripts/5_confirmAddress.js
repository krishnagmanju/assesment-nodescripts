const Web3 = require('web3');
const { InsuranceContract } = require("../config");

// To confirm whether the address is insured or not.
async function isInsured() {
    const walletaddress = "0xdb4b14f52bfab4df509710ae339ffb77a95ae337"
    const isInsured = await InsuranceContract.methods.isInsured(walletaddress).call();
    console.log(isInsured)
}
isInsured()