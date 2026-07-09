import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  style = {},
  hoverStyle = {}
}) => {
  const [hover, setHover] = useState(false);

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${variant} ${className}`}
      style={{
        ...style,
        ...(hover ? hoverStyle : {})
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </button>
  );
};

export default Button;