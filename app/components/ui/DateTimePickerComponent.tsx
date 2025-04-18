import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function DateTimePickerComponent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        sx={{
          // Target the root element of the Pickers outlined input
          "& .MuiPickersOutlinedInput-root": {
            // <--- Updated class name
            borderRadius: "20px", // Your desired radius
            // Ensure the nested fieldset also gets the radius
            "& .MuiPickersOutlinedInput-notchedOutline": {
              // <--- Updated class name
              borderRadius: "inherit", // Inherit from the root
            },
            // You might also want to ensure hover/focus states respect the radius:
            "&:hover .MuiPickersOutlinedInput-notchedOutline": {
              borderRadius: "inherit",
            },
            "&.Mui-focused .MuiPickersOutlinedInput-notchedOutline": {
              borderRadius: "inherit",
            },
          },
        }}
      />
    </LocalizationProvider>
  );
}
