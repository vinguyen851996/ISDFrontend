import React from "react";
import "./anthanh.css";
import { anthanhData } from "../../../assets/data/anthanhData";
import DataAnThanh from "./DataAnThanh";

export default function AnThanh(props) {
  const { width, height } = props;
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg__image__anthanh"
        style={{ width: width, height: height }}
      >
        <div className="row pie">
          {anthanhData.map((item, index) => {
            return (
              <DataAnThanh
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
