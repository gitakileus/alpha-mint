import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction } from "@usedapp/core";
// @ts-ignore
import ContractABI from "abi/Lupin.json";
// @ts-ignore
import { ContractAddress } from "contracts";

// @ts-ignore
const ContractInterface = new ethers.utils.Interface(ContractABI.abi);
// console.log(ContractInterface)

const NFTContract = new Contract(ContractAddress, ContractInterface);

export const useMaxSupply = () => {
  const [maxSupply] =
    useContractCall({
      abi: ContractInterface,
      address: ContractAddress,
      method: "MAX_SUPPLY",
      args: [],
    }) ?? [];

  return maxSupply;
};

export const useMaxMintAmountPerTx = () => {
  const [maxMintAmountPerTx] =
    useContractCall({
      abi: ContractInterface,
      address: ContractAddress,
      method: "MAX_BATCH_SIZE",
      args: [],
    }) ?? [];

  return maxMintAmountPerTx;
};

export const useCost = () => {
  const [cost] =
    useContractCall({
      abi: ContractInterface,
      address: ContractAddress,
      method: "MINT_PRICE",
      args: [],
    }) ?? [];

  return cost;
};

export const useSaleStarted = () => {
  const [saleStatus] =
    useContractCall({
      abi: ContractInterface,
      address: ContractAddress,
      method: "saleStarted",
      args: [],
    }) ?? [];

  return saleStatus;
};

export const usePreSaleStarted = () => {
  const [preSaleStarted] =
    useContractCall({
      abi: ContractInterface,
      address: ContractAddress,
      method: "preSaleStarted",
      args: [],
    }) ?? [];

  return preSaleStarted;
};

export const useTotalSupply = () => {
  const [totalSupply] =
    useContractCall({
      abi: ContractInterface,
      address: ContractAddress,
      method: "totalSupply",
      args: [],
    }) ?? [];

  return totalSupply;
};

export const useMint = () => {
  // @ts-ignore
  const { state, send, event } = useContractFunction(NFTContract, "mint", {});

  return { state, send, event };
};

export const useWhiteListMint = () => {
  // @ts-ignore
  const { state, send, event } = useContractFunction(
    NFTContract,
    "mintWhitelist",
    {}
  );

  return { state, send, event };
};
