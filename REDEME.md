# yiyi-wallet-manager

`yiyi-wallet-manager` is a React component library designed to facilitate the integration and management of Web3 wallets. This component offers functionalities for users to connect their wallets, view balances, send ETH, and interact with tokens, along with other Web3 wallet interactions.

## Features

- Connect and disconnect wallet functionality
- Display balances for ETH and tokens
- Send ETH and tokens to other addresses
- Support for popular browsers and wallet providers, including MetaMask
- Easy integration and customization for various applications

## Installation

Install `yiyi-wallet-manager` via npm:

```bash
npm install yiyi-wallet-manager
```

## Quick Start

To use `yiyi-wallet-manager` in your React application, first import the `WalletManager` component:

```jsx
import { WalletManager } from 'yiyi-wallet-manager';
```

Then, use it within your React component:


```jsx
function App() {
  return (
    <div>
      <h1>My Web3 DApp</h1>
      <WalletManager />
    </div>
  );
}

export default App;
```

## API Documentation

- `connect()`: Connects to the user's Web3 wallet.
- `disconnect()`: Disconnects the current wallet connection.
- `sendEth(toAddress, amount)`: Send ETH to a specified address.
- `sendToken(tokenAddress, toAddress, amount)`: Send tokens to a specified address.

Detailed API documentation can be found here: [API Documentation](/docs/api.md)

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests and report issues.