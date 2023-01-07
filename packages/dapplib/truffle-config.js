require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remain essay gloom nasty flower sun'; 
let testAccounts = [
"0xa4f32dd024a61d61fe15d9a554716cc50a05781b5426bf46cc1ef9616c887034",
"0xb2b6e1cc8f016b68463526974985a5b89304dd9d9e71a6023507b06b9bd115bf",
"0xc07d8232ad48b4397a721bfbbd561e11b2906ec5cac3365597135e44098e6fcf",
"0x69327b3ba3c37bccb23ff18fe05b80467d4175fffda8c1baa262e21248e712bb",
"0x5c83321d25a4ee90dd28f5612f06637261783206bf0654d86d868f148b73060b",
"0xe145107a2bf51b9089a63ba76b6bac9c63c3c0f0958e2aa45d094e06bcb9ad29",
"0x88bed864a789d83d46c124ec0d171ca0222b6adbeffa979670672420de169b60",
"0x82c6a3a331816f9f42f479224452cc670b75fc860ddf715ebab113d0596f1ec5",
"0x9aee5225e813487e237396a5c827daff0841de8399946d6b02ad18ed3dcb8c35",
"0x1dfcdea8de5e739ca2ef95f2f651cfdeca7ccfa0511b3684b49bfc4e4ae3070e"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


