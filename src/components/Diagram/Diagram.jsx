import React from "react";
import { diagramImage } from "assets/data/diagramImage";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Diagram() {
  const [diagram, setDiagram] = React.useState("");

  const handleChange = (event) => {
    setDiagram(event.target.value);
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Diagram</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={diagram}
            label="Diagram"
            onChange={handleChange}
          >
            {diagramImage.map((item, index) => (
              <MenuItem value={item.component} key={index}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <div
        className="diagram"
        style={{ marginTop: "20px", marginLeft: "50px" }}
      >
        {diagram}
      </div>
    </div>

    // <div>
    //   {/* <AnPhatDiagram /> */}
    //   <TanHungDiagram
    //     width={diagramImage[0].width}
    //     height={diagramImage[0].height}
    //   />
    //   {/* <NhonTrachDiagram /> */}
    //   {/* <HoNaiDiagram /> */}
    //   {/* <AnThanhDiagram /> */}
    //   {/* <ZoneADiagram /> */}
    //   {/* <DeepCDiagram /> */}
    // </div>
  );
}
