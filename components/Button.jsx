import React from 'react'

const Button = ({onClick, isDisabled}) => {
  return (
    <button 
    type="button"
    disabled={isDisabled}
    onClick={onClick}
    className="h-[56px] md:h-[65px] w-[311px] md:w-[476px] px-[32px] bg-[#A4FFAF] hover:bg-transparent hover:text-[#A4FFAF] hover:border-[#A4FFAF] hover:border-2 transition flex justify-center items-center uppercase tracking-wider text-[16px] md:text-[18px] cursor-pointer">
      Generate
    </button>
  )
}

export default Button