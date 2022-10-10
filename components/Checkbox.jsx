import React,{useState} from 'react'

const Checkbox = () => {
  const [isChecked,setIsChecked] = useState(false)
  return (
    <div className="flex flex-row-reverse pt-[16px]">
        <div className="text-[#E6E5EA] text-[16px] md:text-[18px] leading-[20px]">
            <label>Include uppercase letters</label>
        </div>
        <div className="pr-[16px]">
            <input
             className="flex items-center justify-center" 
             type="checkbox" 
             checked={isChecked}
             onChange={() => setIsChecked((prev) => !prev)}
              />
        </div>
    </div>
  )
}

export default Checkbox