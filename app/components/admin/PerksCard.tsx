import React from "react";
import { Heart, Gift, Pizza } from "lucide-react"; // Assuming you use lucide-react

// TODO: Add logic for selecting/managing perks
export default function PerksCard() {
  return (
    <div className="self-stretch p-4 bg-gray-200/10 rounded-3xl flex flex-col justify-start items-start gap-2">
      <div className="inline-flex justify-start items-center gap-2">
        <Heart className="w-5 h-5 text-white" />
        <div className="justify-start text-white text-base font-medium font-['Poppins'] leading-normal tracking-tight">
          Perks
        </div>
      </div>
      <div className="self-stretch inline-flex justify-start items-center gap-2 flex-wrap content-center">
        {/* Example Perks */}
        <div className="px-4 py-1 bg-fuchsia-500 rounded-[40px] flex justify-start items-center gap-2">
          <Gift className="w-5 h-5 text-white" />
          <div className="justify-start text-white text-sm font-normal font-['Poppins'] leading-normal">
            Prizes
          </div>
        </div>
        <div className="px-4 py-1 bg-white/10 rounded-[40px] flex justify-start items-center gap-2">
          <Pizza className="w-5 h-5 text-white" />
          <div className="justify-start text-white text-sm font-normal font-['Poppins'] leading-normal">
            Free Food
          </div>
        </div>
        {/* Add more placeholders or mapping logic here */}
      </div>
    </div>
  );
}
