import React from "react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  price: string;
  host: string;
  image: string;
  hostImage: string;
}

export default function EventCard({
  title,
  date,
  location,
  price,
  host,
  image,
  hostImage,
}: EventCardProps) {
  return (
    <section>
      <div className="w-[640px] bg-gray-200/10 rounded-lg inline-flex justify-start items-start overflow-hidden">
        <div
          data-black-overlay="true"
          data-shape="square"
          data-size="md"
          className="w-48 flex justify-center items-center overflow-hidden"
        >
          <div
            data-number="2"
            data-type="eventPoster"
            className="w-48 h-48 relative"
          >
            <img className="w-48 h-48 left-0 top-0 absolute" src={image} />
          </div>
        </div>
        <div className="flex-1 self-stretch px-4 py-2 inline-flex flex-col justify-between items-start">
          <div className="self-stretch justify-start text-white text-neutral-0 text-xl font-medium font-['Poppins'] leading-loose tracking-tight">
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
                <svg
                  className="h-6 w-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM5 8V6h14v2H5zm2 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                </svg>
              </div>
            </div>
            <div className="flex-1 justify-start text-neutral-0 text-white text-base font-normal font-['Poppins'] leading-normal tracking-tight">
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
            <div className="flex-1 justify-start text-neutral-0 text-white text-base font-normal font-['Poppins'] leading-normal tracking-tight">
              {location}
            </div>
          </div>
          <div className="inline-flex justify-start items-center gap-2">
            <div
              data-size="16px"
              className="w-4 h-4 flex justify-center items-center"
            >
              <div
                data-color="white"
                data-type="pricetag"
                className="w-4 h-4 relative overflow-hidden"
              >
                <div className="w-3.5 h-3.5 left-[1.33px] top-[1.33px] absolute bg-neutral-0" />
              </div>
            </div>
            <div className="justify-start text-neutral-0 text-white text-base font-normal font-['Poppins'] leading-normal tracking-tight">
              {price}
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
                  src={hostImage}
                />
              </div>
            </div>
            <div className="justify-start text-neutral-0 text-white text-base font-normal font-['Poppins'] leading-normal tracking-tight">
              {host}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
