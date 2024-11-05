import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="py-20 px-10 mt-4 bg-[#F8F8F8] flex justify-evenly">
      <Image
        src="/logo.png"
        alt="logo"
        width={161}
        height={125}
        className="h-[125px]"
      />
      <div className="flex flex-col">
        <h2 className="text-[#0E2368] font-semibold text-md">Contact Us</h2>
        <p className="text-[#444957] text-sm py-3">
          Lorem Ipsum Pvt Ltd.5/1, Magalton Road, <br /> Phartosh Gate near YTM
          Market, <br /> XYZ-343434
        </p>
        <p className="text-[#444957] text-sm py-3">example2020@gmail.com</p>
        <p className="text-[#444957] text-sm py-3">(904) 443-0343</p>
      </div>
      <div>
        <h2 className="text-[#0E2368] font-semibold text-md">More</h2>
        <p className="text-[#444957] text-sm py-3">About Us</p>
        <p className="text-[#444957] text-sm py-3">Products</p>
        <p className="text-[#444957] text-sm py-3">Career</p>
        <p className="text-[#444957] text-sm py-3">Contact Us</p>
      </div>
      <div>
        <div>
          <h2 className="text-[#0E2368] font-semibold text-md text-center">
            Social Links
          </h2>
          <div className="flex justify-evenly pt-3">
            <Image src="/insta.png" alt="insta" width={21} height={21} />
            <Image src="/x.png" alt="x" width={21} height={21} />
            <Image src="/meta.png" alt="facebook" width={21} height={21} />
          </div>
        </div>
        <p className="text-[#444957] text-sm mt-20">
          &copy; 2022 Food Truck Example
        </p>
      </div>
    </div>
  );
};

export default Footer;
