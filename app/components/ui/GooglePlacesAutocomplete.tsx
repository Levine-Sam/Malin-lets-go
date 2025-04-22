import React, { useEffect, useState, useRef } from "react";
import { Autocomplete, AutocompleteItem } from "@heroui/react";
import type { Key } from "@react-types/shared";

// Google Maps type definitions
declare global {
  interface Window {
    google: {
      maps: {
        places: {
          AutocompleteService: new () => AutocompleteService;
          AutocompleteSessionToken: new () => AutocompleteSessionToken;
          PlacesServiceStatus: {
            OK: string;
            ZERO_RESULTS: string;
            OVER_QUERY_LIMIT: string;
            REQUEST_DENIED: string;
            INVALID_REQUEST: string;
            UNKNOWN_ERROR: string;
          };
        };
      };
    };
    initGooglePlacesAutocomplete: () => void;
  }

  interface AutocompletePrediction {
    place_id: string;
    description: string;
    structured_formatting?: {
      main_text: string;
      secondary_text: string;
    };
    types?: string[];
    terms?: Array<{
      offset: number;
      value: string;
    }>;
  }

  interface AutocompleteService {
    getPlacePredictions(
      request: {
        input: string;
        sessionToken?: AutocompleteSessionToken;
        componentRestrictions?: { country: string | string[] };
        bounds?: unknown;
        location?: unknown;
        offset?: number;
        origin?: unknown;
        radius?: number;
        types?: string[];
      },
      callback: (
        predictions: AutocompletePrediction[] | null,
        status: string
      ) => void
    ): void;
  }

  type AutocompleteSessionToken = unknown;
}

interface GooglePlacesAutocompleteProps {
  apiKey: string;
  placeholder?: string;
  label?: string;
  variant?: "flat" | "bordered" | "faded" | "underlined";
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger";
  onPlaceSelect?: (place: AutocompletePrediction) => void;
  className?: string;
}

interface Place {
  key: string;
  label: string;
  place_id: string;
  data: AutocompletePrediction;
}

export default function GooglePlacesAutocomplete({
  apiKey,
  placeholder = "Search for a location",
  onPlaceSelect,
  className,
}: GooglePlacesAutocompleteProps) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const autocompleteService = useRef<AutocompleteService | null>(null);
  const sessionToken = useRef<AutocompleteSessionToken | null>(null);

  // Initialize Google Places API
  useEffect(() => {
    // Skip if API is already loaded
    if (window.google?.maps?.places) {
      initPlacesService();
      return;
    }

    // Load Google Maps JavaScript API
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initGooglePlacesAutocomplete`;
    script.async = true;
    script.defer = true;

    // Define callback function for when API loads
    window.initGooglePlacesAutocomplete = () => {
      initPlacesService();
    };

    document.head.appendChild(script);

    return () => {
      // Clean up
      if (
        document.querySelector(
          `script[src^="https://maps.googleapis.com/maps/api/js?key=${apiKey}"]`
        )
      ) {
        document.head.removeChild(
          document.querySelector(
            `script[src^="https://maps.googleapis.com/maps/api/js?key=${apiKey}"]`
          ) as Node
        );
      }
      // Safe way to remove the global callback
      window.initGooglePlacesAutocomplete = () => {};
    };
  }, [apiKey]);

  // Initialize Places service
  const initPlacesService = () => {
    if (window.google?.maps?.places) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
      sessionToken.current =
        new window.google.maps.places.AutocompleteSessionToken();
    }
  };

  // Handle input change and fetch suggestions from Google Places
  const handleInputChange = (value: string) => {
    setInputValue(value);

    if (!value || value.length < 2 || !autocompleteService.current) {
      setPlaces([]);
      return;
    }

    setIsLoading(true);

    // Request predictions from Google Places
    autocompleteService.current.getPlacePredictions(
      {
        input: value,
        sessionToken: sessionToken.current || undefined,
      },
      (predictions: AutocompletePrediction[] | null, status: string) => {
        setIsLoading(false);

        if (
          status !== window.google.maps.places.PlacesServiceStatus.OK ||
          !predictions
        ) {
          setPlaces([]);
          return;
        }

        // Transform predictions to format needed by Autocomplete
        const transformedPlaces: Place[] = predictions.map(
          (prediction: AutocompletePrediction) => ({
            key: prediction.place_id,
            label: prediction.description,
            place_id: prediction.place_id,
            data: prediction,
          })
        );

        setPlaces(transformedPlaces);
      }
    );
  };

  // Handle selection change
  const handleSelectionChange = (key: Key | null) => {
    if (key === null) return;

    setSelectedKey(key as string);

    // Find the selected place
    const selectedPlace = places.find((place) => place.key === key);

    if (selectedPlace && onPlaceSelect) {
      onPlaceSelect(selectedPlace.data);

      // Create a new session token for the next search
      sessionToken.current =
        new window.google.maps.places.AutocompleteSessionToken();
    }
  };

  return (
    <Autocomplete
      label={
        <span className="text-white font-medium text-lg">Event Location</span>
      }
      variant="flat"
      description={
        <span className="text-zinc-400">Address or virtual link</span>
      }
      placeholder={placeholder}
      className={`bg-zinc-700 dark:bg-zinc-700 text-white/90 rounded-lg border-none p-4 ${
        className || ""
      }`}
      selectedKey={selectedKey}
      inputValue={inputValue}
      items={places}
      isLoading={isLoading}
      allowsCustomValue
      onSelectionChange={handleSelectionChange}
      onInputChange={handleInputChange}
      defaultItems={places}
      radius="lg"
      startContent={
        <svg
          aria-hidden="true"
          fill="none"
          focusable="false"
          height="1em"
          role="presentation"
          viewBox="0 0 24 24"
          width="1em"
          className="text-white/90 text-xl pointer-events-none flex-shrink-0"
        >
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
            fill="currentColor"
          />
        </svg>
      }
      listboxProps={{
        hideSelectedIcon: true,
        itemClasses: {
          base: [
            "rounded-md",
            "text-white/90",
            "transition-opacity",
            "data-[hover=true]:text-white",
            "data-[hover=true]:bg-zinc-600",
            "dark:data-[hover=true]:bg-zinc-600",
            "data-[selectable=true]:focus:bg-zinc-500",
            "data-[pressed=true]:opacity-70",
            "data-[focus-visible=true]:ring-zinc-500",
          ],
        },
        emptyContent: (
          <div className="text-zinc-400 px-2 py-1.5">
            {inputValue.length > 1
              ? "No locations found."
              : "Type to search..."}
          </div>
        ),
      }}
      popoverProps={{
        classNames: {
          base: "before:bg-zinc-800 dark:before:bg-zinc-800",
          content:
            "p-0 border-small border-divider bg-zinc-800 dark:bg-zinc-800",
        },
      }}
    >
      {(item) => (
        <AutocompleteItem
          key={item.key}
          textValue={item.label}
          className="capitalize"
        >
          {item.label}
        </AutocompleteItem>
      )}
    </Autocomplete>
  );
}
