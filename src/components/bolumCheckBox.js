import React, { useEffect, useState } from "react";
import { Select, Space } from "antd";

const BolumCheckBox = ({ setSelectedBolums }) => {
  const options = [
    { label: "Acil Tıp", value: "Acil Tıp" },
    { label: "Aile Hekimliği", value: "Aile Hekimliği" },
    {
      label: "Anesteziyoloji ve Reanimasyon",
      value: "Anesteziyoloji ve Reanimasyon",
    },
    { label: "Adli Tıp", value: "Adli Tıp" },
    { label: "Anatomi", value: "Anatomi" },
    {
      label: "Beyin ve Sinir Cerrahisi",
      value: "Beyin ve Sinir Cerrahisi",
    },
    { label: "Çocuk Cerrahisi", value: "Çocuk Cerrahisi" },
    {
      label: "Çocuk Sağlığı ve Hastalıkları",
      value: "Çocuk Sağlığı ve Hastalıkları",
    },
    {
      label: "Çocuk ve Ergen Ruh Sağlığı ve Hastalıkları",
      value: "Çocuk ve Ergen Ruh Sağlığı ve Hastalıkları",
    },
    {
      label: "Deri ve Zührevi Hastalıkları",
      value: "Deri ve Zührevi Hastalıkları",
    },
    {
      label: "Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji",
      value: "Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji",
    },
    {
      label: "Fiziksel Tıp ve Rehabilitasyon",
      value: "Fiziksel Tıp ve Rehabilitasyon",
    },
    { label: "Fizyoloji", value: "Fizyoloji" },
    { label: "Genel Cerrahi", value: "Genel Cerrahi" },
    { label: "Göğüs Cerrahisi", value: "Göğüs Cerrahisi" },
    { label: "Göğüs Hastalıkları", value: "Göğüs Hastalıkları" },
    { label: "Göz Hastalıkları", value: "Göz Hastalıkları" },
    { label: "Halk Sağlığı", value: "Halk Sağlığı" },
    {
      label: "Histoloji ve Embriyoloji",
      value: "Histoloji ve Embriyoloji",
    },
    { label: "İç Hastalıkları", value: "İç Hastalıkları" },
    {
      label: "Kadın Hastalıkları ve Doğum",
      value: "Kadın Hastalıkları ve Doğum",
    },
    {
      label: "Kalp ve Damar Cerrahisi",
      value: "Kalp ve Damar Cerrahisi",
    },
    { label: "Kardiyoloji", value: "Kardiyoloji" },
    {
      label: "Kulak Burun Boğaz Hastalıkları",
      value: "Kulak Burun Boğaz Hastalıkları",
    },
    { label: "Nöroloji", value: "Nöroloji" },
    { label: "Nükleer Tıp", value: "Nükleer Tıp" },
    {
      label: "Ortopedi ve Travmatoloji",
      value: "Ortopedi ve Travmatoloji",
    },
    {
      label: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
      value: "Plastik, Rekonstrüktif ve Estetik Cerrahi",
    },
    { label: "Radyasyon Onkolojisi", value: "Radyasyon Onkolojisi" },
    { label: "Radyoloji", value: "Radyoloji" },
    {
      label: "Ruh Sağlığı ve Hastalıkları",
      value: "Ruh Sağlığı ve Hastalıkları",
    },
    { label: "Spor Hekimliği", value: "Spor Hekimliği" },
    {
      label: "Sualtı Hekimliği ve Hiperbarik Tıp",
      value: "Sualtı Hekimliği ve Hiperbarik Tıp",
    },
    { label: "Tıbbi Biyokimya", value: "Tıbbi Biyokimya" },
    { label: "Tıbbi Farmakoloji", value: "Tıbbi Farmakoloji" },
    { label: "Tıbbi Genetik", value: "Tıbbi Genetik" },
    { label: "Tıbbi Mikrobiyoloji", value: "Tıbbi Mikrobiyoloji" },
    { label: "Tıbbi Patoloji", value: "Tıbbi Patoloji" },
    { label: "Üroloji", value: "Üroloji" },
  ];

  const defaultBolums = [
    "Acil Tıp",
    "Aile Hekimliği",
    "Anesteziyoloji ve Reanimasyon",
    "Adli Tıp",
    "Anatomi",
    "Beyin ve Sinir Cerrahisi",
    "Çocuk Cerrahisi",
    "Çocuk Sağlığı ve Hastalıkları",
    "Çocuk ve Ergen Ruh Sağlığı ve Hastalıkları",
    "Deri ve Zührevi Hastalıkları",
    "Enfeksiyon Hastalıkları ve Klinik Mikrobiyoloji",
    "Fiziksel Tıp ve Rehabilitasyon",
    "Fizyoloji",
    "Genel Cerrahi",
    "Göğüs Cerrahisi",
    "Göğüs Hastalıkları",
    "Göz Hastalıkları",
    "Halk Sağlığı",
    "Histoloji ve Embriyoloji",
    "İç Hastalıkları",
    "Kadın Hastalıkları ve Doğum",
    "Kalp ve Damar Cerrahisi",
    "Kardiyoloji",
    "Kulak Burun Boğaz Hastalıkları",
    "Nöroloji",
    "Nükleer Tıp",
    "Ortopedi ve Travmatoloji",
    "Plastik, Rekonstrüktif ve Estetik Cerrahi",
    "Radyasyon Onkolojisi",
    "Radyoloji",
    "Ruh Sağlığı ve Hastalıkları",
    "Spor Hekimliği",
    "Sualtı Hekimliği ve Hiperbarik Tıp",
    "Tıbbi Biyokimya",
    "Tıbbi Farmakoloji",
    "Tıbbi Genetik",
    "Tıbbi Mikrobiyoloji",
    "Tıbbi Patoloji",
    "Üroloji",
  ];

  useEffect(() => {
    setSelectedBolums(defaultBolums);
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
        defaultValue={defaultBolums}
        onChange={(value) => {
          setSelectedBolums(value);
        }}
        options={options}
      />
    </Space>
  );
};
export default BolumCheckBox;
