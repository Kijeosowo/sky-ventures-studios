import React from "react";
import logo from "/src/assets/logo.png";
import purplebg from "/src/assets/purplebackground.png";
import Airobot from "/src/assets/Airobot.png";

function Hero() {
  return (
    <>
      <section className="bg-[url('/src/assets/Herosection.png')] bg-cover bg-center h-[100vh]">
  <div className="flex justify-between py-4 px-4 sm:py-6 sm:px-6 lg:py-10 lg:px-10">
    <figure>
      <img src={logo} alt="Logo" className="w-[50%] sm:w-[70%]" />
    </figure>
    <div>
      <a
        href="#"
        className="bg-[#730EFA] text-white rounded-[50px] py-2 px-4 sm:py-2 sm:px-5">
        CONTACT
      </a>
    </div>
  </div>
</section>

<div className="relative w-full h-[80vh] sm:h-screen flex items-center justify-center mt-[-10%] sm:mt-[-15%] lg:mt-[-18%]">
  <div className="relative overflow-x-hidden">
    <img src={purplebg} alt="Background" className="w-full h-auto" />
    <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center text-white text-lg sm:text-xl font-bold w-full h-full">
      <li className="list-disc px-2">Sky Venture Labs</li>
      <li className="list-disc px-2">Sky Venture Studios</li>
      <li className="list-disc px-2">Cryptohunter News</li>
      <li className="list-disc px-2">Sky Venture Labs</li>
      <li className="list-disc px-2">Sky Venture Studios</li>
      <li className="list-disc px-2">Cryptohunter News</li>
    </div>
  </div>
</div>

<section className="bg-[url('/src/assets/world.png')] bg-cover bg-center h-[80vh] sm:h-[100vh] relative mt-[-10%] sm:mt-[-15%] lg:mt-[-18%]">
  <div className="h-full flex flex-col items-center justify-center font-bold pt-[20%] bg-gradient-to-b from-transparent to-[#000] bg-opacity-90">
    <h1 className="text-[#9A9FA4] text-4xl sm:text-5xl lg:text-7xl">SKY VENTURE</h1>
    <h1 className="uppercase text-white text-2xl sm:text-3xl lg:text-5xl text-center">
      One World, One Ecosystem," encapsulates <br /> our commitment to
      creating a unified <br /> platform for global innovation.
    </h1>
  </div>
</section>

<section className="flex flex-col sm:flex-row gap-[30px] justify-center mt-10 mb-10">
  <section className="flex justify-center">
    <div className="relative w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] group overflow-hidden bg-[url('/src/assets/Airobot.png')] bg-cover bg-center rounded-[20px]">
      <div className="top-[40%] left-[10%] absolute text-white">
        <h1 className="text-xl sm:text-3xl font-bold">SKY VENTURE <br /> LABS</h1>
        <br />
        <a
          href=""
          className="bg-[#730EFA] text-white rounded-[50px] py-2 px-4 sm:py-2 sm:px-5">
          Discover
        </a>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000] bg-opacity-90 
                 transform translate-y-full group-hover:translate-y-0 transition-transform 
                 duration-500 ease-in-out flex justify-center items-center rounded-[20px]">
        <p className="text-white text-lg font-bold">Hovered Text!</p>
      </div> */}
    </div>
  </section>

  <section className="flex justify-center">
    <div className="relative w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] group overflow-hidden bg-[url('/src/assets/branding.png')] bg-cover bg-center rounded-[20px]">
      <div className="top-[40%] left-[10%] absolute text-white">
        <h1 className="text-xl sm:text-3xl font-bold">SKY VENTURE <br /> STUDIOS</h1>
        <br />
        <a
          href=""
          className="bg-[#730EFA] text-white rounded-[50px] py-2 px-4 sm:py-2 sm:px-5">
          Discover
        </a>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-500 opacity-[0.5] 
                 transform translate-y-full group-hover:translate-y-0 transition-transform 
                 duration-500 ease-in-out flex justify-center items-center rounded-[20px]">
        <p className="text-white text-lg font-bold">Hovered Text!</p>
      </div> */}
    </div>
  </section>

  <section className="flex justify-center">
    <div className="relative w-[250px] h-[300px] sm:w-[300px] sm:h-[350px] group overflow-hidden bg-[url('/src/assets/meeting.png')] bg-cover bg-center rounded-[20px]">
      <div className="top-[40%] left-[10%] absolute text-white">
        <h1 className="text-xl sm:text-3xl font-bold">CRYPTOHUNTER. <br /> NEWS</h1>
        <br />
        <a
          href=""
          className="bg-[#730EFA] text-white rounded-[50px] py-2 px-4 sm:py-2 sm:px-5">
          Discover
        </a>
      </div>
      {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-500 opacity-[0.5] 
                 transform translate-y-full group-hover:translate-y-0 transition-transform 
                 duration-500 ease-in-out flex justify-center items-center rounded-[20px]">
        <p className="text-white text-lg font-bold">Hovered Text!</p>
      </div> */}
    </div>
  </section>
</section>

    </>
  );
}

export default Hero;
