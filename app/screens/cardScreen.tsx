import React, { useState, useEffect } from "react";

export default function CardScreen() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this runs only on mount and unmount

  return (
    <div className=" h-screen w-screen bg-[#333333] flex justify-center items-center">
      <div className="w-[800px] h-[800px] flex flex-col justify-start items-start gap-16">
        <h2 className="w-[800px] justify-start text-white text-3xl font-semibold font-['Poppins'] leading-[48px] tracking-tight">
          Create Event
        </h2>
        <div className=" w-[800px] h-96 relative rounded-3xl overflow-hidden">
          <img
            src="/466cf18032a8283b11ce3aa2969ac97a.jpeg"
            alt="wrapper"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 px-4 py-1 bg-black/50 rounded-3xl inline-flex justify-start items-center gap-2">
            <div className="text-center justify-start text-white text-sm font-normal font-['Poppins'] leading-normal">
              Change Cover Image
            </div>
            <div
              data-size="36px"
              className="w-9 h-9 flex justify-center items-center"
            >
              <div
                data-color="white"
                data-type="image 1"
                className="w-9 h-9 relative overflow-hidden"
              >
                <div className="w-7 h-7 left-[3px] top-[3px] absolute bg-neutral-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
