// import createWeb3Modal  from '@web3modal/wagmi';
// import { reconnect, http, createConfig } from '@wagmi/core';
// import { mainnet, sepolia } from '@wagmi/core/chains';
// import { coinbaseWallet, walletConnect, injected } from '@wagmi/connectors';

// // 1. Get a project ID at https://cloud.walletconnect.com
// const projectId = 'YOUR_PROJECT_ID';

// const metadata = {
//   name: 'Web3Modal',
//   description: 'Web3Modal Example',
//   url: 'https://web3modal.com', // url must match your domain & subdomain
//   icons: ['https://avatars.githubusercontent.com/u/37784886']
// };

// const config = createConfig({
//   chains: [mainnet, sepolia],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http()
//   },
//   connectors: [
//     walletConnect({ projectId, metadata, showQrModal: false }),
//     injected({ shimDisconnect: true }),
//     coinbaseWallet({
//       appName: metadata.name,
//       appLogoUrl: metadata.icons[0]
//     })
//   ]
// });
// reconnect(config);

// global.modal = createWeb3Modal({
//   wagmiConfig: config,
//   projectId,
//   enableAnalytics: true, // Optional - defaults to your Cloud configuration
//   enableOnramp: true // Optional - false as default
// });


// // import('../node_modules/@wagmi/core/dist/esm/exports/index.js').then(module => {
// //   const { createWeb3Modal, defaultWagmiConfig } = module;

// //   console.log('module::',module);

  
// //   // 1. Get projectId
// //   const projectId = '0936a771f0ccff861bd3f98bf5f43091';

// //   // 모듈을 사용하는 코드
// //   const chains = [{
// //     chainId: 1,
// //     name: 'Ethereum',
// //     currency: 'ETH',
// //     explorerUrl: 'https://etherscan.io',
// //     rpcUrl: 'https://cloudflare-eth.com'
// //   },
// //   {
// //     chainId: 56,
// //     name: 'Binance Smart Chain',
// //     currency: 'BNB',
// //     explorerUrl: 'https://bscscan.com',
// //     rpcUrl: 'https://bsc-dataseed1.binance.org/'
// //   }];

// //   // 2. Create wagmiConfig
// //   const metadata = {
// //     name: 'Web3Modal',
// //     description: 'Web3Modal Example',
// //     url: 'https://web3modal.com', // origin must match your domain & subdomain.
// //     icons: ['https://avatars.githubusercontent.com/u/37784886']
// //   }

// //   global.config = defaultWagmiConfig({
// //     chains,
// //     projectId,
// //     metadata,
// //     // ...wagmiOptions
// //   });


// //   global.modal = createWeb3Modal({
// //     wagmiConfig: global.config,
// //     projectId,
// //     enableAnalytics: true,
// //     enableOnramp: true
// //   });

// //   const { reconnect } = require('@wagmi/core');
// //   reconnect(global.modal);
// // });