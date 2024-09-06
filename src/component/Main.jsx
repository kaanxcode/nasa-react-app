import React from "react";

export default function Main(props) {
  const { data } = props;
  return (
    <div className="ımgContainer">
      <img
        src={data?.hdurl}
        alt={data?.title || "bg-images"}
        className="bgImage"
      />
    </div>
  );
}
