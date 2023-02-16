const Web3 = require('web3');
const { InsuranceContract } = require("../config");


// To pay premium
const premiumpaid = Web3.utils.toWei('0.001', 'ether');
console.log(premiumpaid)

async function payment() {
    await InsuranceContract.methods.payPremium().send({ from: "0xDb4B14F52Bfab4DF509710Ae339FFB77a95aE337", value: premiumpaid }).then((receipt) => {
        console.log('Premium paid:', receipt);
    })
        .catch((error) => {
            console.error('Error in paying premium:', error);
        });
}
payment()