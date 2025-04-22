import React from "react";
import LocationPicker from "../ui/LocationPicker";
export default function AutocompleteCard() {
  return (
    <div>
      <div className="self-stretch p-4 bg-gray-200/10 rounded-3xl inline-flex flex-col justify-start items-start gap-2">
        <div className="inline-flex justify-start items-start gap-2 flex-col w-full">
          <div className="py-0.5 flex justify-start items-center gap-2">
            <img src="/icons/icon.svg" alt="close" />
            <h2 className="justify-start text-white text-base font-medium font-['Poppins'] leading-normal tracking-tight">
              Event Time
            </h2>
          </div>
          <LocationPicker
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
          />
        </div>
      </div>
    </div>
  );
}
