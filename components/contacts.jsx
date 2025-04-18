import React from 'react'

export default function Contacts() {
    return (
        <section className='w-[1000px] mx-auto  h-[100vh] flex flex-col justify-center '>
    <div className=''>
        <div className='flex items-center justify-between'>
          <div className='flex gap-4 items-center  pb-10'>
          <h3 className='text-3xl'>contacts</h3><span className='w-[500px] h-[2px] bg-orange-500'></span>
            </div>  
           
        </div>
    </div>

    <div className='w-[1000px] mx-auto flex justify-between gap-7 pb-36'>
        <div className='flex flex-col justify-between'>
            <p>I’m interested in freelance opportunities. <br /> However, if you have other request or question, don’t hesitate to contact me</p>
          <div className='flex gap-4 '>

          <div className='w-36 h-36 bg-blue-500 rounded-2xl'><a href="https://www.linkedin.com/in/mahdi-hashemi-6b99b5289 " target='_blank'><img src="/assets/images/linkedin.jpg" alt="" className='rounded-2xl'/></a></div>
            <div className='w-36 h-36 bg-blue-400 rounded-2xl'><a href="https://t.me/mmhashemi96" target='_blank'><img src="/assets/images/telegram.jpg" alt="" className='rounded-2xl'/></a></div>
            <div className='w-36 h-36 bg-green-500 rounded-2xl'><a href=""><img src="/assets/images/whatsapp.jpg" alt="" className='rounded-2xl'/></a></div>
            <div className='w-36 h-36 bg-purple-500 rounded-2xl'><a href=""><img src="/assets/images/Instagram.jpg" alt="" className='rounded-2xl' /></a></div>

          </div>
        </div>
        <div className=''>
       <form action="" className='flex flex-col justify-between gap-2'>
        <input type="text" placeholder='your name' className='bg-zinc-100 text-2xl px-2 rounded-2xl w-90 h-10' />
        <input type="email" placeholder='your email' className='bg-zinc-100 text-2xl px-2 rounded-2xl w-90 h-10' />
        <textarea type="text" cols={10} rows={5} placeholder='description' className='bg-zinc-100 text-2xl px-2 rounded-2xl' />
       </form>
        </div>
    </div>
        </section>
    )}