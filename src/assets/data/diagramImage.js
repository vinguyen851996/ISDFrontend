import HoNaiDiagram from "components/Diagram/HoNai/HoNaiDiagram";
import NhonTrachDiagram from "../../components/Diagram/NhonTrach/NhonTrachDiagram";
import AnThanhDiagram from "components/Diagram/AnThanh/AnThanhDiagram";
import ZoneADiagram from "components/Diagram/TanHungZoneA/ZoneADiagram";
import TanHungDiagram from "components/Diagram/TanHung/TanHungDiagram";
import DeepCDiagram from "components/Diagram/DeepC/DeepCDiagram";

export const diagramImage = [
  {
    name: "Nhơn Trạch",
    component: <NhonTrachDiagram width={"1350px"} height={"400px"} />,
  },
  {
    name: "Hố Nai",
    width: "1200px",
    height: "90%",
    component: <HoNaiDiagram width={"1200px"} height={"90%"} />,
  },
  {
    name: "An Thanh",
    width: "1250px",
    height: "600px",
    component: <AnThanhDiagram width={"1250px"} height={"600px"} />,
  },
  {
    name: "Tân Hưng - Zone A",
    width: "700px",
    height: "700px",
    component: <ZoneADiagram width={"700px"} height={"700px"} />,
  },
  {
    name: "Tân Hưng - Zone B&C",
    width: "75%",
    height: "100%",
    component: <TanHungDiagram width={"75%"} height={"100%"} />,
  },
  // {
  //   name: "DeepC12",
  //   width: "950px",
  //   height: "auto",
  //   component: <DeepCDiagram />,
  // },
];
