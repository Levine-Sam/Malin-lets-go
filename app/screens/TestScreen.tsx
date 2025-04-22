import React from "react";
import EventTimeCard from "../components/admin/EventTimeCard";
import AutocompleteCard from "../components/admin/AutocompleteCard";
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

      <EventTimeCard />
      <AutocompleteCard />
    </div>
  );
}
