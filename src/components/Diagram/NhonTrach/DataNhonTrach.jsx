import React from "react";

export default function DataNhonTrach(props) {
  const { xPosition, yPosition, name, square, width, height, status } = props;
  const dataStyle = {
    position: "absolute",
    left: xPosition,
    top: yPosition,
    width: width,
    height: height,
  };
  return (
    <div
      className={`pie-under-${status}`}
      // onClick={() => {
      //   setOpenModal(true);
      // }}
      style={dataStyle}
    >
      <div className="data__hover">
        <p> {name} </p>
        <p> {square} </p>
      </div>
    </div>
  );
}
