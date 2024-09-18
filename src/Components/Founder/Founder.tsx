import React from "react";
// import Ellipse from "/src/assets/Ellipse.png";
import cheehoe from "/src/assets/cheehoe.png";
import skywee from "/src/assets/skywee.png";

function Founder() {
  return (
    <>
      <section className="bg-[url('/src/assets/world.png')] bg-cover bg-center h-[200vh] sm:h-auto relative mt-0">
        <div className="text-white text-center bg-[#000] h-full sm:h-auto bg-opacity-75 p-4 sm:p-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl text-[#6F00FF] font-bold pt-[3%]">
            THE FOUNDERS
          </h1>
          <p className="mt-3 sm:mt-5 text-sm sm:text-base lg:text-lg">
            We are dedicated to nurturing ambitious projects from inception to{" "}
            <br className="hidden sm:block" />
            launch, ensuring projects not only survive but excel.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center mt-5 sm:mt-[5%] gap-5 sm:gap-10">
            <img
              src={cheehoe}
              alt="Founder 1"
              className="w-[80%] sm:w-[40%] lg:w-[30%]"
            />
            <img
              src={skywee}
              alt="Founder 2"
              className="w-[80%] sm:w-[40%] lg:w-[30%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Founder;
