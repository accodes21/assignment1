import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-20 px-10 mt-4 bg-[#F8F8F8] flex flex-col md:flex-row justify-evenly">
      <Image
        src="/logo.png"
        alt="logo"
        width={161}
        height={125}
        className="h-[58px] w-[75px] md:h-[125px] md:w-[161px] text-center mb-10 md:mb-0 mx-auto md:mx-0"
      />
      <div className="flex flex-col">
        <h2 className="text-[#0E2368] font-semibold text-md">Contact Us</h2>
        <address className="text-[#444957] text-sm py-3">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, <br /> Phartosh Gate near YTM
          Market, <br /> XYZ-343434
        </address>
        <p className="text-[#444957] text-sm py-3">example2020@gmail.com</p>
        <p className="text-[#444957] text-sm py-3">(904) 443-0343</p>
      </div>
      <ul>
        <h2 className="text-[#0E2368] font-semibold text-md mt-8 md:mt-0">
          More
        </h2>
        <li className="text-[#444957] text-sm py-3">About Us</li>
        <li className="text-[#444957] text-sm py-3">Products</li>
        <li className="text-[#444957] text-sm py-3">Career</li>
        <li className="text-[#444957] text-sm py-3">Contact Us</li>
      </ul>
      <div className="flex flex-col-reverse items-center mt-12 md:mt-0 md:block">
        <div>
          <h2 className="text-[#0E2368] font-semibold text-md text-center hidden md:block">
            Social Links
          </h2>
          <div className="flex justify-evenly pt-3 gap-4">
            <Image src="/insta.png" alt="insta" width={21} height={21} />
            <Image src="/x.png" alt="x" width={21} height={21} />
            <Image src="/meta.png" alt="facebook" width={21} height={21} />
          </div>
        </div>
        <p className="text-[#444957] text-sm mt-0 md:mt-20">
          &copy; 2022 Food Truck Example
        </p>
      </div>
    </footer>
  );
};

export default Footer;
