import React from "react";
import DateTimePickerComponent from "../ui/DateTimePickerComponent";
import { getLocalTimeZone, today } from "@internationalized/date";

export default function EventTimeCard() {
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
          <div className="inline-flex justify-start items-start gap-2 w-full">
            <div className="py-0.5 flex justify-start items-center gap-2 w-full">
              <div className="flex flex-col gap-4 w-full">
                <div className="date-picker-container">
                  <DateTimePickerComponent
                    defaultValue={today(getLocalTimeZone())}
                    minValue={today(getLocalTimeZone())}
                    hideTimeZone={false}
                    showMonthAndYearPickers={false}
                    label="Start"
                    variant="bordered"
                    labelPlacement="outside-left"
                    color="primary"
                  />
                </div>
                <div className="date-picker-container">
                  <DateTimePickerComponent
                    defaultValue={today(getLocalTimeZone())}
                    minValue={today(getLocalTimeZone())}
                    hideTimeZone={false}
                    showMonthAndYearPickers={false}
                    label="End"
                    variant="bordered"
                    labelPlacement="outside-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .date-picker-container {
          width: 100%;
          display: flex;
        }
        .date-picker-container :global(.heroui-datepicker) {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .date-picker-container :global(.heroui-datepicker label) {
          color: #a0aec0;
          flex-shrink: 0;
        }
        .date-picker-container :global(.heroui-datepicker > div:last-child) {
          flex-grow: 1;
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
        }
        .date-picker-container :global(.heroui-datepicker input) {
          text-align: right;
        }
      `}</style>
    </div>
  );
}
