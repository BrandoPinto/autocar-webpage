import React from "react";

const WhatsAppButton = () => {
  const phoneNumber = "51941035240";
  const message = "¡Hola! Estoy interesado en más información.";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <div
        className="tooltip"
        style={{
          position: "absolute",
          bottom: "70px",
          right: "50%",
          transform: "translateX(50%)",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          color: "#fff",
          padding: "5px 10px",
          borderRadius: "5px",
          fontSize: "14px",
          opacity: 0,
          visibility: "hidden",
          transition: "opacity 0.3s, visibility 0.3s",
        }}
      >
        ¿Desea más información?
      </div>
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-button"
        style={{
          backgroundColor: "#25D366",
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          animation: "heartbeat 1.5s infinite",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseEnter={(e) => {
          const tooltip = e.currentTarget.previousSibling;
          tooltip.style.opacity = "1";
          tooltip.style.visibility = "visible";
        }}
        onMouseLeave={(e) => {
          const tooltip = e.currentTarget.previousSibling;
          tooltip.style.opacity = "0";
          tooltip.style.visibility = "hidden";
        }}
      >
        <i
          className="bi bi-whatsapp"
          style={{
            fontSize: "30px",
            color: "white",
          }}
        ></i>
      </a>
    </div>
  );
};

export default WhatsAppButton;
