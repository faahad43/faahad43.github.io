import React, { useState, useEffect } from 'react'
import {IconMoonStars} from '@tabler/icons-react';
import {IconSun} from '@tabler/icons-react';
import { Link } from 'react-scroll';
import  menu  from "../../assets/humburger.png";


const navbar = ({sendDataToParent,themeMode}) => {
    const [theme, settheme] = useState(true);
    const [mobile, setMobile] = useState(window.innerWidth <= 890);
    const [verticalNav, setVerticalNav] = useState(false);

    useEffect(()=>{
        sendDataToParent(theme?'light':'dark');
    },[theme])

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth <= 890);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mobile]);
    useEffect(()=>{
        console.log('nav toggled: ',verticalNav)
    },[verticalNav])


    const instaLink ='https://www.instagram.com/faahad_43';
  return (
    
    <nav className='flex p-4 xs:mx-2 sm:ml-10 sm:mr-5 md:mx-12 lg:mx-20'>
        <div className='sm:w-[50%] xs:w-[70%]  flex gap-x-4 items-center'>
            <h2>Developed <span className={`${themeMode?'text-[#7FF79E]':'text-[#088129]'} font-medium xs:mr-0 mr-3`}>By</span> <span className={`cursor-pointer font-semibold ${themeMode?'text-[#24D2ED]':'text-[#12BED9]'} inline-block hover:scale-105 duration-100 ease`} onClick={()=>{window.open(instaLink,'_blank')}}>SFS</span></h2>
            <div className={`cursor-pointer ${themeMode?"hover:text-[#24D2ED]":'hover:text-[#12BED9]'} -ml-2`} onClick={()=>{settheme(!theme)}}>{theme ?<IconMoonStars/>: <IconSun/>}</div> 
        </div>
        <div className='xs:w-[30%] sm:w-[70%]'>
        {mobile === true ? (
        <div>
          <img onClick={()=>setVerticalNav(!verticalNav)} className="humburger cursor-pointer w-[2rem] absolute sm:right-8 xs:right-4" src={menu} />
        </div>
      ) : ''}
            <div className={`flex ${mobile?` ${verticalNav ? 'visible':'hidden'}  flex-col absolute ${themeMode?'bg-[#2f4e68e8]':'bg-[#457eac99]'} top-0 left-0  h-[100%] w-[80%] items-center pt-16 gap-y-8  z-10` : 'justify-end space-x-10  flex-row'}`}>
                <div className='cursor-pointer '>
                        <Link
                        to='home'
                        span={true}
                        smooth={true}
                        >
                        <div className={`animate-progress`} onClick={()=>setVerticalNav(!verticalNav)}>
                            <h2>Home</h2>
                            <div className={`w-[100%] h-[3px] rounded ${themeMode?'dark':'light'}`}></div>
                        </div>
                        </Link>
                    
                </div>
                <div className='cursor-pointer'>
                    <Link
                        to='about'
                        span={true}
                        smooth={true}
                        >
                        <div className='animate-progress'  onClick={()=>setVerticalNav(!verticalNav)}>
                            <h2>About</h2>
                            <div className={`w-[100%] h-[3px] rounded ${themeMode?'dark':'light'}`}></div>
                        </div>
                       
                    </Link>
                    
                </div>
                <div className='cursor-pointer'>
                    <Link
                        to='project'
                        span={true}
                        smooth={true}
                        >
                        <div className='animate-progress' onClick={()=>setVerticalNav(!verticalNav)}>
                            <h2>Projects</h2>
                            <div className={`w-[100%] h-[3px] rounded ${themeMode?'dark':'light'}`}></div>
                        </div>
                    </Link>
                    
                </div>
                <div className='cursor-pointer'>
                    <Link
                        to='testimonial'
                        span={true}
                        smooth={true}
                        >
                            <div className='animate-progress' onClick={()=>setVerticalNav(!verticalNav)}>
                                <h2>Testimonials</h2>
                                <div className={`w-[100%] h-[3px] rounded ${themeMode?'dark':'light'}`}></div>
                            </div> 
                    </Link>
                </div>
                <div className='cursor-pointer'>
                    <Link
                        to='contact'
                        span={true}
                        smooth={true}
                        >
                            <div className='animate-progress' onClick={()=>setVerticalNav(!verticalNav)}>
                                <h2>Contact</h2>
                                <div className={`w-[100%] h-[3px] rounded ${themeMode?'dark':'light'}`}></div>
                            </div>
                            
                    </Link>
                    
                    
                </div>
            </div>

        </div>
    </nav>
  )
}

export default navbar