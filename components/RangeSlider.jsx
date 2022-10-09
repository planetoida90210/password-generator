import React from 'react'

const RangeSlider = () => {
  
    const passwordLength = 3

    const bgSlider = (passwordLength * 100) / 20
  
    const setSliderBackground = () => (
      `linear-gradient(90deg, #A4FFAF ${bgSlider}%, #18171F ${bgSlider}%)`
    )

  return (
    <div className="pt-[23px] md:pt-[35px] w-full flex justify-center">
        <input
        min="0"
        max="20"
        type="range"
        onChange={(e) => ""}
        value={passwordLength}
        style={{background: setSliderBackground()}}
        className="w-[311px] md:w-[476px] h-[8px] appearance-none" /> 
     </div>
  )
}

export default RangeSlider