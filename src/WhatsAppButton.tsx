import React from "react";
import { Button } from "react-bootstrap";
import "../src/Styles/WhatsAppButton.css";

const WhatsAppButton: React.FC = () => {
  const phoneNumber: string = "03257048768";

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      className="whatsapp-btn btn btn-success bg-primary rounded-circle d-flex align-items-center justify-content-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
  );
};

export default WhatsAppButton;
