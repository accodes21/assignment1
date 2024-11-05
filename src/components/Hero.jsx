import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="div-box">
      <div className="text-box px-20 py-40">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={80}
          className="top-4 absolute"
        />
        <h1 className="text-[#0E2368] font-bold font-sans text-5xl">
          Discover the <br /> <span className="text-[#E23744]">Best</span> Food{" "}
          <br /> and Drinks
        </h1>
        <p className="text-[#444957] text-sm font-sans py-8">
          Naturally made Healthcare Products for the <br /> better care &
          support of your body.
        </p>
        <button
          type="submit"
          className="bg-[#E23744] p-4 text-white font-sans rounded-full text-sm font-bold tracking-wider"
        >
          Explore Now!
        </button>
      </div>
      <div className="img-box h-auto">
        <Image
          src="/Rectangle 400.png"
          alt="pizza"
          width={635}
          height={704}
          className="absolute top-auto right-auto md:top-0 md:right-0"
        />
        <Image
          src="/Vector 1.png"
          alt="vector"
          width={652}
          height={740}
          className="absolute top-auto right-auto md:top-0 md:right-0"
        />
        <button
          type="submit"
          className="bg-transparent p-2 text-white border border-white absolute font-sans font-semibold rounded-full text-sm tracking-widest top-4 right-4"
        >
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default Hero;
