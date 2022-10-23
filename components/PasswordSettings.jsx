import React,{ useState } from 'react';
import Checkbox from './Checkbox';
import PasswordStrength from './PasswordStrength';
import RangeSlider from './RangeSlider';


const PasswordSettings = ({ rangeValue, setRangeValue, strength, setStrength, options, setOptions, checkboxOptions }) => {
    
  
  return (
    <div className="w-[343px] h-[423px] md:w-[540px] md:h-[528px] mt-4 md:mt-8 bg-[#24232C] rounded-md">
     <div className="flex justify-between pt-[21px] md:pt-[34px] px-[16px] md:px-[32px]">
        <h3 className="text-[#E6E5EA] text-[18px]">Character Length</h3>
        <p className="text-[24px] md:text-[32px] leading-4 md:leading-8 text-[#A4FFAF]">{rangeValue}</p>
     </div>
     <RangeSlider rangeValue={rangeValue} setRangeValue={setRangeValue} />
     <div className="flex flex-col items-start pt-[42px] w-full pl-[16px] md:pl-[32px]">
        {checkboxOptions.map((option) =>(
         <Checkbox
          key={option.title}
          option={option}
          isChecked={options[option.type]}
          onChange={() => setOptions({ ...options, [option.type]: !options[option.type] })}
          />
        ))}
     </div>
     <div className="w-full flex justify-center pt-[32px] md:pt-[31px]">
        <PasswordStrength strength={strength} setStrength={setStrength} rangeValue={rangeValue} />
     </div>
    </div>
  )
}

export default PasswordSettings