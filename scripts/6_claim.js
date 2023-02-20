const Web3 = require('web3');
const { InsuranceContract } = require("../config");


// To claim by an address

const walletaddress = "0xdb4b14f52bfab4df509710ae339ffb77a95ae337"
const claimamount = Web3.utils.toWei('0.001', 'ether');
console.log(claimamount)

async function claim() {
    await InsuranceContract.methods.claimInsurance(walletaddress).send({ from: "0xdb4b14f52bfab4df509710ae339ffb77a95ae337", value:claimamount}).then((receipt) => {
        console.log('claimed:', receipt);
    })
        .catch((error) => {
            console.error('Error in claiming:', error);
        });
}
claim()