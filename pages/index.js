
import { useEffect, useState } from "react"

import PasswordCopyboard from "../components/PasswordCopyboard"
import PasswordSettings from "../components/PasswordSettings"

const checkboxOptions = [
  { type: 'upperCase', title: 'include uppercase letters' },
  { type: 'lowerCase', title: 'include lowercase letters' },
  { type: 'numbers', title: 'include numbers' },
  { type: 'symbols', title: 'include symbols' },
]

const Home = () => {
  const [ rangeValue, setRangeValue ] = useState(0);
  const [ strength, setStrength ] = useState(0);
  const [options, setOptions] = useState({ upperCase: false, lowerCase: false, numbers: false, symbols: false });

  return (
    <div className="h-screen font-body bg-[#18171F] overflow-hidden text-jetBrains font-bold flex flex-col justify-start items-center pt-[64px] md:pt-[133px] xl:pt-[150px]">
      <h1 className="text-[#817D92] text-[16px] md:text-[24px] xl:text-[28px]">
        Password Generator
      </h1>
      <section>
        <PasswordCopyboard />
      </section>
      <section>
        <PasswordSettings 
         rangeValue={rangeValue} 
         setRangeValue={setRangeValue}
         strength={strength}
         setStrength={setStrength}
         checkboxOptions={checkboxOptions}
         options={options}
         setOptions={setOptions} 
         />
      </section>
    </div>
  )
}

export default Home
