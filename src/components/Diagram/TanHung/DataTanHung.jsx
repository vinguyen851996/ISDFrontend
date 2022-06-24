import React from "react";
import "./tanHung.css";

export default function Data(props) {
  const { xPosition, yPosition, name, square, status, width, height } = props;
  const dataStyle = {
    position: "absolute",
    left: xPosition,
    top: yPosition,
    width: width,
    height: height,
  };
  return (
    <div className="test__item">
      <div
        className={`pie-under-${status}`}
        style={dataStyle}
        // onClick={() => {
        //   setOpenModal(true);
        // }}
      >
        <div className="data__hover__tanhung">
          <p> {name} </p>
          <p> {square} </p>
        </div>
      </div>
    </div>
  );
}
