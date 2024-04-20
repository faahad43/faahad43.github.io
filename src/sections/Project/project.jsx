import React, { useState,useEffect } from 'react'
import ProjectCard from '../../components/projectCard/projectCard'
// import {ReactComponent as Img1} from '../../assets/insta.svg'
import Gym from '../../assets/ProjectAssest/gym.png'
import Industrial from '../../assets/ProjectAssest/industrial.png'
import Todo from '../../assets/ProjectAssest/Todo.jpg'
import Weather from '../../assets/ProjectAssest/weather.png'
import Flight from '../../assets/ProjectAssest/Flight.jpg'
import calender from '../../assets/ProjectAssest/calender.jpg'
import taskManager from '../../assets/ProjectAssest/taskManager.jpg'
import BrandPage from '../../assets/ProjectAssest/BrandPage.jpeg'
import nchd from '../../assets/ProjectAssest/nchd.jpg'
import Photography from '../../assets/ProjectAssest/Photography.jpeg'

const project = ({themeMode}) => {
    const [id, setID] = useState('all');
    const [projects, setProjects] = useState([]);

    const data = [
        {
            name: 'Gym Website',
            description:'A webiste where you can check for gym plans and connect by sending email.',
            img:Gym,
            type:'react',
            website:'https://frontend-gym-website-react-lwoa.vercel.app/'
        },
        {
            name: 'Industrial Performance',
            description:'A website for a company that help other idustries to grow their business.',
            img:Industrial,
            website:'https://scintillating-chaja-445eb4.netlify.app/',
            type:'html'

        },
        {
            name: 'TODO List',
            description:'Todo list to manage your daily routine task',
            img:Todo,
            type:'react',
            website:'https://to-do-list-react-phi-five.vercel.app/'
        },
        {
            name: 'Weather App',
            description:'A weather app that tells the live weather using weather api.',
            img:Weather,
            type:'html',
            website:'https://weather-app-ten-vert-78.vercel.app/'
        },
        {
            name: 'Nike Homepage',
            description:'A brandpage with the react framework',
            img:BrandPage,
            type:'react',
            website:'https://brand-page-seven.vercel.app/'
        },
        {
            name: 'Photography Website',
            description:'A portfolio website for a photographer where people can connect with him through email.',
            img:Photography,
            type:'html',
            website:'https://photography-portfolio-website-html-css-js.vercel.app/'
        },
        {
            name: 'Flight Managemen System',
            description:'Flight Management System In pythin that uses file handling to manage the data.\n This is desktop application',
            img:Flight,
            type:'python',
            website:'https://www.google.com/'
        },
        {
            name: 'Caldener',
            description:'Calender using HTML, CSS, & Javascript.',
            img:calender,
            type:'html',
            website:'https://caldener-html-css-js.vercel.app/'
        },
        {
            name: 'NCHD Homepage Redesign',
            description:'This is the redesign of NCHD homepage',
            img:nchd,
            type:'html',
            website:'https://nchd-homepage-resdeign.vercel.app/'
        },
        {
            name: 'Task Manager',
            description:'Task Manager that use local storage to manage your daily task.',
            img:taskManager,
            type:'html',
            website:'https://task-manager-self-three.vercel.app/'
        },
    ]

    useEffect(() => {
    
       const filteredProjects = data.map((item)=>{
          if(id == item.type){
              return(
                  <ProjectCard name={item.name} desc={item.description} website={item.website} image={item.img}/>
                  )
          }
          else if(id == 'all'){
              return(
                <ProjectCard name={item.name} desc={item.description} website={item.website} image={item.img}/>
                  )
          }  
          })

          console.log(filteredProjects);
          setProjects(filteredProjects)

      }, [id])

      

      const handleProjects = (id)=>{
        setID(id)
      }
  return (
<div className='w-screen mb-20 flex flex-col items-center' id='project'>
    <h2 className=' text-4xl font-semibold mb-14'>Projects</h2>

    <ul className='cursor-pointer flex xs:w-[90%] lg:w-[70%] justify-between text-center '>
        <li className={`flex-grow border py-3 rounded-l-3xl ${id === 'all'?(themeMode?'bg-gradient-to-r from-[#5eed84] to-[#09467c]':'bg-gradient-to-r from-orange-500 via-yellow-400 to-[#f89947]'):''}` } onClick={()=>handleProjects('all')}>All Projects</li>
        <li className={`flex-grow border border-x-0 py-3 ${id === 'html'?(themeMode?'bg-gradient-to-r from-[#5eed84] to-[#09467c]':'bg-gradient-to-r from-orange-500 via-yellow-400 to-[#f89947]'):''}`} onClick={()=>handleProjects('html')}>HTML / CSS</li>
        <li className={`flex-grow border py-3 rounded-r-3xl ${id === 'react'?(themeMode?'bg-gradient-to-r from-[#5eed84] to-[#09467c]':'bg-gradient-to-r from-orange-500 via-yellow-400 to-[#f89947]'):''}`} onClick={()=>handleProjects('react')}>React</li>
    </ul>
    <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-8  gap-8 w-[90%] min-h-[60%] max-h-[60%] overflow-y-scroll project-grid'>
    {projects}
    </div>
</div>
  )
}

export default project