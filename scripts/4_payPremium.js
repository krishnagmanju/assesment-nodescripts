const Web3 = require('web3');
const { InsuranceContract } = require("../config");


// To pay premium
const premiumpaid = Web3.utils.toWei('0.001', 'ether');
console.log(premiumpaid)

async function payment() {
    await InsuranceContract.methods.payPremium().send({ from: "0xdb4b14f52bfab4df509710ae339ffb77a95ae337", value: premiumpaid }).then((receipt) => {
        console.log('Premium paid:', receipt);
    })
        .catch((error) => {
            console.error('Error in paying premium:', error);
        });
}
payment()