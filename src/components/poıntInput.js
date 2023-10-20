import { Slider } from "antd";

const PointInput = ({ setSelectedPoints }) => {
  return (
    <Slider
      range
      defaultValue={[20, 80]}
      onChange={(value) => {
        setSelectedPoints(value);
      }}
    />
  );
};

export default PointInput;
