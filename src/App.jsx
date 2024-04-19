import { useState ,useEffect} from 'react'
import './App.css'
import About from './sections/About/About'
import Contact from './sections/Contact/Contact'
import Hero from './sections/Hero/Hero'
import Project from './sections/Project/project'
import Testimonial from './sections/Testimonial/Testimonial'



function App() {
  const[themeMode,setthemeMode]= useState(false);

  const handleDataFromChild = (data)=>{
    setthemeMode(data=='dark'?true:false)
    console.log('abc',data=='dark');
    console.log("theme:",themeMode,'color',data);

  }
  useEffect(() => {
    // Update the app color when the themeMode state changes
    console.log('theme mode toggled',themeMode);
    const app = document.querySelector('.App');
    if(app){
      if (themeMode) {
        app.classList.add('dark-theme');
        app.classList.remove('bg-white');
      } else {
        app.classList.remove('dark-theme');
        app.classList.add('bg-white');
      }
    }
  }, [themeMode]);
  

  return (
    <div className={`App transition-colors ease-in delay-100`}>
      <Hero sendDataToGrandParent={handleDataFromChild}/>
      <About/>
      <Project/>
      <Testimonial themeMode={themeMode}/>
      <Contact/>
    </div>
  )
}

export default App
