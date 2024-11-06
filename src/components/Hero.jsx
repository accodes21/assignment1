import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row-reverse w-full">
      <div className="relative h-[500px] md:h-screen md:w-1/2">
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
          className="absolute top-auto right-auto md:top-0 md:right-0 z-10"
        />
        <button
          type="submit"
          className="absolute top-4 right-4 bg-transparent px-6 py-2 text-white border border-white font-sans font-semibold rounded-full text-sm tracking-widest z-20"
        >
          Get in Touch
        </button>
      </div>

      <div className="relative w-full md:w-1/2 px-6 py-12 md:px-20 md:py-40 flex flex-col items-center md:items-start text-center md:text-left">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={80}
          className="absolute top-4 left-6 md:left-20 hidden md:block"
        />
        <h1 className="text-[#0E2368] font-bold font-sans text-4xl md:text-5xl leading-tight overflow-y-hidden">
          Discover the <br />
          <span className="text-[#E23744]">Best</span> Food <br />
          and Drinks
        </h1>
        <p className="text-[#444957] text-sm font-sans py-6 md:py-8">
          Naturally made Healthcare Products for the <br />
          better care & support of your body.
        </p>
        <button
          type="submit"
          className="bg-[#E23744] px-8 py-3 text-white font-sans rounded-full text-sm font-bold tracking-wider"
        >
          Explore Now!
        </button>
      </div>
    </section>
  );
};

export default Hero;
