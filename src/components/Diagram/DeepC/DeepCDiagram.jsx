import React from "react";
import "./deepc.css";
import { deepcData } from "../../../assets/data/deepcData";
import DataDeepC from "./DataDeepC";

export default function DeepCDiagram() {
  return (
    <div className="ml-5">
      <div className="bg__image__deepc" style={{ marginLeft: "250px" }}>
        <div className="row pie">
          {deepcData.map((item, index) => {
            return (
              <DataDeepC
                key={index}
                xPosition={item.dot.x}
                yPosition={item.dot.y}
                name={item.name}
                square={item.square}
                width={item.width}
                height={item.height}
                status={item.status}
              />
            );
          })}
        </div>
      </div>

      {/* {openModal ? <Modal setOpenModal={setOpenModal} /> : ""} */}
    </div>
  );
}
