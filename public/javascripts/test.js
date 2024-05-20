 // Unpkg imports
//  const Web3Modal = window.Web3Modal.default;
 
//  console.log(Web3Modal);

//  const WalletConnectProvider = window.WalletConnectProvider.default;
//  const Fortmatic = window.Fortmatic;
//  const evmChains = window.evmChains;




// // 코드가 @web3modal/wagmi, @wagmi/core, @wagmi/connectors를 사용하는 부분을 대체하여 사용하세요.
// // 프로젝트 ID는 직접 설정하십시오.
// const projectId = '0936a771f0ccff861bd3f98bf5f43091';

// // 필요한 스크립트를 동적으로 로드합니다.
// function loadScript(src) {
//     return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.onload = resolve;
//         script.onerror = reject;
//         document.head.appendChild(script);
//     });
// }

// // 스크립트를 가져올 URL을 지정합니다.
// const wagmiCoreURL = 'https://cdn.jsdelivr.net/npm/@wagmi/core/dist/index.js';
// const wagmiConnectorsURL = 'https://cdn.jsdelivr.net/npm/@wagmi/connectors/dist/index.js';

// // 필요한 스크립트를 로드한 후에 실행할 코드를 정의합니다.
// Promise.all([
//     loadScript(wagmiCoreURL),
//     loadScript(wagmiConnectorsURL)
// ]).then(() => {
//     // 스크립트가 로드된 후에 해당 모듈에서 함수 및 객체를 가져와서 사용합니다.
//     console.log('window::',window);

//     // @wagmi/core 모듈에서 가져온 것을 직접 사용합니다.
//     const { createConfig, http } = window['wagmiCore'];
//     // @wagmi/connectors 모듈에서 가져온 것을 직접 사용합니다.
//     const { walletConnect, injected, coinbaseWallet } = window['wagmiConnectors'];

//     const metadata = {
//         name: 'Web3Modal',
//         description: 'Web3Modal Example',
//         url: 'https://web3modal.com',
//         icons: ['https://avatars.githubusercontent.com/u/37784886']
//     };

//     const mainnet = {
//         id: 'mainnet',
//         // 다른 필요한 속성들을 정의합니다.
//     };

//     const sepolia = {
//         id: 'sepolia',
//         // 다른 필요한 속성들을 정의합니다.
//     };

//     const config = createConfig({
//         chains: [mainnet, sepolia],
//         transports: {
//             [mainnet.id]: http(),
//             [sepolia.id]: http()
//         },
//         connectors: [
//             walletConnect({ projectId, metadata, showQrModal: false }),
//             injected({ shimDisconnect: true }),
//             coinbaseWallet({
//                 appName: metadata.name,
//                 appLogoUrl: metadata.icons[0]
//             })
//         ]
//     });

//     reconnect(config);

//     global.modal = createWeb3Modal({
//         wagmiConfig: config,
//         projectId,
//         enableAnalytics: true,
//         enableOnramp: true
//     });
// }).catch(error => {
//     console.error('Failed to load scripts:', error);
// });



// // const createWeb3Modal = require('@web3modal/wagmi');
// // const { reconnect, http, createConfig } = require('@wagmi/core');
// // const { mainnet, sepolia } = require('@wagmi/core/chains');
// // const { coinbaseWallet, walletConnect, injected } = require('@wagmi/connectors');

// // // 1. Get a project ID at https://cloud.walletconnect.com
// // const projectId = 'YOUR_PROJECT_ID';

// // const metadata = {
// //   name: 'Web3Modal',
// //   description: 'Web3Modal Example',
// //   url: 'https://web3modal.com', // url must match your domain & subdomain
// //   icons: ['https://avatars.githubusercontent.com/u/37784886']
// // };

// // const config = createConfig({
// //   chains: [mainnet, sepolia],
// //   transports: {
// //     [mainnet.id]: http(),
// //     [sepolia.id]: http()
// //   },
// //   connectors: [
// //     walletConnect({ projectId, metadata, showQrModal: false }),
// //     injected({ shimDisconnect: true }),
// //     coinbaseWallet({
// //       appName: metadata.name,
// //       appLogoUrl: metadata.icons[0]
// //     })
// //   ]
// // });
// // reconnect(config);

// // global.modal = createWeb3Modal({
// //   wagmiConfig: config,
// //   projectId,
// //   enableAnalytics: true, // Optional - defaults to your Cloud configuration
// //   enableOnramp: true // Optional - false as default
// // });
