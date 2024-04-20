import React  from 'react'
import { useNavigate } from 'react-router-dom';
import cat from '../../assets/cat.png'

const projectCard = ({name='Project Name',desc='',image, website,themeMode}) => {
  {desc==''?desc ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis provident temporibus?':desc}
  {image==''?image=cat:image}
  // const navigate = useNavigate();
  console.log({image},'image')
  const HandleClick = ()=>{
    window.open(website, '_blank');
  }
  return (
    <div className='justify-center flex cursor-pointer' onClick={()=>HandleClick()}>
      <div className='project-card w-[100%] h-[15rem] sm:h-[200px] lg:h-[270px] rounded-lg bg-cover bg-center  bg-slate-00 relative overflow-hidden '>
  
      <img className='w-[100%] h-[100%] absolute z-0 object-contain sm:object-fill' src={image} alt="" />
      <div className={`${themeMode?'bg-[#276838ab]':'bg-[#276838ab]'} text-[#fff] card-animation w-[100%] h-[100%] absolute  opacity-70 absolute top-[100%] backdrop-filter backdrop-blur-[100px] backdrop-brightness-100 drop-shadow-[400px] z-10 flex flex-col justify-center gap-4 items-center p-4`}>
        <h3 className=' font-semibold text-xl'>{name}</h3>
        <p className='text-center'>{desc}</p>
      </div>
    </div>
    </div>
   
  )
}

export default projectCard