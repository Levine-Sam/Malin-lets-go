import React from "react";
import { FileText } from "lucide-react"; // Assuming you use lucide-react

// TODO: Replace with actual textarea/input
export default function AboutEventCard() {
  return (
    <div className="self-stretch p-4 bg-gray-200/10 rounded-3xl flex flex-col justify-center items-start gap-2">
      <div className="inline-flex justify-start items-center gap-2">
        <FileText className="w-5 h-5 text-white" />
        <div className="justify-start text-white text-base font-medium font-['Poppins'] leading-normal tracking-tight">
          About Event
        </div>
      </div>
      <div className="self-stretch h-20 justify-start text-gray-400 text-sm font-medium font-['Poppins'] leading-normal">
        What should attendees know about this event?
      </div>
    </div>
  );
}
