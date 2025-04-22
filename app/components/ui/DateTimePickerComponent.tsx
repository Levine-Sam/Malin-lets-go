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
  label?: string;
  labelPlacement?: "outside" | "inside" | "outside-left";
  className?: string;
}

export default function DateTimePickerComponent({
  defaultValue,
  minValue,
  hideTimeZone,
  showMonthAndYearPickers,
  variant,
  label: _label,
  labelPlacement: _labelPlacement,
  className = "",
}: DateTimePickerProps) {
  const todayDate = today(getLocalTimeZone());
  const { locale } = useLocale();

  // Mark unused optional props as used to avoid linter warnings
  void _label;
  void _labelPlacement;

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

  const baseInputStyles =
    "bg-transparent border-none outline-none shadow-none text-neutral-200 text-right font-['Poppins']";

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Date Picker */}
      <DatePicker
        defaultValue={defaultValue}
        minValue={minValue}
        hideTimeZone={hideTimeZone}
        showMonthAndYearPickers={showMonthAndYearPickers}
        variant={variant}
        isDateUnavailable={isDateUnavailable}
        classNames={{
          base: "w-36 flex items-center bg-transparent border-none",
          input: `${baseInputStyles} placeholder-gray-500 truncate`,
          selectorButton: "p-2",
          selectorIcon: "w-5 h-5 text-white",
        }}
      />

      {/* Time Picker */}
      <TimeInput
        defaultValue={defaultValue}
        minValue={minValue}
        hideTimeZone={hideTimeZone}
        variant={variant}
        classNames={{
          base: "w-16 flex items-center bg-transparent border-none",
          segment: "text-neutral-200 font-['Poppins']",
        }}
      />
    </div>
  );
}
