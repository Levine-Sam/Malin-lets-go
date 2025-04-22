import React from "react";
import { Ticket as TicketIcon } from "lucide-react"; // Renamed to avoid conflict with potential React component named Ticket
import { Switch } from "@heroui/react"; // Assuming you use HeroUI switch

// TODO: Add logic for ticket price/toggle
export default function TicketCard() {
  return (
    <div className="self-stretch p-4 bg-gray-200/10 rounded-3xl inline-flex justify-between items-center">
      <div className="flex justify-start items-center gap-2">
        <TicketIcon className="w-5 h-5 text-white" />
        <div className="justify-start text-white text-base font-medium font-['Poppins'] leading-normal tracking-tight">
          Ticket
        </div>
      </div>
      <div className="flex justify-start items-center gap-4">
        <div className="justify-start text-white text-sm font-normal font-['Poppins'] leading-normal">
          Free
        </div>
        {/* Replace with HeroUI Switch or similar */}
        <Switch defaultSelected color="secondary" />
        {/* <div className="w-14 p-1 bg-white/10 rounded-[40px] flex justify-start items-center gap-1">
          <div className="w-6 h-6 bg-zinc-300 rounded-full" />
        </div> */}
      </div>
    </div>
  );
}
