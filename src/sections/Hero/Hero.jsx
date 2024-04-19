import React from 'react'
import Navbar from '../../components/Navbar/navbar'
import Button from '../../components/Button/button'
import HeroImg from '../../assets/Image1.jpg';
import Typewriter from 'typewriter-effect';
import {IconBrandLinkedin} from '@tabler/icons-react';
import {IconBrandBehance} from '@tabler/icons-react';
import {IconBrandGithub} from '@tabler/icons-react';
import {IconArrowNarrowDown} from '@tabler/icons-react';
import {IconMail} from '@tabler/icons-react';
import cv from '../../assets/Assignment2Daa.pdf';

const Hero = ({sendDataToGrandParent}) => {
    const linkedinUrl ='https://linkedin.com/in/syed-fahad-shah-441590244';
    const githubUrl = 'https://github.com/faahad43';
    const handleDownload = () => {
        // File URL
        const fileUrl = cv; // Replace with your file URL
    
        // Create an anchor element
        const anchor = document.createElement('a');
        anchor.href = fileUrl;
    
        // Set the download attribute and file name
        anchor.download = 'Resume_SyedFahadShah.pdf'; // Replace with your desired file name
    
        // Append the anchor to the body
        document.body.appendChild(anchor);
    
        // Click the anchor element to trigger the download
        anchor.click();
    
        // Remove the anchor from the body
        document.body.removeChild(anchor);
      };
    
      const handleDataFromChild = (data)=>{
                sendDataToGrandParent(data)
      }

  return (
    <div className='lg:h-screen w-screen flex flex-col pt-2' id='home'>
        <Navbar sendDataToParent={handleDataFromChild}/>
        <div className={`flex lg:px-6 pt-10 sm:pt-20 lg:pt-10 lg:h-full xs:gap-10 md:gap-16 xs:mb-20 flex-grow flex-col-reverse justify-center items-center text-center lg:text-left lg:flex-row`}>
            <div className='flex flex-col lg:w-[50%] h-max relative xs:top-[5%] lg:top-[15%]  lg:left-20 space-y-4 xl:mb-40'>
                <span className='font-medium text-xl'>Hi i'm </span>
                <h1 className='font-semibold text-[2.7rem] text-amber-500 font-quicksand'>
                    <Typewriter 
                    options={{
                        strings: ['Syed Fahad Shah', 'Creative Web Developer','Cyber Security Enthusiast'],
                        autoStart: true,
                        loop: true,
                    }}
                    />
                </h1>
                <h2 className='text-2xl font-semibold'>Full Stack Developer</h2>
                <p className='lg:w-[90%] xs:px-2 sm:px-6 md:px-14 lg:px-0'>Hi I am creative web developer based in Islamabad with a focus on innovation and user experience.</p>
                <Button label="Download CV" onClick={handleDownload}/>
                <div className='flex gap-x-2 xs:justify-center lg:justify-start pt-2'>
                    <IconBrandLinkedin className='hover:scale-110 cursor-pointer duration-100 ease-in-out hover:stroke-amber-600' color='#4c4c4c' size={27} stroke={2} onClick={()=>{window.open(linkedinUrl,'_blank')}}/>
                    <IconBrandGithub className='hover:scale-110 cursor-pointer duration-100 ease-in-out hover:stroke-amber-600' color='#4c4c4c' size={27} stroke={2} onClick={()=>{window.open(githubUrl,'_blank')}}/>
                    {/* <IconBrandBehance className='hover:scale-110 cursor-pointer duration-100 ease-in-out hover:stroke-amber-600' color='#4c4c4c' size={27} stroke={2}/> */}
                    <a href="mailto:fahadshah1060@gmail.com">
                    <IconMail className='hover:scale-110 cursor-pointer duration-100 ease-in-out hover:stroke-amber-600' color='#4c4c4c' size={27} stroke={2}/></a>
                </div>
                <div className='flex  items-center gap-x-3 lg:pt-20 lg:pl-0   mouse-scroll xs:hidden md:flex md:pl-16 md:pt-2'>
                    <div className='w-[25px] h-[45px] rounded-full border-2 border-gray-500 flex justify-center p-1'>
                        <div className='w-[5px] h-[10px] bg-gray-600 rounded relative'></div>
                    </div>
                    <div className='flex'>
                        <p>Scroll down</p>
                        <IconArrowNarrowDown className='stroke-gray-500'/>
                    </div>
                    
                </div>
                
            </div>
            <div className='flex justify-center lg:w-[50%]'>
                <div className='xs:w-[15rem] xs:h-[16rem] md:w-[21rem] md:h-[22rem] xl:mb-24 grayscale-0 hover:grayscale-0 duration-[3s] ease-in-out relative lg:top-[20%] lg:left-3 lef'>
                    <img className='w-[100%] h-[100%] hero-image object-cover border-8 hover:border-amber-500 duration-[3s] ease-in-out' src={HeroImg} alt="" />
                </div>
            </div>
        
        </div>
    </div>
  )
}

export default Hero