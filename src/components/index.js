import { useState } from "react";
import DonemCheckBox from "./donemCheckBox";
import CustomTable from "./table";
import BolumCheckBox from "./bolumCheckBox";
import HastaneCheckBox from "./hastaneCheckBox";
import PointInput from "./poıntInput";

const Components = () => {
  const [selectedBolums, setSelectedBolums] = useState([]);
  const [selectedDonems, setSelectedDonems] = useState([]);
  const [selectedHastanes, setSelectedHastanes] = useState([]);
  const [selectedPoints, setSelectedPoints] = useState([20, 80]);

  return (
    <>
      <BolumCheckBox setSelectedBolums={setSelectedBolums} />
      <DonemCheckBox setSelectedDonems={setSelectedDonems} />
      <HastaneCheckBox setSelectedHastanes={setSelectedHastanes} />
      <PointInput setSelectedPoints={setSelectedPoints} />
      <CustomTable
        selectedDonems={selectedDonems}
        selectedBolums={selectedBolums}
        selectedHastanes={selectedHastanes}
        selectedPoints={selectedPoints}
      />
    </>
  );
};

export default Components;
