import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mt-[12em] flex justify-evenly">
      <Image src="/about.png" alt="about" width={384} height={468} />
      <div className="text-box flex flex-col justify-center">
        <h1 className="font-semibold text-[#0E2368] text-4xl">About Us</h1>
        <p className="text-[#444957] text-sm font-sans py-6">
          Lorem Ipsum is simply dummy text of the printing and <br />{" "}
          typesetting industry. Lorem Ipsum has been the industry&apos;s <br />{" "}
          standard dummy text ever since the 1500s, when an unknown <br />{" "}
          printer took a galley of type and scrambled it to make a type <br />{" "}
          specimen book. t has survived not only five centuries.
        </p>
        <button
          type="submit"
          className="bg-[#E23744] w-[33%] p-2 text-white font-sans rounded-full text-sm font-bold tracking-wider"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default About;
