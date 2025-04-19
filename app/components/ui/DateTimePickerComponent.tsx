import * as React from "react";
import { DatePicker } from "@heroui/react";
import {
  getLocalTimeZone,
  isWeekend,
  today,
  type DateValue,
} from "@internationalized/date";
import { useLocale } from "@react-aria/i18n";
interface DatePickerProps {
  hideTimeZone: boolean;
  showMonthAndYearPickers: boolean;
  defaultValue: DateValue;
  label: string;
  variant: "bordered" | "flat" | "faded" | "underlined";
  labelPlacement: "outside" | "inside" | "outside-left";
  className?: string;
  // classNames?: {
  //   input?: string;
  //   label?: string;
  //   base?: string;
  //   selectorButton?: string;
  //   selectorIcon?: string;
  //   popoverContent?: string;
  //   calendar?: string;
  //   calendarContent?: string;
  //   timeInput?: string;
  //   timeInputLabel?: string;
  // };
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  minValue: DateValue;
}

export default function DateTimePickerComponent({
  hideTimeZone,
  showMonthAndYearPickers,
  defaultValue,
  label,
  variant,
  labelPlacement,
  className,
  minValue,
}: DatePickerProps) {
  const now = today(getLocalTimeZone());

  const disabledRanges = [
    [now, now.add({ days: 5 })],
    [now.add({ days: 14 }), now.add({ days: 16 })],
    [now.add({ days: 23 }), now.add({ days: 24 })],
  ];

  const { locale } = useLocale();

  const isDateUnavailable = (date: DateValue) =>
    isWeekend(date, locale) ||
    disabledRanges.some(
      (interval) =>
        date.compare(interval[0]) >= 0 && date.compare(interval[1]) <= 0
    );

  // Add a style tag to ensure white text in the date picker
  React.useEffect(() => {
    // Create a style element
    const style = document.createElement("style");
    // Add the CSS rules to make all text in the date picker white
    style.innerHTML = `
      .heroui-datepicker * {
        color: white !important;
      }
    `;
    // Append the style to the document head
    document.head.appendChild(style);

    // Clean up on unmount
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="heroui-datepicker">
      <DatePicker
        hideTimeZone={hideTimeZone}
        showMonthAndYearPickers={showMonthAndYearPickers}
        defaultValue={defaultValue}
        label={label}
        variant={variant}
        labelPlacement={labelPlacement}
        className={className}
        isDateUnavailable={isDateUnavailable}
        minValue={minValue}
      />
    </div>
  );
}
