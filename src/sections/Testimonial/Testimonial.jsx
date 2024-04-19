import React from 'react';
import TestimonialCard from '../../components/TestimonialCard/TestimonialCard';

const Testimonial = ({themeMode}) => {
  const data =[
    {
        name:'Sheryl Berge',
        desc:'Working with Fahad was an absolute pleasure. Their attention to detail and problem-solving skills are exceptional. They were able to deliver exactly what we needed, on time and within budget. I highly recommend [Your Name] to anyone looking for a talented web developer.',
        img:'https://randomuser.me/api/portraits/men/15.jpg',
        title:'Founder, XYZ Startup'
    },
    {
        name:'David Rodriguez',
        desc:'Fahad is a true professional in every sense of the word. They have a deep understanding of web development principles and technologies, and they consistently deliver high-quality work. It\'s been a pleasure collaborating with them, and I look forward to working together on future projects.',
        img:'https://randomuser.me/api/portraits/men/18.jpg',
        title:'CEO, ABC Company'
    },
    {
        name:'John Thompson',
        desc:'I had the pleasure of working with Fahad on a web development project, and I couldn\'t be happier with the results. His professionalism, expertise, and commitment to excellence were evident throughout the entire process. I highly recommend Fahad for any web development endeavor.',
        img:'https://randomuser.me/api/portraits/men/5.jpg',
        title:'Founder, XYZ Startup'
    },

    
  ]
  return (
    <div id='testimonial'>
        <section id="testimonials" aria-label="What our customers are saying" className={`${themeMode?'':'bg-slate-50'} py-20 sm:py-`}>
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">Testimonials</h2>
    </div>
    <ul role="list"
      className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
        {
            data.map((item)=>{
                return <TestimonialCard name={item.name} desc={item.desc} img={item.img} title={item.title}/>
            })
        }
      
      {/* Other list items go here */}
    </ul>
  </div>
</section>
    </div>
  )
}

export default Testimonial;
