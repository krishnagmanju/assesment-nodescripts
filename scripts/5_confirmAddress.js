const Web3 = require('web3');
const { InsuranceContract } = require("../config");

// To confirm whether the address is insured or not.
async function isInsured() {
    const walletaddress = "0xDb4B14F52Bfab4DF509710Ae339FFB77a95aE337"
    const isInsured = await InsuranceContract.methods.isInsured(walletaddress).call();
    console.log(isInsured)
}
isInsured()