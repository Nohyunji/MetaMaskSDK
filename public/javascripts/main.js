// // Function to handle account information
// async function getAccountInfo() {
// if (typeof window.ethereum !== 'undefined') {
//   // MetaMask가 설치되어 있을 때
//   try {
//     const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//     const selectedAddress = accounts[0];
//     console.log("연결된 지갑의 주소:", selectedAddress);
//   } catch (error) {
//     console.error("Error fetching account information:", error);
//   }
// } else {
//   console.log("MetaMask가 설치되어 있지 않습니다.");
// }
// }

// // Function to open Web3Modal connect modal
// function openConnectModal() {
// // 여기에 connect modal을 여는 코드를 넣어줍니다.
// }

// // Function to render selected network
// function renderSelectedNetwork(selectedNetwork) {
// return `<div>Selected Network: ${selectedNetwork ? `${selectedNetwork.name} (${selectedNetwork.chainId})` : 'None'}</div>`;
// }

// // Add event listeners to buttons
// document.getElementById('connectButton').addEventListener('click', openConnectModal);
// document.getElementById('getAccountInfoButton').addEventListener('click', getAccountInfo);

// // Render selected network
// const selectedNetworkContainer = document.getElementById('selectedNetworkContainer');
// selectedNetworkContainer.innerHTML = renderSelectedNetwork(null); // Initially, no selected network
