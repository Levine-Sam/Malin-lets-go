// EventTimeCard.tsx

import React from "react";
import DateTimePickerComponent from "../ui/DateTimePickerComponent";
import { getLocalTimeZone, now } from "@internationalized/date";
import { Calendar } from "lucide-react"; // or your preferred SVG icon

export default function EventTimeCard() {
  const tz = getLocalTimeZone();
  const currentDateTime = now(tz);

  return (
    <div className="w-full p-4 bg-gray-200/10 rounded-3xl flex flex-col gap-2">
      {/* Header */}
      <div className="flex items-center gap-2">
        <Calendar className="w-5 h-5 text-white" />
        <h2 className="text-white text-base font-medium font-['Poppins']">
          Event Date & Time
        </h2>
      </div>

      {/* Start Row */}
      <div className="flex items-start justify-between">
        <span className="text-gray-400 font-medium font-['Poppins']">
          Start
        </span>
        <DateTimePickerComponent
          defaultValue={currentDateTime}
          minValue={currentDateTime}
          hideTimeZone={false}
          showMonthAndYearPickers={false}
          variant="bordered"
          label="" // label is handled externally
          labelPlacement="outside-left"
        />
      </div>

      {/* End Row */}
      <div className="flex items-start justify-between">
        <span className="text-gray-400 font-medium font-['Poppins']">End</span>
        <DateTimePickerComponent
          defaultValue={currentDateTime}
          minValue={currentDateTime}
          hideTimeZone={false}
          showMonthAndYearPickers={false}
          variant="bordered"
          label=""
          labelPlacement="outside-left"
        />
      </div>
    </div>
  );
}
