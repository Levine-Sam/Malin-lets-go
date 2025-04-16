import React from "react";

export default function Navbar() {
  return (
    <section className="px-10 py-6 bg-transparent border-b-[0.50px] border-neutral-500 overflow-hidden">
      <div className="flex justify-between items-center ">
        <div className="text-white ">Logo</div>
        <div className="flex gap-4">
          <div className="text-white">Home</div>
          <div className="text-white">About</div>
          <div className="text-white">Contact</div>
        </div>
      </div>
    </section>
  );
}
