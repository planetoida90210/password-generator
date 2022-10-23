import React from 'react'

const PasswordStrength = () => {
  return (
    <div className="w-[311px] h-[56px] md:w-[476px] md:h-[72px] bg-[#18171F] flex justify-between items-center p-[16px] md:px-[32px]">
        <div className="">
            <p className="text-[16px] md:text-[18px] text-[#817D92] uppercase">strength</p>
        </div>
        <div className="flex">
            <p className="uppercase text-[#E6E5EA] text-[18px] md:text-[24px] pr-[16px]">medium</p>
            <div className="flex gap-[8px] items-center">
            <span className="w-[10px] h-[28px] border border-[#E6E5EA]" />
            <span className="w-[10px] h-[28px] border border-[#E6E5EA]" />
            <span className="w-[10px] h-[28px] border border-[#E6E5EA]" />
            <span className="w-[10px] h-[28px] border border-[#E6E5EA]" />   
            </div>
        </div>
    </div>
  )
}

export default PasswordStrength