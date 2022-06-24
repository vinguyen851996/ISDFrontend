import React from "react";
import "./hoNai.css";
import { hoNaiData } from "../../../assets/data/hoNaiData";
import HoNaiData from "./HoNaiData";

export default function HoNai(props) {
  const { width, height } = props;
  return (
    <div className="container">
      <div
        className="bg__image__honai"
        style={{ width: width, height: height }}
      >
        <div className="row pie">
          {hoNaiData.map((item, index) => {
            return (
              <HoNaiData
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
