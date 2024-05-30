/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState, useEffect } from 'react'
import Inputtext from '@/components/inputtext/index'
const page = () => {
    const [name, setName] = useState<string>('');
  
  // Example validation function: Allow only alphabets and spaces
  const validateName = (value: string) => {
    return /^[A-Za-z\s]+$/.test(value);
  };

  const handleNameChange = (newValue: string) => {
    setName(newValue);
  };

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
    </div>
  );
}

export default page
