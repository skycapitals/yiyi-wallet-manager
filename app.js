import Web3 from 'web3';

let web3;
let account;
let balanceElement = document.getElementById('balance');
let accountElement = document.getElementById('account');
let connectWalletButton = document.getElementById('connectWallet');
let sendETHButton = document.getElementById('sendETH');

async function connectWallet() {
  if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    try {
      // Request account access if needed
      await window.ethereum.request({ method: 'eth_requestAccounts' });

      // Acccounts now exposed, get the first one
      account = (await web3.eth.getAccounts())[0];
      accountElement.innerHTML = `Account: ${account}`;

      updateBalance();
      
    } catch (error) {
      console.error('User denied account access');
    }
  } else if (window.web3) { // Legacy dapp browsers...
    web3 = new Web3(web3.currentProvider);
    account = (await web3.eth.getAccounts())[0];
  } else {
    console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }
}

async function updateBalance() {
  web3.eth.getBalance(account, (err, balance) => {
    if (!err) {
      balanceElement.innerHTML = `Balance: ${web3.utils.fromWei(balance, 'ether')} ETH`;
    }
  });
}

async function sendETH() {
  let recipient = document.getElementById('recipient').value;
  let amount = web3.utils.toWei(document.getElementById('amount').value, 'ether');
  
  web3.eth.sendTransaction({
    from: account,
    to: recipient,
    value: amount,
  }, (err, transactionHash) => {
    if (err) {
      console.log('Error sending transaction:', err);
    } else {
      console.log('Transaction sent! Hash:', transactionHash);
    }
  });
}

connectWalletButton.onclick = connectWallet;
sendETHButton.onclick = sendETH;