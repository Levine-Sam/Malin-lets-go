import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
import Link from "next/link";
export default function Homepage() {
  return (
    <div className="h-screen w-screen bg-[#333333]">
      <section>
        <Navbar />
      </section>
      <section className="container flex justify-center items-center">
        <div className="grid justify-items-start items-start">
          <div className="flex flex-row justify-items-start items-start">
            <h1 className="text-3xl font-bold text-white mt-8 mb-7">
              Homepage
            </h1>
          </div>
          <ul className="text-white mb-11.5 flex flex-row gap-12">
            <li>
              <Link href="/">upcoming events</Link>
            </li>
            <li>
              <Link href="/">past events</Link>
            </li>
          </ul>

          <div className="flex flex-col gap-6">
            <EventCard
              title="Event Name Placeholder"
              image="Event Image Placeholder"
              date="Event Date Placeholder"
              location="Event Location Placeholder"
              price="Event Price Placeholder"
              host="Event Host Placeholder"
            />
            <EventCard
              title="Event Name Placeholder"
              image="Event Image Placeholder"
              date="Event Date Placeholder"
              location="Event Location Placeholder"
              price="Event Price Placeholder"
              host="Event Host Placeholder"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
