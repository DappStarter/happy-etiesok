require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stone riot pitch purpose hunt flower army gate'; 
let testAccounts = [
"0x42eac46f9ef59b79bbcb9bccb163fd90825d7e703dce057cbd5b17322906a94c",
"0xef2f17bd7a2663f6ff9908f6f90415fa6f67cf4d9006c8d3e8f0d08a5e0678e2",
"0x98418df41bc707d378b86f9c3cb5e11007b37d7dfb6e7dcc4f322561d4ec813f",
"0x3781363b50110270ada641846424360e26ad31379d1c53d27a6728f3bb7cea57",
"0x29fc501eb25ca6c94efa985aeffde7a8c1dbca798d87379a0005dec5876dcdce",
"0x82d49d5e5081832f5e0b5ada673116edffbac3a30dc77b3a8e7da1d446442f2c",
"0xbc91f6042be3ecd22b7832425d14a8d97376149e31c246039d681528f3eda32e",
"0x422ebdb86429cfd0d1ca7adc387f10e67b0575ff1258b117e608e1c22fb2773a",
"0xeb2a4bc6af3c4fe37ca86caeb1530303c26c7318be405a61241aa6bdb1df8b87",
"0x0b7dfcf82a50ce7aeedf398bc646ac458fd4d1beadabfcf7f1bf673232b5f510"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
