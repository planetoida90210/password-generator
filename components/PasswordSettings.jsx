import React,{ useState } from 'react';


const PasswordSettings = () => {
    
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <div className="w-[343px] h-[423px] md:w-[540px] md:h-[528px] mt-4 md:mt-8 bg-[#24232C] rounded-md">
     <div className="flex justify-between pt-[21px] md:pt-[34px] px-[16px] md:px-[32px]">
        <h3 className="text-[#E6E5EA] text-[18px]">Character Length</h3>
        <p className="text-[24px] md:text-[32px] leading-4 md:leading-8 text-[#A4FFAF]">{rangeValue}</p>
     </div>
     <div className="pt-[23px] md:pt-[35px] w-full flex justify-center">
        <input
        min="0"
        max="20"
        type="range"
        className="w-[311px] md:w-[476px] appearance-none" />
     </div>
    </div>
  )
}

export default PasswordSettings