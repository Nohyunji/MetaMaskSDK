const { createWeb3Modal, defaultConfig } = require('@web3modal/ethers');
const { EthereumProvider } = require('@walletconnect/ethereum-provider');

// 1. Get projectId
const projectId = '0936a771f0ccff861bd3f98bf5f43091';

// 2. Set chains
const Chains = [
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
  },
  {
    chainId: 56,
    name: 'Binance Smart Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com',
    rpcUrl: 'https://bsc-dataseed1.binance.org/'
  },
];

// 3. Create a metadata object
const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance and store it in a variable
let web3Modal;
try {
  web3Modal = createWeb3Modal({
    ethersConfig,
    chains: Chains,
    projectId,
    enableAnalytics: true // Optional - defaults to your Cloud configuration
  });
} catch (error) {
  console.error('Error initializing Web3Modal:', error);
}

async function initProvider() {
  const provider = await EthereumProvider.init({
    projectId: projectId,
    metadata: {
      name: 'My Website',
      description: 'My Website Description',
      url: 'https://mywebsite.com', // origin must match your domain & subdomain
      icons: ['https://avatars.githubusercontent.com/u/37784886']
    },
    showQrModal: true,
    optionalChains: [1, 137, 2020],

    /*Optional - Add custom RPCs for each supported chain*/
    rpcMap: {
      1: 'mainnet.rpc...',
      137: 'polygon.rpc...'
    }
  });
  return provider;
}

module.exports = {
  web3Modal,
  initProvider
};


// async function connectWallet() {
//   console.log(123);
  
//   try {
//       // WalletConnect provider 생성
//       const provider = new WalletConnectProvider.default({
//           infuraId: "YOUR_INFURA_PROJECT_ID" // 자신의 Infura 프로젝트 ID로 교체
//       });

//       // 연결
//       await provider.enable();

//       // 연결된 지갑의 주소 및 정보 가져오기
//       const accounts = await provider.request({ method: 'eth_accounts' });

//       // 가져온 정보를 필요한 방식으로 처리
//       console.log('Connected wallet address:', accounts[0]);
//   } catch (error) {
//       console.error('Error connecting wallet:', error);
//   }
// }

// $(document).ready(function () {
// });
