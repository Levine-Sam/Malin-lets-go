import React from "react";
import { Button } from "@heroui/react";

export default function CardScreen() {
  // Empty dependency array ensures this runs only on mount and unmount

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
          <div className="absolute bottom-4 right-4 px-4 py-1 bg-black/50 rounded-3xl inline-flex justify-start items-center gap-2 ">
            <Button className="text-center justify-start text-white text-sm font-normal font-['Poppins'] leading-normal bg-transparent">
              Change Cover Image
            </Button>
            {/*<div*/}
            {/*  data-size="36px"*/}
            {/*  className="w-9 h-9 flex justify-center items-center"*/}
            {/*>*/}
            <div className="w-9 h-9 relative overflow-hidden">
              <div className="w-7 h-7 left-[3px] top-[3px] absolute bg-neutral-0" />
              <img src="/icons/iconWrapper.svg" alt="photo" />
            </div>
            {/*</div>*/}
          </div>
        </div>
        <div className="self-stretch inline-flex flex-col items-start justify-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start">
            <div className="flex flex-row gap-2 items-center ">
              <img
                className="h-6 w-6"
                src="/icons/iconWrapper.svg"
                alt="icon"
              />
              <div className="text-neutral-300 text-base font-normal font-['Poppins'] leading-normal tracking-tight">
                Event Host Name Placeholder
              </div>
            </div>
            <div className="self-stretch text-neutral-100 text-5xl font-medium font-['Poppins'] leading-[72px] tracking-wide">
              Event Name
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
