import React from "react";

const MapContainer = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.3663947963078!2d77.3771836745094!3d28.618778984706882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef5e2369b331%3A0x2d206ff025b772dc!2sRecenturesoft%20Infotech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1768231228438!5m2!1sen!2sin"
        className="w-full h-[400px]"
        style={{border: `0`}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapContainer;
