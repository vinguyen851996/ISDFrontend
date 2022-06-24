import React from "react";
import { anphatData } from "../../../assets/data/anphatData";
import DataAnPhat from "./DataAnPhat";

export default function Test() {
  //   const nodeRef = useRef();

  //   useEffect(() => {
  //     const pos = testData[2].dot;
  //     setPosition({
  //       x: pos.x,
  //       y: pos.y,
  //     });
  //   }, []);

  //   console.log(testData[2].dot);

  return (
    <div className="anphat__diagram container">
      <div className="bg__image__anphat">
        <div className="row pie">
          {anphatData.map((item, index) => {
            return (
              <DataAnPhat
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
