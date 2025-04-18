import React from 'react'


export default function About() {
    return (
        <div className='w-[1000px] mx-auto  h-[100vh] flex flex-col justify-center '>
     <div className=''>
        <div className='flex items-center justify-between'>
          <div className='flex gap-4 items-center pb-10'>
          <h3 className='text-3xl'>about</h3><span className='w-[500px] h-[2px] bg-orange-500'></span>
            </div>  
           
        </div>
    </div>

    <div className='w-[1000px] mx-auto flex justify-between'>
        <div className='w-[450px] '>
            <pre className='text-wrap'>
            Hello, i’m Elias! <br></br>
            
I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br></br>

Transforming my creativity and knowledge into a websites has been my passion for over a year.  <br></br>I have been helping various clients to establish their presence online. I <br></br> always strive to learn about the newest technologies and frameworks. <br></br>
            </pre>
        </div>
    </div>
        </div>
    )
}