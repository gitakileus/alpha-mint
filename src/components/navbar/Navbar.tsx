// @ts-ignore
import { Link } from "react-scroll";
import "./style.css";

const Navbar = () => {
  return (
    <div className="absolute top-0 w-full lg:pl-[200px] xl:pr-[200px] lg:pr-[100px] pb-[20px] lg:pb-0 bg-[#141420] text-white border-b-[2px] border-b-[#3B3B4A]">
      <div className="flex flex-col space-y-[20px] lg:space-y-0 lg:flex-row lg:flex-wrap items-center lg:h-[70px]">
        <div className="mt-[20px] lg:mt-0">
          <label className='font-[800] text-[26px] font-["Poppins"] cursor-pointer'>
            ALPHA NFT
          </label>
        </div>
        <div className='z-[1] lg:ml-auto flex flex-wrap space-x-[20px] lg:space-x-[96px] items-center text-[17px] font-[500] font-["Poppins"]'>
          <Link
            to="about"
            spy={true}
            smooth={true}
            className="hover:text-[#ccc] cursor-pointer transition duration-300 ease-in-out"
          >
            About us
          </Link>
          <Link
            to="faq"
            spy={true}
            smooth={true}
            className="hover:text-[#ccc] cursor-pointer transition duration-300 ease-in-out"
            rel="noreferrer"
          >
            FAQ
          </Link>
        </div>
        <div className="flex flex-wrap ml-[20px] xl:ml-[143px] items-center space-x-[8px] h-[47px] border-[1px] border-[#BE50E5] rounded-[30px] px-[27px]">
          <div className="relative social-btn">
            <i className="social-icon-circle"></i>
            <a href="https://discord.gg/VZNxcecXYk" target="_blank" rel="noreferrer">
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
          <div className="relative social-btn rounded-full bg-white p-[2px] mx-[12px]">
            <i className="social-icon-circle"></i>
            <a href="https://www.instagram.com/allmightylabel/" target="_blank" rel="noreferrer">
              <svg
                className="social-svg"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="26"
                height="26"
                viewBox="0 0 50 50"
                style={{ fill: "#undefined" }}
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
              </svg>
            </a>
          </div>
          <div className="relative social-btn">
            <i className="social-icon-circle"></i>
            <a href="https://twitter.com/themightylabel" target="_blank" rel="noreferrer">
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

      <div className="lg:hidden flex flex-col space-y-[10px]">
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
