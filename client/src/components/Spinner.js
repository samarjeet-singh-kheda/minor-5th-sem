import React from "react";

const Spinner = () => {
  return (
    <div
      class="d-flex justify-content-center spinner"
      style={{ color: "white" }}
    >
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
