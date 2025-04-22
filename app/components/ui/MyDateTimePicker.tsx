import { extendVariants, DatePicker } from "@heroui/react";

// Create a custom DatePicker with white text
const MyDateTimePicker = extendVariants(DatePicker, {
  variants: {
    // You need to include at least one variant property
    // even if you're not changing it
    color: {
      white: {
        base: "text-white",
        // Target the input slot to change the text color
        input: "text-white",
        // You may need to target other text elements as well
        label: "text-white",
        // Calendar text elements
        calendar: "text-white",
        // Day cells
        day: "text-white",
      },
      black: {
        base: "text-black",
        input: "text-black",
        label: "text-black",
        calendar: "text-black",
        day: "text-black",
      },
    },
  },
  defaultVariants: {
    // Set white as the default color variant
    color: "black",
  },
});

export default MyDateTimePicker;
