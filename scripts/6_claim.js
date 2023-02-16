const Web3 = require('web3');
const { InsuranceContract } = require("../config");


// To claim by an address

const walletaddress = "0xDb4B14F52Bfab4DF509710Ae339FFB77a95aE337"
async function claim() {
    await InsuranceContract.methods.claimInsurance(walletaddress).send({ from: "0xDb4B14F52Bfab4DF509710Ae339FFB77a95aE337" }).then((receipt) => {
        console.log('claimed:', receipt);
    })
        .catch((error) => {
            console.error('Error in claiming:', error);
        });
}
claim()