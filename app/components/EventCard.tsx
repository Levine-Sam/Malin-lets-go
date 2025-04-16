import React from "react";

interface EventCardProps {
  title: string;
  description: string;
  image: string;
  date: string;
  location: string;
  price: boolean;
  host: string;
}

//className="w-[640px] bg-gray-200/20 rounded-lg shadow-[0px_4px_24px_0px_rgba(202,202,202,0.20)] inline-flex justify-start items-start overflow-hidden">

export default function EventCard({
  title,
  description,
  image,
  date,
  location,
  price,
  host,
}: EventCardProps) {
  return (
    // <section className="self-stretch px-4 py-2 inline-flex flex-col justify-between items-start bg-[#595959] rounded-lg">
    <section className="w-[640px] bg-gray-200/10 rounded-lg shadow-[0px_4px_24px_0px_rgba(202,202,202,0.20)] inline-flex justify-start items-start overflow-hidden">
      <div className="flex-1 self-stretch px-4 py-2 inline-flex flex-col justify-between items-start">
        <div className="self-stretch justify-start text-neutral-0 text-xl font-medium font-poppins leading-loose tracking-tight">
          {title}
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-2">
          <div
            data-size="16px"
            className="w-4 h-4 flex justify-center items-center"
          >
            <div
              data-color="white"
              data-type="calendar"
              className="w-4 h-4 relative overflow-hidden"
            >
              <div className="w-3.5 h-3.5 left-[1.33px] top-[0.67px] absolute bg-neutral-0" />
            </div>
          </div>
          <div className="flex-1 justify-start text-neutral-0 text-base font-normal font-poppins leading-normal tracking-tight">
            {date}
          </div>
        </div>
        <div className="self-stretch inline-flex justify-start items-center gap-2">
          <div
            data-size="16px"
            className="w-4 h-4 flex justify-center items-center"
          >
            <div
              data-color="white"
              data-type="map-pin"
              className="w-4 h-4 relative overflow-hidden"
            >
              <div className="w-3.5 h-4 left-[1.33px] top-0 absolute bg-neutral-0" />
            </div>
          </div>
          <div className="flex-1 justify-start text-neutral-0 text-base font-normal font-poppins leading-normal tracking-tight">
            {location}
          </div>
        </div>
        <div className="inline-flex justify-start items-center gap-2">
          <div
            data-shape="square"
            data-size="16"
            className="w-4 h-4 relative rounded-sm overflow-hidden"
          >
            <div
              data-number="1"
              data-type="club"
              className="w-4 h-4 left-0 top-0 absolute bg-neutral-0 overflow-hidden"
            >
              <img
                className="w-4 h-4 left-0 top-0 absolute"
                src="https://placehold.co/16x16"
              />
            </div>
          </div>
          <div className="justify-start text-neutral-0 text-base font-normal font-poppins leading-normal tracking-tight">
            {host}
          </div>
          <div className="justify-start text-neutral-0 text-base font-normal font-poppins leading-normal tracking-tight">
            {price}
          </div>
          <div className="justify-start text-neutral-0 text-base font-normal font-poppins leading-normal tracking-tight">
            {description}
          </div>
          <div className="justify-start text-neutral-0 text-base font-normal font-poppins leading-normal tracking-tight">
            {image}
          </div>
        </div>
      </div>
    </section>
  );
}
