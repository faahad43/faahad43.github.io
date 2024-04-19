import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import illustration from '../../assets/illustrations.png'
import Button from '../../components/Button/button'
import contactart from '../../assets/contact-art.png'

const Contact = () => {
    const [email,setEmail]=useState("");
    const [name,setName]= useState("");
    const [message,setMessage]= useState("");

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_3430mhy', 'template_engqghe', form.current, {
        publicKey: '_r2MSPa8NDGMoKhb7',
      })
      .then(
        () => {
          console.log('SUCCESS!');

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    setEmail('')
    setName('')
    setMessage('')
  };

  return (
    <div className='w-screen py-28 flex flex-col items-center gap-y-10' id='contact'>
        <h2 className='font-semibold text-3xl'>Contact ME</h2>
        <div className='flex w-[90%] '>
            <div className="contact-img flex-1 flex items-center justify-center w-[50%] lg: xs:hidden lg:flex relative hover:animate-wiggle hover:animate-infinite">
                <img className='w-[55%] xl:w-[40%] h-auto z-10 animate-wiggle animate-infinite animate-duration-[2.2s] animate-ease-in-out animate-delay-1000' src={illustration} alt="" />
                <img className='w-[80%] xl:w-[60%] translate-y-12 absolute z-0 ' src={contactart} alt="" />
            </div>
            <div className="contact-form flex-1 w-[50%] lg:py-16 ">
                <form className='flex flex-col gap-4 justify-center items-center xl:mr-6' ref={form} onSubmit={sendEmail}>
                    <input className='border block xs:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[70%] p-2 outline-none rounded' value={name} onChange={(e)=>setName(e.target.value)} type="text" name='user-name' placeholder='Name'/>
                    <input className='border block xs:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[70%] p-2 outline-none rounded'  value={email} onChange={(e)=>setEmail(e.target.value)}type="text" name='user-email' placeholder='Email'/>
                    <textarea className='border block xs:w-[90%] md:w-[75%] lg:w-[65%] xl:w-[70%] resize-none p-2 outline-none rounded' value={message} onChange={(e)=>setMessage(e.target.value)} name="message" id=""  rows="10" placeholder='Message'></textarea>
                    <Button label="Submit" value="Send"/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact