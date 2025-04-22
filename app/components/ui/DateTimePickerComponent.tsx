// DateTimePickerComponent.tsx

import * as React from "react";
import { DatePicker, TimeInput } from "@heroui/react";
import {
  getLocalTimeZone,
  isWeekend,
  today,
  type DateValue,
  type ZonedDateTime,
} from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";

interface DateTimePickerProps {
  defaultValue: ZonedDateTime;
  minValue: ZonedDateTime;
  hideTimeZone: boolean;
  showMonthAndYearPickers: boolean;
  variant: "bordered" | "flat" | "faded" | "underlined";
  label: string;
  labelPlacement: "outside" | "inside" | "outside-left";
  className?: string;
}

export default function DateTimePickerComponent({
  defaultValue,
  minValue,
  hideTimeZone,
  showMonthAndYearPickers,
  variant,
  label,
  labelPlacement,
  className = "",
}: DateTimePickerProps) {
  const todayDate = today(getLocalTimeZone());
  const { locale } = useLocale();

  const disabledRanges: [DateValue, DateValue][] = [
    [todayDate, todayDate.add({ days: 5 })],
    [todayDate.add({ days: 14 }), todayDate.add({ days: 16 })],
    [todayDate.add({ days: 23 }), todayDate.add({ days: 24 })],
  ];
  const isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      ([start, end]) => date.compare(start) >= 0 && date.compare(end) <= 0
    );

  return (
    <div className={`flex items-center w-full ${className}`}>
      {/* Date Picker */}
      <DatePicker
        defaultValue={defaultValue}
        minValue={minValue}
        hideTimeZone={hideTimeZone}
        showMonthAndYearPickers={showMonthAndYearPickers}
        label={label}
        variant={variant}
        labelPlacement={labelPlacement}
        isDateUnavailable={isDateUnavailable}
        classNames={{
          base: "rounded-md bg-gray-700 px-2 py-1",
          input:
            "text-white text-right font-['Poppins'] bg-transparent placeholder-gray-400",
          selectorButton: "p-2",
          selectorIcon: "w-5 h-5 text-white",
        }}
      />

      {/* Time Picker */}
      <TimeInput
        defaultValue={defaultValue}
        minValue={minValue}
        variant={variant}
        // we already used the external label, so leave this blank:
        label=""
        classNames={{
          base: "ml-2 rounded-md bg-gray-700 px-2 py-1",
          segment: "text-white font-['Poppins']",
        }}
      />
    </div>
  );
}
