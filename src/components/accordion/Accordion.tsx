import React, { useRef, useState } from 'react'

interface AccordionProps {
  title: React.ReactNode
  content: React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [active, setActive] = useState(false)
  const [height, setHeight] = useState('0px')
  const [rotate, setRotate] = useState('transform duration-700 ease')

  const contentSpace = useRef(null)

  function toggleAccordion() {
    setActive((prevState) => !prevState)
    // @ts-ignore
    setHeight(active ? '0px' : `${contentSpace.current.scrollHeight * 2 + 30}px`)
    setRotate(active ? 'transform duration-700 ease' : 'transform duration-700 ease rotate-180')
  }

  return (
    <div className="flex flex-col">
      <button
        className="z-[1] my-[6px] min-h-[40px] md:min-h-[68px] rounded-[50px] px-4 md:pr-[13px] md:pl-[41px] box-border appearance-none cursor-pointer focus:outline-none flex items-center justify-between bg-gradient-to-b from-[#BA4EE1] to-[#661882] "
        onClick={toggleAccordion}
      >
        <p className="font-['Poppins'] font-[600] text-xl md:text-[27px] inline-block text-footnote light text-[#fff]">{title}</p>
        <img
          src={`/assets/images/plus.webp`}
          alt="plus icon"
          className={`${rotate} inline-block w-[42px] h-[42px]`}
        />
      </button>
      <div
        ref={contentSpace}
        style={{ height: `${height}` }}
        className="overflow-hidden duration-700 ease-in-out flex items-center pl-[41px]"
      > 
      {/* @ts-ignore */}
        <div className="text-[#fff] font-['Poppins'] font-[300] text-base md:text-[22px]"><div dangerouslySetInnerHTML={{__html: content}}/></div>
      </div>
    </div>
  )
}

export default Accordion