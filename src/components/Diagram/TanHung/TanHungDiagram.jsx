import React, { useState } from "react";
import { tanHungData } from "../../../assets/data/tanHungData";
import DataTanHung from "./DataTanHung";
import BG from "../../../assets/img/05-tanhung-zoneBC.png";

export default function TanHungDiagram(props) {
  // const { width, height } = props;
  const { width, height } = props;
  return (
    <div className="container">
      <div
        className="bg__image__tanhung"
        style={{ width: width, height: height }}
      >
        <div className="row pie">
          {/* <img
            src={BG}
            alt="..."
            style={{
              width: "940px",
              height: height,
            }}
          /> */}
          {tanHungData.map((item, index) => {
            return (
              <DataTanHung
                key={index}
                xPosition={item.dot.x}
                yPosition={item.dot.y}
                name={item.name}
                square={item.square}
                status={item.status}
                width={item.width}
                height={item.height}
              />
            );
          })}
        </div>
      </div>
      {/* <button
        className="btn btn-danger"
        onClick={() => setChangeShape("square")}
      >
        Change Shape
      </button> */}
      {/* <select
        onChange={(event) => changeShape(event.target.value)}
        value={currentShape}
        style={{ width: "200px", textAlign: "center" }}
      >
        <option value="square">Square</option>
        <option value="pie">Pie </option>
      </select> */}
      {/* {openModal ? <Modal setOpenModal={setOpenModal} /> : ""} */}
    </div>
  );
}
