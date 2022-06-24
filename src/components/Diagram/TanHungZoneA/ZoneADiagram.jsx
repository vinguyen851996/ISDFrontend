import React from "react";
import "./zonea.css";
import { zoneaData } from "../../../assets/data/zoneaData";
import DataZoneA from "./DataZoneA";
export default function ZoneADiagram(props) {
  const { width, height } = props;
  return (
    <div className="container ml-5">
      <div
        className="bg__image__zonea"
        style={{ width: width, height: height }}
      >
        <div className="row pie container ml-5">
          {zoneaData.map((item, index) => {
            return (
              <DataZoneA
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
