import { Table } from "antd";
import React, { memo } from "react";
import output from "../data/output.json";
import debounce from "lodash.debounce";

import { useEffect, useState } from "react";
const CustomTable = ({
  selectedBolums,
  selectedHastanes,
  selectedDonems,
  selectedPoints,
}) => {
  const [filteredData, setFilteredData] = useState([]);

  const updateData = () => {
    const filtered = output.filter(
      (item) =>
        selectedBolums.includes(item.bolum) &&
        selectedHastanes.includes(item.hastane) &&
        selectedDonems.includes(item.donem) &&
        selectedPoints[0] <= item.edp &&
        selectedPoints[1] >= item.eyp
    );
    setFilteredData(filtered);
  };

  // Debounce işlemi için updateData fonksiyonunu 300ms gecikmeli olarak çalıştırıyoruz.
  const debouncedUpdateData = debounce(updateData, 0);

  useEffect(() => {
    // Değişiklik olduğunda debounced fonksiyonunu çağırıyoruz.
    debouncedUpdateData();

    // Cleanup: Debounce fonksiyonunu iptal ediyoruz.
    return () => {
      debouncedUpdateData.cancel();
    };
  }, [selectedBolums, selectedHastanes, selectedDonems, selectedPoints]);

  const columns = [
    {
      title: "Bölüm",
      dataIndex: "bolum",
      width: 350,
    },
    {
      title: "Hastane",
      dataIndex: "hastane",
      width: 350,
    },
    {
      title: "Dönem",
      dataIndex: "donem",
      width: 200,
    },
    {
      title: "Kontenjan",
      dataIndex: "kont",
      width: 100,
    },
    {
      title: "Yerleşen",
      dataIndex: "yerlesen",
      width: 100,
    },
    {
      title: "Boş Kontenjan",
      dataIndex: "bosKont",
      width: 140,
    },
    {
      title: "Min puan",
      dataIndex: "edp",
      width: 100,
      sorter: (a, b) => a.edp - b.edp,
    },
    {
      title: "Max puan",
      dataIndex: "eyp",
      width: 100,
      sorter: (a, b) => a.eyp - b.eyp,
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <Table
      style={{ padding: " 0 50px" }}
      columns={columns}
      dataSource={filteredData}
      onChange={onChange}
      pagination={{
        pageSize: 200, // Sayfa başına 200 satır göster
        showSizeChanger: true, // Kullanıcının sayfa başına satır sayısını değiştirmesine izin ver
      }}
    />
  );
};

export default memo(CustomTable);
