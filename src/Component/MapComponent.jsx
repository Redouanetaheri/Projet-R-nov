import React, { useState, useEffect } from "react";

const MapComponent = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Erreur de géolocalisation : ", error);
        }
      );
    } else {
      console.error("La géolocalisation n'est pas supportée par ce navigateur.");
    }
  }, []);

  return (
    <div>
      {location.lat && location.lng ? (
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5000!2d${location.lng}!3d${location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sfr!4v${Date.now()}`}
          width="100"
          height="100"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <p>Chargement de la carte...</p>
      )}
    </div>
  );
};

export default MapComponent;
