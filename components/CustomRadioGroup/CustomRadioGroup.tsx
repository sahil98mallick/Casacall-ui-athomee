/* eslint-disable react/jsx-key */
"use client"

import React, { useState } from 'react'

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface radioGroupList{
    radioList: any[];
    defaultValue: string;
    bgColor?: string;
}

export default function CustomRadioGroup({radioList,defaultValue,bgColor}:radioGroupList) {
    const [isCheck, setIsCheck]=useState(false)
    const handelChange=()=>{
        setIsCheck((data)=>!data)
    }
  return (

      <RadioGroup defaultValue={defaultValue} className='flex item-center'>
        {
            radioList.map((item,index)=>(
                <div className={`w-1/3 flex items-center space-x-2 relative py-1.5 px-2 md:px-1 bg-[${item.bgColor || '#E8FBDA'}] rounded-3xl ${isCheck && 'border border-solid border-gray-400'} border border-transparent hover:border-black hover:border`} key={index}>
                <RadioGroupItem value={item.value} id={`r${index+1}`} className='absolute left-0 top-0 w-full h-full appearance-none opacity-0' onChange={handelChange} checked={isCheck}/>
                <label htmlFor={`r${index+1}`} className='md:text-[12px]'>{item.label}</label>
            </div>
            ))
        }
           
            {/* <div className="flex items-center space-x-2 relative py-1.5 px-4 bg-[#E8FBDA] rounded-3xl">
                <RadioGroupItem value="comfortable" id="r2" className='absolute left-0 top-0 w-full h-full appearance-none opacity-0' />
                <label htmlFor="r2">60-Minute</label>
            </div>
            <div className="flex items-center space-x-2 relative py-1.5 px-4 bg-[#F5EFFD] rounded-3xl">
                <RadioGroupItem value="compact" id="r3" className='absolute left-0 top-0 w-full h-full appearance-none opacity-0' />
                <label htmlFor="r3">90-Minute</label>
            </div> */}
        </RadioGroup>
  )
}
