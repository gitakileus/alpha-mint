const Member = (props: any) => {
  return(
    <div className='group flex flex-col justify-center relative rounded-md cursor-pointer text-center z-10'>
      <div className='rounded-full overflow-hidden'>
        <img className='w-[270px] h-[270px] rounded-full object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125' alt = {props.image} src = {props.image}/>
      </div>
      <p className='text-[#BE50E5] font-["Poppins"] font-[500] text-[21px] mt-[12px]'>{props.role}</p>
      <p className='text-[#fff] font-["Poppins"] font-[500] text-[28px]'>{props.name}</p>
    </div>
  )
}

export default Member