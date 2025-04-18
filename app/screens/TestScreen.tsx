import React from "react";
import EventCard from "../components/ui/EventCard";
import DateTimePickerComponent from "../components/ui/DateTimePickerComponent";

export default function TestScreen() {
  return (
    <div className="h-screen w-screen bg-[#333333]">
      {/* <div className="flex flex-col items-center justify-center h-full">
        <EventCard
          title="Event Name Placeholder"
          image="Event Image Placeholder"
          date="Event Date Placeholder"
          location="Event Location Placeholder"
          price="Event Price Placeholder"
          host="Event Host Placeholder"
          hostImage="Event Host Image Placeholder"
        />
      </div> */}
      <div className="flex flex-col items-center justify-center h-full bg-white">
        <h1 className="text-2xl font-bold">Select Date and Time</h1>
        <DateTimePickerComponent />
      </div>
    </div>
  );
}
