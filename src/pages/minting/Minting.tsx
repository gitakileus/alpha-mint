import { useEffect, useReducer } from "react";
import CountUp from "react-countup";
import { toast } from "react-toastify";
import { utils } from "ethers";
import { useEthers } from "@usedapp/core";
import { FaDiscord, FaTwitter } from "react-icons/fa";
// @ts-ignore
import { ReactComponent as MinusIcon } from "assets/icons/icon-minus.svg";
// @ts-ignore
import { ReactComponent as PlusIcon } from "assets/icons/icon-plus.svg";
import {
  useTotalSupply,
  useCost,
  useMaxSupply,
  useMaxMintAmountPerTx,
  useSaleStarted,
  usePreSaleStarted,
  useWhiteListMint,
  useMint,
} from "hook";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import MintingLayout from "layouts/MintingLayout";
import getWhiteListInfo from "utils/whitelist";

// @ts-ignore
export default function Minting() {
  const { account } = useEthers();

  const tokenPrice = useCost();
  const totalSupply = useTotalSupply();
  const maxSupply = useMaxSupply();
  const maxMintAmountPerTx = useMaxMintAmountPerTx();
  const saleStarted = useSaleStarted();
  const preSaleStarted = usePreSaleStarted();
  const { state: whiteMintState, send: whiteMint } = useWhiteListMint();
  const { state: mintState, send: mint } = useMint();
  const initialState = { numberOfToken: 1 };

  const reducer = (state: any, action: any) => {
    switch (action) {
      case "plus":
        if (state.numberOfToken < parseInt(maxMintAmountPerTx, 10))
          return { numberOfToken: state.numberOfToken + 1 };
        return { numberOfToken: state.numberOfToken };
      case "minus":
        if (state.numberOfToken > 1)
          return { numberOfToken: state.numberOfToken - 1 };
        return { numberOfToken: state.numberOfToken };
      case "max":
        return { numberOfToken: parseInt(maxMintAmountPerTx, 10) };
      default:
        throw new Error("There is an error");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    whiteMintState.status === "Exception" &&
      toast.error(whiteMintState.errorMessage);
    whiteMintState.status === "Success" &&
      toast.info("Whitelist Mint Success!");

    mintState.status === "Exception" && toast.error(mintState.errorMessage);
    mintState.status === "Success" && toast.info("Mint Success!");
  }, [mintState, whiteMintState]);

  const handleMint = async () => {
    if (!account) {
      toast.error("Please connect on Ethereum network.");
      return;
    }

    const ethPrice =
      (state.numberOfToken * parseInt(tokenPrice, 10)) / 10 ** 18;

    console.log(saleStarted);

    if (preSaleStarted) {
      const verify = await getWhiteListInfo(window.ethereum.selectedAddress);
      if (!verify.verified) {
        toast.warning("You are not a member in whitelist!");
        return;
      }
      whiteMint(state.numberOfToken, {
        value: utils.parseEther(ethPrice.toString()),
      });
    } else {
      if (saleStarted) {
        mint(state.numberOfToken, {
          value: utils.parseEther(ethPrice.toString()),
        });
      } else {
        toast.info("Mint not started.");
      }
    }
  };

  return (
    // @ts-ignore
    <MintingLayout>
      <div className="mint-page">
        <div className="content">
          <div className="mask">
            <div className="banner">
              <h1 className="text-4xl">Get Your Own ALPHA NFT</h1>
              <div className="nft-panel unselectable">
                <div className="title">Amount</div>
                <div className="nft-counter">
                  <MinusIcon onClick={(e: any) => dispatch("minus")} />
                  <div className="amount">{state.numberOfToken}</div>
                  <PlusIcon onClick={(e: any) => dispatch("plus")} />
                </div>
                <button
                  className="unselectable"
                  onClick={(e) => dispatch("max")}
                >
                  Get max
                </button>
              </div>
              <h3 className="mb-4 text-lg unselectable">
                Total
                <span>
                  {tokenPrice
                    ? (state.numberOfToken * parseInt(tokenPrice, 10)) /
                      10 ** 18
                    : 0}
                </span>{" "}
                ETH
              </h3>
              <button
                className="relative inline-flex items-center justify-center px-12 py-3 m-1 overflow-hidden text-white border-b-4 border-l-2 border-purple-700 rounded shadow-lg cursor-pointer group active:border-purple-600 active:shadow-none bg-gradient-to-tr from-purple-600 to-purple-500 unselectable"
                onClick={handleMint}
              >
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                Mint
              </button>
              <div className="grid grid-cols-1 mt-16 md:grid-cols-2">
                <div className="flex flex-row justify-center gap-4 md:flex-col">
                  <div className="text-lg text-gray-300">Community Members</div>
                  <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl">
                    <FaDiscord />{" "}
                    <CountUp
                      end={1200}
                      duration={3}
                      separator=","
                      decimal=","
                      suffix=" +"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center gap-4 md:flex-col">
                  <div className="text-lg font-bold text-gray-300">
                    Followers on twitter
                  </div>
                  <div className="flex items-center justify-center gap-2 text-2xl md:text-3xl">
                    <FaTwitter />{" "}
                    <CountUp
                      end={3500}
                      duration={3}
                      separator=","
                      decimal=","
                      suffix=" +"
                    />
                  </div>
                </div>
              </div>
              <div
                className="relative flex items-center justify-center w-full h-24 mt-24 bg-white rounded-xl bg-opacity-90 md:justify-start"
              >
                <div className="px-5 md:px-20">
                  <div className="text-lg text-gray-800">Available</div>
                  <h3 className="text-3xl text-purple-900">
                    {totalSupply ? (
                      <CountUp
                        end={parseInt(totalSupply, 10)}
                        duration={1}
                        separator=","
                        decimal=","
                      />
                    ) : (
                      0
                    )}
                    /{" "}
                    {maxSupply ? (
                      <CountUp
                        end={maxSupply}
                        duration={2}
                        separator=","
                        decimal=","
                      />
                    ) : (
                      0
                    )}
                  </h3>
                </div>
                {/* <img
                  className="absolute bottom-0 right-0 hidden object-cover md:block rounded-br-xl"
                  width="280"
                  height="136"
                  src="assets/images/cheetah-group.png"
                  alt="Group"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MintingLayout>
  );
}
