
import { useEffect, useState } from "react"
import PasswordCopyboard from "../components/PasswordCopyboard"
import PasswordSettings from "../components/PasswordSettings"

const Home = () => {
  const [ rangeValue, setRangeValue ] = useState(0)
  return (
    <div className="h-screen font-body bg-[#18171F] overflow-hidden text-jetBrains font-bold flex flex-col justify-start items-center pt-[64px] md:pt-[133px] xl:pt-[150px]">
      <h1 className="text-[#817D92] text-[16px] md:text-[24px] xl:text-[28px]">
        Password Generator
      </h1>
      <section>
        <PasswordCopyboard />
      </section>
      <section>
        <PasswordSettings rangeValue={rangeValue} setRangeValue={setRangeValue} />
      </section>
    </div>
  )
}

export default Home
