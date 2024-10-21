import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '20px',
  overflow: 'auto',
};

const MapComponent = ({ formData }) => {
  console.log("dbrfvrgf:",formData);
  const center = {
    lat: formData?.lat || 0,  // Default values in case formData is not available
    lng: formData?.lng || 0,
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyCQin33Q3BjTG8mLyHhJPSRLpBwZpUxokw"
      onLoad={() => console.log("Google Maps script loaded successfully")}
      onError={(error) => console.error("Error loading Google Maps script:", error)}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
