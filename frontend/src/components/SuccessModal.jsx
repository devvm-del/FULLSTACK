import "bootstrap/dist/css/bootstrap.min.css";

function SuccessModal({ show, message}) {
  if (!show) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{
        zIndex: 1050,
        backgroundColor: "rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="bg-white rounded-4 shadow-lg position-relative p-4 text-center"
        style={{
          width: "100%",
          maxWidth: "420px",
          animation: "fadeInScale 0.3s ease",
        }}
      >
        

        {/* Success Icon */}
        <div
          className="mx-auto mb-4 d-flex justify-content-center align-items-center"
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
            color: "white",
            fontSize: "38px",
            boxShadow: "0 10px 25px rgba(34,197,94,0.35)",
          }}
        >
          ✓
        </div>

        {/* Title */}
        <h4 className="fw-bold mb-2 text-dark">
          Success!
        </h4>

        {/* Message */}
        <p className="text-secondary mb-4">
          {message || "Operation completed successfully."}
        </p>

      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.9) translateY(10px);
            }
            to {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default SuccessModal;