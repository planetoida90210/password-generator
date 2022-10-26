import React,{useState, useEffect} from 'react'

const availableStrengths = [0, 1, 2, 3, 4];

const strengthCharacteristics = (strength) => {
  switch (strength) {
    case 1:
      return { title: 'Too Weak!', color: '#F64A4A' };
    case 2:
      if(rangeValue > 5) {
        setStrength(1)
      }
      return { title: 'weak', color: '#FB7C58' };
    case 3:
      return { title: 'medium', color: '#F8CD65' };
    case 4:
      return { title: 'strong', color: '#A4FFAF' };
    default:
      return { title: 'Too Weak!', color: '#F64A4A' };
  }
};

const Rectangle = ({ color }) => {
  const styles = color ? { backgroundColor: color } : { borderColor: 'E6E5EA', borderWidth: '2px' };

  return <span className="w-[10px] h-[28px]" style={styles}/>
};

const PasswordStrength = ({ strength, setStrength, rangeValue, options }) => {
  const [strengthColor, setStrengthColor] = useState(strength)

  useEffect(() => {
    setStrengthColor(strength);
  }, [strength]);


  return (
    <div className="w-[311px] h-[56px] md:w-[476px] md:h-[72px] bg-[#18171F] flex justify-between items-center p-[16px] md:px-[32px]">
        <div className="">
            <p className="text-[16px] md:text-[18px] text-[#817D92] uppercase">strength</p>
        </div>
        <div className="flex">
            <p className="uppercase text-[#E6E5EA] text-[18px] md:text-[24px] pr-[16px]">{strengthCharacteristics(strengthColor)?.title}</p>
            <div className="flex gap-[8px] items-center">
            {
              availableStrengths.map((level) => {
                if (level > 0) {
                  return (
                    <Rectangle 
                     key={level}
                     color={strengthColor >= level ? strengthCharacteristics(strengthColor)?.color : undefined}
                    />
                  )
                }
              })
            }
            </div>
        </div>
    </div>
  )
}

export default PasswordStrength