import React from "react";
import { MapPin } from "lucide-react"; // Assuming you use lucide-react

// TODO: Replace with actual input
export default function EventLocationCard() {
  return (
    <div className="self-stretch p-4 bg-gray-200/10 rounded-3xl flex flex-col justify-start items-start gap-2">
      <div className="inline-flex justify-start items-center gap-2">
        <MapPin className="w-5 h-5 text-white" />
        <div className="justify-start text-white text-base font-medium font-['Poppins'] leading-normal tracking-tight">
          Event Location
        </div>
      </div>
      <div className="justify-start text-gray-400 text-sm font-normal font-['Poppins'] leading-normal">
        Address or virtual link
      </div>
    </div>
  );
}
