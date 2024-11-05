import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center py-16 md:py-0 md:mt-[12em] md:flex-row md:justify-evenly bg-[#f7f8fb]">
      <Image
        src="/about.png"
        alt="about"
        width={384}
        height={468}
        className="w-3/4 md:w-auto hidden md:block"
      />
      <div className="text-box flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left mt-8 md:mt-0">
        <h1 className="font-semibold text-[#0E2368] text-4xl overflow-y-hidden">
          About Us
        </h1>
        <p className="text-[#444957] text-sm font-sans py-6 leading-5">
          Lorem Ipsum is simply dummy text of the printing and <br />
          typesetting industry. Lorem Ipsum has been the industry&apos;s <br />
          standard dummy text ever since the 1500s, when an unknown <br />
          printer took a galley of type and scrambled it to make a type <br />
          specimen book. It has survived not only five centuries.
        </p>
        <button
          type="submit"
          className="bg-[#E23744] px-4 py-2 text-white font-sans rounded-full text-sm font-semibold tracking-wider mt-4"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
