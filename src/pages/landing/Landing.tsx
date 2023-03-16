import Navbar from "components/navbar";
import LandingLayout from "layouts/LandingLayout";
import { useEthers, useEtherBalance } from "@usedapp/core";
import { BigNumber, ethers } from "ethers";

//  imort component
import Carousel from "components/carousel";
import Member from "components/member";
import Accordion from "components/accordion";

// import json file
import caroselData from "utils/CaroselData.json";
import memberData from "utils/Members.json";
import faq from "utils/FAQ.json";

// import css file
import "./style.css";
import "components/navbar/style.css";

export default function Landing() {
  const { activateBrowserWallet, account } = useEthers();
  const userBalance = useEtherBalance(account);

  console.log(
    "ethBalance: ",
    ethers.utils.formatEther(userBalance || BigNumber.from(0))
  );

  return (
    <LandingLayout>
      {/* falling start */}
      <section className="star">
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>
      <Navbar />
      {/* banner section */}
      <section className="flex flex-col lg:flex-row flex-around bg-[#141420] md:px-[150px] lg:px-[200px] pt-[200px] md:py-[92px] overflow-hidden md:h-screen">
        <div className="flex flex-col justify-center pl-8 text-white md:px-0">
          <img
            src="/assets/images/ethereum.webp"
            alt="ethereum"
            className="w-[30px] md:w-[55px] h-[50px] md:h-[83px]"
          />
          <p className='font-[300] text-xl md:text-[40.2px] font-["Poppins"]'>
            MINT YOUR ALPHA
          </p>
          <p className="jtp w-full md:min-w-[600px] !text-3xl md:!text-7xl">ALPHA NFT</p>
          <div className="gradient-border transition duration-500 ease-in-out rounded-[30px] hover:cursor-pointer border-[#BE50E5] border-[1px] w-fit mt-[31px]">
            {!account && (
              <div
                className="flex items-center mx-[25px] my-[15px]"
                onClick={activateBrowserWallet}
              >
                <img
                  src="/assets/images/wallet.webp"
                  alt="wallet"
                  className="w-[30px] h-[30px]"
                />
                <p className="font-[400] text-[25px] ml-[5px]">
                  Connect the wallet
                </p>
              </div>
            )}
            {account && (
              <div
                className="flex items-center mx-[25px] my-[15px]"
                onClick={activateBrowserWallet}
              >
                <img
                  src="/assets/images/wallet.webp"
                  alt="wallet"
                  className="w-[30px] h-[30px]"
                />
                <p className="font-[400] text-lg md:text-[25px] ml-[5px]">
                   &nbsp;balance:{" "}
                  {parseFloat(
                    ethers.utils.formatEther(userBalance?.toString() || "0")
                  ).toFixed(2)}{" "}
                  ETH
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-center items-center flex-1 w-50 mt-[100px] lg:mt-[30px]">
          <img
            src="/assets/images/banner-border.webp"
            alt="banner-border"
            className="absolute md:min-w-[381px] h-[351px]"
          />
          <div className="relative">
            <img
              src="/assets/images/banner-image.png"
              alt="banner"
              className="w-[280px] md:min-w-[339px] md:h-[339px] z-10 md:translate-y-10 rounded-full"
            />
            <div className="absolute ml-[400px] -top-[85px] w-[164px] h-[164px] bg-[#5F127C] blur-[150px]"></div>
            <div className="absolute ml-[530px] -mt-[20px] -z-10 w-[164px] h-[164px] bg-[#5F127C] blur-[150px]"></div>
            <img
              src="/assets/images/bubble.webp"
              alt="bubble first"
              className="absolute animate-bounce transition-y-[100px] -right-[100px] bottom-[10px] w-[70px] h-[70px]"
            />
            <img
              src="/assets/images/bubble.webp"
              alt="bubble second"
              className="absolute left-[20px] -bottom-[40px] w-[50px] h-[50px]"
            />
            <img
              src="/assets/images/bubble.webp"
              alt="bubble third"
              className="absolute -left-[70px] top-[80px] w-[17px] h-[17px]"
            />
            <img
              src="/assets/images/ring.webp"
              alt="rigng"
              className="absolute  -right-[70px] top-[0px] w-[55px] h-[55px]"
            />
          </div>
        </div>
      </section>
      {/* collection section */}
      <section className="bg-[#171725] px-[30px] md:px-[100px] xl:px-[200px] pb-[131px]">
        <div className="pt-[92px] pb-[41px] text-center">
          <p className='text-[#BE50E5] font-[700] text-[48px] font-["Poppins"]'>
            Alpha Collectibles
          </p>
        </div>
        <Carousel Images={caroselData} />

        <div className="relative group">
          <div className="text-[#BE50E5]">
            <p>
              The Alpha Allmighty NFT is a collection of 3,333 generative images
              of our brands mascot Alpha.
            </p>
            <p>
              This NFT collection doubles as a membership card offering
              exclusive access to events and more for members. With a chance for
              users to win free items. Let’s see who can add Alpha to their
              collection.
            </p>
          </div>
          <span className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -inset-full z-5 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></span>
        </div>
      </section>
      {/* roadmap section */}
      <section className='pt-[69px] pb-[150px] xl:pb-0 xl:-mb-[100px] pl-[73px] md:pl-[149px] lg:pl-[249px] xl:pl-[349px] pr-[73px] lg:pr-[173px] xl:pr-[273px] bg-[url("assets/images/roadmap-back.png")] bg-[#141420] .bg-opacity-25'>
        <p className='font-[700] text-[40px] font-["Poppins"] text-[#BE50E5] text-center'>
          The RoadMap
        </p>

        <div className="space-y-[80px] md:space-y-0 md:grid md:grid-cols-5 md:auto-rows-[1fr] mt-[80px] md:mt-[150px] relative">
          <div className="col-span-2 col-start-1 row-span-2 row-start-1">
            <div className="relative pt-[100%] border-[5px] border-[#fff] rounded-full bg-gradient-to-b from-[#BE50E5] to-[#5B1175] flex items-center">
              <div className="absolute top-0 bottom-0 left-0 right-0 text-center rounded-full">
                <div className="overflow-hidden quote-wrapper">
                  <blockquote className="text">
                    <p>
                      Create & publish our website and Social media creation
                      <br />
                      <br />
                      Project Layout for future Holders/Investor
                      <br />
                      <br />
                      Create Awesome Arts
                    </p>
                  </blockquote>
                </div>
                <p className='text-[#fff] font-[500] text-[26px] font-["Poppins"]'></p>
              </div>
              <div className="absolute w-[82px] h-[82px] bg-[#fff] rounded-full bottom-0 md:bottom-auto left-1/2 md:left-auto md:top-1/2 -translate-x-1/2 translate-y-1/2 md:-translate-y-1/2 md:right-0 md:translate-x-1/2">
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="assets/images/pen.webp"
                    alt="pen"
                    className="w-[54px] h-[54px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden col-span-1 col-start-3 row-span-2 row-start-2 xl:block">
            <img
              src="assets/images/line1.webp"
              alt="line"
              className="w-full max-h-[258px]"
            />
          </div>

          <div className="col-span-2 col-start-4 row-span-2 row-start-3">
            <div className="relative w-full pt-[100%] border-[5px] border-[#fff] rounded-full bg-gradient-to-b from-[#48BA2E] to-[#278412] flex items-center xl:-mt-[200px]">
              <div className="absolute top-0 bottom-0 left-0 right-0 text-center rounded-full">
                <div className="overflow-hidden quote-wrapper">
                  <blockquote className="text">
                    <p>
                      Publish White Paper Minting Site Launch
                      <br /> <br />
                      gain access to the Alpha discord community, where
                      we give access to several benefits .
                    </p>
                  </blockquote>
                </div>
                <p className='text-[#fff] font-[500] text-[26px] font-["Poppins"]'></p>
              </div>
              <div className="absolute w-[82px] h-[82px] bg-[#fff] rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="assets/images/broad.webp"
                    alt="broad"
                    className="max-w-[54px] max-h-[54px] w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden col-span-2 col-start-3 row-span-1 row-start-5 xl:block">
            <img
              src="assets/images/line2.webp"
              alt="line"
              className="w-full max-h-[240px] -mt-[220px]"
            />
          </div>

          <div className="col-span-2 col-start-1 row-span-2 row-start-5">
            <div className="relative w-full pt-[100%] border-[5px] border-[#fff] rounded-full bg-gradient-to-b from-[#594AFF] to-[#1609B0] flex items-center xl:-mt-[220px]">
              <div className="absolute top-0 bottom-0 left-0 right-0 text-center rounded-full">
                <div className="overflow-hidden quote-wrapper">
                  <blockquote className="text">
                    <p>
                      Scaling
                      <br />
                      <br />
                      offer holders exclusive access to physical merchandise and
                      our collectibles! offer holders exclusive access to
                      physical merchandise and collectibles!
                    </p>
                  </blockquote>
                </div>
                <p className='text-[#fff] font-[500] text-[26px] font-["Poppins"]'></p>
              </div>
              <div className="absolute w-[82px] h-[82px] bg-[#fff] rounded-full  bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="assets/images/file.webp"
                    alt="file"
                    className="w-[54px] h-[54px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden col-span-2 col-start-2 row-span-2 row-start-7 xl:block">
            <img
              src="assets/images/line3.webp"
              alt="line"
              className="w-full max-h-[355px] -mt-[190px]"
            />
          </div>

          <div className="row-start-7 xl:row-start-[8] row-span-2 col-start-4 col-span-2">
            <div className="relative w-full pt-[100%] border-[5px] border-[#fff] rounded-full bg-gradient-to-b from-[#DF494A] to-[#790E0F] flex items-center xl:-mt-[300px]">
              <div className="absolute top-0 bottom-0 left-0 right-0 text-center rounded-full">
                <div className="overflow-hidden quote-wrapper">
                  <blockquote className="text">
                    <p>
                      Take – Off To The MetaVerse 🚀
                      <br />
                      <br />
                      Build a new world community that represents themselves and
                      communicates with each other using Alpha.
                    </p>
                  </blockquote>
                </div>
                <p className='text-[#fff] font-[500] text-[26px] font-["Poppins"]'></p>
              </div>
              <div className="absolute w-[82px] h-[82px] bg-[#fff] rounded-full bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src="assets/images/voice.webp"
                    alt="voice"
                    className="max-w-[54px] max-h-[54px] w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About us Section */}
      <section
        id="about"
        className="bg-[#141420] px-10 lg:px-[220px] pb-[118px]"
      >
        <div className="pt-[64px] text-center">
          <p className='text-[#BE50E5] font-[700] text-3xl md:text-[44px] font-["Poppins"]'>
            About Us
          </p>
        </div>
        <div className="text-white font-['Poppins'] font-[300] text-lg md:text-[26px] text-center my-5">
          <p>
            We are Alpha, a brand that focuses on creative expression.
            From Music, Fashion, and Digital Art, we are seeking to expand our
            business by focusing on creativity and doing the things we love. We
            have a passion for this industry and what it could bring in the
            future. Our brand objectives are based solely on making the world a
            Healthy and Happier place by simply having Fun. Our main objective
            are base on Digital Art as an NFT and Web 3.0. We're here to brings
            you the most Digital experience ever.
          </p>
        </div>
      </section>
      {/* The Team section */}
      <section className="bg-[#171725] px-10 xl:px-[220px] pb-[118px]">
        <div className="pt-[64px] text-center">
          <p className='text-[#BE50E5] font-[700] text-3xl md:text-[40px] font-["Poppins"]'>
            The Team
          </p>
        </div>

        <div className="mt-[198px] w-full rounded-[30px] border-[2px] border-[#5E5E75]">
          <div className="flex flex-wrap justify-around space-y-[20px] -translate-y-[140px] md:-translate-y-[150px]">
            {memberData.map((member, index) => {
              return (
                <Member
                  key={index}
                  image={member.image}
                  role={member.role}
                  name={member.name}
                />
              );
            })}
          </div>
        </div>
      </section>
      {/* FAQ section */}
      <section
        id="faq"
        className="bg-[#141420] px-[30px] lg:px-[150px] xl:px-[200px]"
      >
        <div className="pt-[93px]">
          <p className='text-center text-[#BE50E5] font-[700] font-["Poppins] text-3xl md:text-[40px]'>
            FAQ
          </p>
        </div>
        <div className="pt-[23px] pb-[53px]">
          {faq.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </section>
      {/* Footer section */}
      <section className="bg-gradient-to-b from-[#141420] to-[#2B2B44] pt-[55px] pb-[88px] text-center">
        <div className="">
          <span className='font-["Poppins] font-[800] text-3xl md:text-[49px] cursor-pointer text-[#fff] hover:text-[#aaa] duration-150'>
            ALPHA
          </span>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap items-center space-x-[30px] h-[47px] relative ">
            <i className="mx-0 social-icon-circle"></i>
            <div className="relative social-btn !ml-0">
              <a href="https://discord.gg/VZNxcecXYk" target="_blank" rel="noreferrer" >
                <svg
                  className="social-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="img"
                  width="26px"
                  height="26px"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="white"
                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418Z"
                  />
                </svg>
              </a>
            </div>
            <div className="relative social-btn rounded-full bg-white p-[2px]">
              <a
                href="https://www.instagram.com/allmightylabel/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  className="social-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="26"
                  height="26"
                  viewBox="0 0 50 50"
                  style={{ fill: "#000" }}
                >
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
              </a>
            </div>
            <div className="relative social-btn">
              <a href="https://twitter.com/themightylabel" target="_blank" rel="noreferrer" >
                <svg
                  className="social-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="28"
                  height="28"
                  viewBox="0 0 50 50"
                  style={{ fill: "#fff" }}
                >
                  <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-[16.4px] relative">
          <p className='font-[300] font-["Poppins"] text-[16px] text-[#fff] cursor-pointer'>
            © LUPIN ALMTY2022
          </p>
          <p className="mt-4 text-sm">
            <a
              href="https://metamask.io/faqs/"
              target="_blank"
              rel="noreferrer"
              className="text-white"
            >
              Metamask guide
            </a>
            <a
              href="https://www.coinbase.com/wallet/getting-started-extension/"
              className="ml-5 text-white"
              target="_blank"
              rel="noreferrer"
            >
              Coinbase Wallet guide
            </a>
          </p>
        </div>
      </section>
    </LandingLayout>
  );
}
