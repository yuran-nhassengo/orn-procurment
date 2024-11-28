import React from "react";

interface MapSectionProps {
  address: string;
  phone: string;
  email: string;
  mapSrc: string;
}

const MapSection: React.FC<MapSectionProps> = ({ address, phone, email, mapSrc }) => {
  return (
    <div className="bg-gray-100 shadow-md rounded-lg p-6">
      <iframe
        src={mapSrc}
        width="100%"
        height="350"
        className="rounded-lg shadow-md"
        allowFullScreen
        loading="lazy"
      ></iframe>
      <div className="mt-6 space-y-4">
        <p className="text-gray-700 font-medium">
          <strong>Endereço:</strong> {address}
        </p>
        <p className="text-gray-700 font-medium">
          <strong>Telefone:</strong>{" "}
          <a href={`tel:${phone}`} className="text-blue-600">
            {phone}
          </a>
        </p>
        <p className="text-gray-700 font-medium">
          <strong>Email:</strong>{" "}
          <a href={`mailto:${email}`} className="text-blue-600">
            {email}
          </a>
        </p>
      </div>
    </div>
  );
};

export default MapSection;
