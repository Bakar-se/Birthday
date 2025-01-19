import React from "react";

const Card = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#073b4c]">
      <div className="relative w-[250px] h-[350px] cursor-pointer transform-style-3d perspective-[2500px] transition-transform duration-1000 hover:rotate-[5deg] hover:shadow-[inset_100px_20px_100px_rgba(0,0,0,0.2),_0_10px_100px_rgba(0,0,0,0.5)]">
        {/* Front of the card */}
        <div className="relative w-full h-full bg-white overflow-hidden origin-left shadow-[inset_100px_20px_100px_rgba(0,0,0,0.2),_30px_0_50px_rgba(0,0,0,0.4)] transition-transform duration-700 transform hover:rotate-y-[-160deg]">
          <h3 className="text-center text-lg mt-8 mx-8 bg-gradient-to-r from-[#f6d365] to-[#fda085] bg-clip-text text-transparent font-sans transition-opacity duration-300">
            HAPPY BIRTHDAY Love!
          </h3>
          {/* Balloons */}
          <div className="absolute w-full h-full">
            <div className="absolute w-[85px] h-[95px] bg-[#ef476f]/70 rounded-full left-[-10px] top-[50px] before:content-[''] before:absolute before:w-px before:h-[155px] before:bg-[#ffd166] before:top-[95px] before:left-[43px] after:content-[''] after:absolute after:border-x-transparent after:border-x-[7px] after:border-b-[10px] after:border-b-[#ef476f] after:top-[94px] after:left-[37px]"></div>
            <div className="absolute w-[85px] h-[95px] bg-[#06d6a0]/70 rounded-full left-[50px] top-[20px] before:content-[''] before:absolute before:w-px before:h-[155px] before:bg-[#ffd166] before:top-[95px] before:left-[43px] after:content-[''] after:absolute after:border-x-transparent after:border-x-[7px] after:border-b-[10px] after:border-b-[#06d6a0] after:top-[94px] after:left-[37px]"></div>
            <div className="absolute w-[85px] h-[95px] bg-[#ffd166]/70 rounded-full left-[110px] top-[50px] before:content-[''] before:absolute before:w-px before:h-[155px] before:bg-[#ffd166] before:top-[95px] before:left-[43px] after:content-[''] after:absolute after:border-x-transparent after:border-x-[7px] after:border-b-[10px] after:border-b-[#ffd166] after:top-[94px] after:left-[37px]"></div>
            <div className="absolute w-[85px] h-[95px] bg-[#118ab2]/70 rounded-full left-[170px] top-[20px] before:content-[''] before:absolute before:w-px before:h-[155px] before:bg-[#ffd166] before:top-[95px] before:left-[43px] after:content-[''] after:absolute after:border-x-transparent after:border-x-[7px] after:border-b-[10px] after:border-b-[#118ab2] after:top-[94px] after:left-[37px]"></div>
          </div>
        </div>

        {/* Inside of the card */}
        <div className="absolute w-full h-full bg-white z-[-1] top-0 shadow-[inset_100px_20px_100px_rgba(0,0,0,0.2)]">
          <h3 className="text-center mt-8 mx-8 font-sans text-gray-800 text-lg">
            HAPPY BIRTHDAY vodoo!
          </h3>
          <p className="font-[Brush_Script_MT] mx-10 mt-10 text-gray-800">
            Dear Friend,
          </p>
          <p className="font-[Brush_Script_MT] mx-10 text-gray-800">
            Happy birthday!! I hope your day is filled with lots of love and
            laughter! May all of your birthday wishes come true.
          </p>
          <p className="absolute left-[150px] top-[200px] text-gray-800">
            Pawan
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
