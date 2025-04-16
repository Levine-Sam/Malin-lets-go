import Navbar from "../components/Navbar";
import EventCard from "../components/EventCard";
export default function Homepage() {
  return (
    <div className="h-screen w-screen bg-[#333333]">
      <section>
        <Navbar />
      </section>
      <section>
        <EventCard
          title="Event Name Placeholder"
          description="Event Description Placeholder"
          image="Event Image Placeholder"
          date="Event Date Placeholder"
          location="Event Location Placeholder"
          price={true}
          host="Event Host Placeholder"
        />
      </section>
    </div>
  );
}
