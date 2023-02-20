const Web3 = require('web3');
const HDWalletProvider = require("@truffle/hdwallet-provider");
const insuranceContractabi = require("./abis/contractabi.json")
require('dotenv').config();


const PRIVATE_KEY = process.env.PRIVATE_KEY ? process.env.PRIVATE_KEY : ''
const GOERLI_RPC_URL = process.env.GOERLI_RPC_URL


// Network

const localKeyProvider = new HDWalletProvider({
    privateKeys: [PRIVATE_KEY],
    providerOrUrl:'https://goerli.infura.io/v3/3418d04467cd490188b6674cdf6cfc2e' ,
  });
const web3 = new Web3(localKeyProvider);
exports.web3 = web3;

// Contract
const contracts = {
   contractAddress: "0x7844E72A0574eDC55a8E5910AD3118515437e9CA"
}
exports.contracts = contracts;

exports.InsuranceContract = new web3.eth.Contract(insuranceContractabi, contracts.contractAddress);



