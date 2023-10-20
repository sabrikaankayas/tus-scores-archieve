import React, { useEffect, useState } from "react";
import { Select, Space } from "antd";

const DonemCheckBox = ({ setSelectedDonems }) => {
  const options = [
    {
      label: "Eylül 2022",
      value: "Eylül 2022",
    },
    {
      label: "Eylül 2022 (Y.Knt.)",

      value: "Eylül 2022 (Y.Knt.)",
    },
    {
      label: "Şubat 2022",
      value: "Şubat 2022",
    },
    {
      label: "Şubat 2022 (Y.Knt.)",
      value: "Şubat 2022 (Y.Knt.)",
    },
    {
      label: "Eylül 2021",
      value: "Eylül 2021",
    },
    {
      label: "Eylül 2021 (Y.Knt.)",
      value: "Eylül 2021 (Y.Knt.)",
    },
    {
      label: "Mart 2021",
      value: "Mart 2021",
    },
    {
      label: "Mart 2021 (Y.Knt.)",
      value: "Mart 2021 (Y.Knt.)",
    },
    {
      label: "Ekim 2020",
      value: "Ekim 2020",
    },
    {
      label: "Ekim 2020 (Y.Knt.)",
      value: "Ekim 2020 (Y.Knt.)",
    },
    {
      label: "Şubat 2020",
      value: "Şubat 2020",
    },
    {
      label: "Şubat 2020 (Y.Knt.)",
      value: "Şubat 2020 (Y.Knt.)",
    },
  ];

  const defaultDonems = ["Eylül 2022", "Eylül 2022 (Y.Knt.)"];

  useEffect(() => {
    setSelectedDonems(defaultDonems);
  }, []);

  return (
    <Space
      style={{
        width: "100%",
      }}
      direction="vertical"
    >
      <Select
        mode="multiple"
        allowClear
        style={{
          width: "100%",
        }}
        placeholder="Please select"
        defaultValue={defaultDonems}
        onChange={(value) => {
          setSelectedDonems(value);
        }}
        options={options}
      />
    </Space>
  );
};
export default DonemCheckBox;
