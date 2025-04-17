import React from "react";
import EventCard from "../components/ui/EventCard";

export default function TestScreen() {
  return (
    <div className="h-screen w-screen bg-[#333333]">
      <EventCard
        title="Event Name Placeholder"
        image="Event Image Placeholder"
        date="Event Date Placeholder"
        location="Event Location Placeholder"
        price="Event Price Placeholder"
        host="Event Host Placeholder"
        hostImage="Event Host Image Placeholder"
      />
    </div>
  );
}
