import React from "react";

function Footer() {
  return (
    <>
      <section className="bg-black p-[10%] sm:h-auto">
        <div className="gap-[50px] pb-10 sm:gap-[100px] h-full flex flex-col sm:flex-row items-center justify-around p-4 sm:p-0">
          <p className="text-white text-center sm:text-left text-sm sm:text-base">
            Sky venture spearheads the Web3 revolution, driving innovation and,{" "}
            <br className="hidden sm:block" /> forging strategic partnerships to
            mold the future of technology. Join us{" "}
            <br className="hidden sm:block" /> as we build our legacy in the
            Web3 realm.
          </p>
          <div className="flex gap-[10px] sm:gap-[20px] text-white flex-col sm:flex-row text-center">
            <a href="">Terms & Conditions</a>
            <a href="">Privacy Policy</a>
          </div>
        </div>
        {/* <hr className="border-gray-600" /> */}
        <div className="text-center text-white bg-black p-4 sm:p-10">
          <p>Copyrights@skyventuresstudios 2024</p>
        </div>
      </section>
    </>
  );
}

export default Footer;
