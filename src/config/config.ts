// import NFT from "abi/Lupin.json";

export const DEBUG = true;
export const MAINNET_RPC_URL =
  "https://mainnet.infura.io/v3/0a639a32ec7345bc87ea49ad0b15b0e6";
export const TESTNET_RPC_URL =
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161";
// export const HARDHAT_URL = "http://localhost:8545";

// export const contractAddress = NFT.address;

export const NETWORK_ID = DEBUG ? 5 : 1;
export const RPC_URL = NETWORK_ID === 5 ? TESTNET_RPC_URL : MAINNET_RPC_URL;
export const NETWORK_NAME = DEBUG ? "Goerli" : "Mainnet";

export const OPENSEA_LINK = "https://opensea.io/Alpha";
export const WHITELIST_LIMIT = 300;

export const PRESALE_DATE = "Apr 8, 2023";
