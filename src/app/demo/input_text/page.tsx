/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState, useEffect } from 'react'
import Inputtext from '@/components/inputtext/index'
import Button from '@/components/button/index'; // Importing the Button component

const page = () => {
    const [name, setName] = useState<string>('');
  
  // Example validation function: Allow only alphabets and spaces
  const validateName = (value: string) => {
    return /^[A-Za-z\s]+$/.test(value);
  };

  const handleNameChange = (newValue: string) => {
    setName(newValue);
    console.log(newValue)
  };

  const handleBtnDelete = () => {
    () => console.log('Item deleted!')
    setName('')
  }

  return (
    <div>
      <h1>Form</h1>
      <Inputtext
        label="Name"
        value={name}
        placeholder="Enter your name"
        onChange={handleNameChange}
        validate={validateName}
        required // Adding required prop
      />
      <Button
        color="primary"
        textColor="light"
        label="Delete"
        onClick={()=>handleBtnDelete}
      />
    </div>
  );
}

export default page
