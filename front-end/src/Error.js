import React from "react";
import FlashMessage from "react-flash-message";
// import "./error.css";

function Error() {
  return (
    <div className="error-show">
      <FlashMessage duration={5000}>
        <strong>Please keep the name simple!</strong>
      </FlashMessage>
    </div>
  );
}

export default Error;