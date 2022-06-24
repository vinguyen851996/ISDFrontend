import React from "react";
import "./nhontrach.css";
import DataNhonTrach from "./DataNhonTrach";
import { nhonTrachData } from "../../../assets/data/nhonTrachData";

export default function NhonTrach(props) {
  const { width, height } = props;
  return (
    <div className="mt-5 ml-5">
      <div
        className="bg__image__nhontrach"
        style={{ width: width, height: height }}
      >
        <div className="row pie">
          {nhonTrachData.map((item, index) => {
            return (
              <DataNhonTrach
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
