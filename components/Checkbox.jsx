import React from 'react'

const Checkbox = () => {
  return (
    <div className="flex flex-row-reverse pt-[16px]">
        <div className="text-[#E6E5EA] text-[16px] md:text-[18px] leading-[20px]">
            <label>Include uppercase letters</label>
        </div>
        <div className="pr-[16px]">
            <input type="checkbox" checked="false" />
        </div>
    </div>
  )
}

export default Checkbox