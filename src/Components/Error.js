import React from "react";

function Error({ message }) {
  return (
    <div
      style={{
        width: "70%",
        padding: 3,
        marginBottom: 20,
        borderRadius: 4,

        textAlign: "center",
        color: "red",
        textTransform: "capitalize",
        fontWeight: 500,
      }}
    >
      {message}
    </div>
  );
}

export default Error;
