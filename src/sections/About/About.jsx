import React from 'react'
import html from '../../assets/technologies/html.svg'
import css from '../../assets/technologies/css.svg'
import js from '../../assets/technologies/javascript-1.svg'
import bootstrap from '../../assets/technologies/bootstrap.svg'
import tailwind from '../../assets/technologies/tailwindcss.svg'
import react from '../../assets/technologies/react.svg'
import node from '../../assets/technologies/nodejs.svg'
import mongo from '../../assets/technologies/mongodb.svg'
import python from '../../assets/technologies/python-5.svg'
import php from '../../assets/technologies/php-1.svg'
import c from '../../assets/technologies/c.svg'
import cplus from '../../assets/technologies/c-1.svg'

const About = ({themeMode}) => {
  const techLogoData = [
    html, 
    css, 
    js,
    bootstrap,
    tailwind,
    react,
    node,
    mongo,
    python,
    php,
    c,
    cplus,
  ]
  return (
    <div className={`mb-28 mb w-screen flex flex-col items-center xs:py-10 md:py-20 ${themeMode?'bg-[#1c507d33]':'bg-slate-50'} xs:w-[95%] xl:w-[90%] rounded-2xl self-center`} id='about'>
        <h2 className='text-4xl font-semibold mb-10' >About</h2>
        <div className='flex xs:flex-col  xl:flex-row '>
            <div className='flex-1 text-center'>
                <h3 className='text-2xl font-medium'>Skills</h3>
                <div className='flex xs:gap-x-5 lg:gap-x-10 gap-y-14 py-10 xs:px-7 lg:px-16 flex-wrap leading-10 items-center justify-center'>

                    {techLogoData.map(element => {
                       return <img className='sm:w-[65px] sm:h-[65px] xs:w-[45px] xs:h-[45px] ' src={element} alt="" />
                    })}
                    {/* <img src={html} alt="" /> */}
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <p className='overflow-wrap break-words xs:px-7 lg:px-0  xs:mt-5 lg:mt-0 lg:w-[65%] xs:text-center lg:text-left tracking-wide leading-7'>As a budding developer delving into the realms of MERN stack technology, I'm continuously honing my skills to create dynamic web solutions. While my journey in cybersecurity is yet to unfold, my passion to explore its complexities knows no bounds. With a fervent desire for innovation and a penchant for security, I'm driven to embrace new challenges and safeguard digital landscapes."</p>
            </div>
            
        </div>
    </div>
  )
}

export default About