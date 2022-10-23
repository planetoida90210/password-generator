import React from 'react'

const Checkbox = ({option, onChange, isChecked}) => {
  
  return (
    <div className="flex flex-row-reverse pt-[16px]">
        <div className="text-[#E6E5EA] text-[16px] md:text-[18px] leading-[20px]">
            <label>{option.title}</label>
        </div>
        <div className="pr-[16px]">
            <input
             className="flex items-center justify-center" 
             type="checkbox" 
             checked={isChecked}
             onChange={onChange}
              />
        </div>
    </div>
  )
}

export default Checkbox