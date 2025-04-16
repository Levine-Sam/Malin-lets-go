import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  price: string;
  host: string;
  image: string;
}

export default function EventCard({
  title,
  date,
  location,
  price,
  host,
  image,
}: EventCardProps) {
  return (
    <div className="flex overflow-hidden rounded-lg bg-[#464646] text-white bg-gray-200/10 rounded-lg inline-flex justify-start items-start overflow-hidden">
      {/* Event Image */}
      <div className="w-[196px] h-[196px]">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Event Details */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Title */}
        <h3 className="text-3xl font-semibold leading-tight">{title}</h3>

        {/* Date */}
        <div className="flex items-center gap-4">
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2zm0 4h7v2H7v-2z" />
          </svg>
          <span className="text-xl">{date}</span>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4">
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
          <span className="text-xl">{location}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58s1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
          </svg>
          <span className="text-xl">{price}</span>
        </div>

        {/* Host */}
        <div className="flex items-center gap-4">
          <svg
            className="h-6 w-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
          </svg>
          <span className="text-xl">{host}</span>
        </div>
      </div>
    </div>
  );
}
