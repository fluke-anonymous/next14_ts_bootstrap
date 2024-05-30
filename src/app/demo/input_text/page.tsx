/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useState, useEffect } from 'react'
import Inputtext from '@/components/inputtext/index'
const page = () => {
    const [inputText, setInputText] = useState<string>('')
    const handleInput = (value:string) => {
        console.log(value)
        setInputText(value)
    }
    return (
        <div>
            <Inputtext value={inputText} label='input text' disabled={false} onChange={handleInput} placeholder="Please Enter inputtext"></Inputtext>
        </div>
    )
}

export default page
