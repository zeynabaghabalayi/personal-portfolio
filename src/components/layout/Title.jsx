import React from "react";

export const Title = ({ title }) => {
  return (
    <div className="w-100 text-center  d-flex justify-content-center">
      <h2 className="p-2 m-3 border-bottom">{title}</h2>
    </div>
  );
};
