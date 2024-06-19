/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useState, useEffect } from "react";
import Inputtext from "@/components/inputtext/index";
import SelectSearch from "@/components/MutiSelectSearch";
import Button from "@/components/button"; // Importing the Button component
import { UserOutlined } from '@ant-design/icons';

const page = () => {
  const [name, setName] = useState<string>("");

  // Example validation function: Allow only alphabets and spaces
  const validateName = (value: string) => {
    return /^[A-Za-z\s]+$/.test(value);
  };

  const handleNameChange = (newValue: string) => {
    setName(newValue);
    console.log(newValue);
  };

  const handleBtnDelete = () => {
    () => console.log("Item deleted!");
    setName("");
  };

  // Select Search
  const [selectOptions, setSelectOption] = useState("");
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

const handleSelectChange = (value:any) => {
setSelectOption(value)
}

  return (
    <div className="container p-5">
      <div className="card p-5">
        <div>
          <h1>Form</h1>
        </div>
        <div>
          <Inputtext
            label="Name"
            value={selectOptions}
            placeholder="Enter your name"
            onChange={(value)=>handleNameChange(value)}
            validate={validateName}
            required // Adding required prop
          />
        </div>
        <div>
          <SelectSearch
            label="Country"
            value={selectOptions}
            options={cities}
            optionLabel="name"
            optionValue="code"
            onChange={(value)=>handleSelectChange(value)}
            required
          />
        </div>
        <div>
        <Button color="#ff0000" textColor="#f8f8f8" icon={<UserOutlined />} onClick={handleBtnDelete} label="Click Me"/>
        </div>
      </div>
    </div>
  );
};

export default page;
