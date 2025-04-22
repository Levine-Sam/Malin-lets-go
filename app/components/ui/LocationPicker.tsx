import React, { useState } from "react";
import GooglePlacesAutocomplete from "./GooglePlacesAutocomplete";

interface LocationPickerProps {
  apiKey: string;
  onLocationSelect?: (place: AutocompletePrediction) => void;
}

export default function LocationPicker({
  apiKey,
  onLocationSelect,
}: LocationPickerProps) {
  const [selectedPlace, setSelectedPlace] =
    useState<AutocompletePrediction | null>(null);

  const handlePlaceSelect = (place: AutocompletePrediction) => {
    setSelectedPlace(place);
    if (onLocationSelect) {
      onLocationSelect(place);
    }
  };

  return (
    <div className="p-4 bg-gray-200/10 rounded-3xl w-full">
      <div className="py-0.5 flex justify-start items-center gap-2 mb-2">
        <img src="/icons/location.svg" alt="location" />
        <h2 className="justify-start text-white text-base font-medium font-['Poppins'] leading-normal tracking-tight">
          Event Location
        </h2>
      </div>

      <GooglePlacesAutocomplete
        apiKey={apiKey}
        label="Location"
        placeholder="Enter event location"
        variant="bordered"
        color="primary"
        onPlaceSelect={handlePlaceSelect}
        className="w-full"
      />

      {selectedPlace && (
        <div className="mt-2 text-white">
          <p className="text-sm">Selected: {selectedPlace.description}</p>
        </div>
      )}
    </div>
  );
}
