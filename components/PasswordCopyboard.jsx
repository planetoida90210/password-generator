import React,{ useState } from 'react'
import { DocumentDuplicateIcon } from '@heroicons/react/24/outline'

const PasswordCopyboard = () => {
  const [copied, setCopied] = useState(false)

  return (
    <div className="flex w-[343px] h-[64px] text-center md:w-[540px] md:h-[80px] bg-[#24232C] mt-4 md:mt-8 rounded-md">
        <input
         readOnly
         type="text"
         autoCapitalize="off"
         placeholder="P4$5W0rD!"
         className="flex-1 bg-inherit pl-5 md:pl-[32px] text-[#E6E5EA] outline-none rounded-md cursor-default"
        />
        <button className="pr-[16px] md:pr-[32px] xl:pr-[36px] text-[#A4FFAF] cursor-pointer">
            { copied
             ? (
                <span className="flex uppercase space-x-3 items-center justify-center text-[10px]">copied <DocumentDuplicateIcon className="ml-2 h-[17px] w-[17px] md:w-[21px] md:h-[21px] xl:w-[24px] xl:h-[24px]"/></span> 
             ) : (
                <DocumentDuplicateIcon className="h-[17px] w-[17px] md:w-[21px] md:h-[21px] xl:w-[24px] xl:h-[24px] hover:text-[#FFFFFF]"/>
             )     
             }
        </button>
    </div>
  )
}

export default PasswordCopyboard