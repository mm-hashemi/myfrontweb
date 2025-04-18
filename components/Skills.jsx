import React from 'react'

export default function Skills() {
  return (
    <div className='w-[1000px] mx-auto  h-[100vh] flex flex-col justify-center '>
     <div className=''>
        <div className='flex items-center justify-between'>
          <div className='flex gap-4 items-center  pb-10'>
          <h3 className='text-3xl'>skills</h3><span className='w-[500px] h-[2px] bg-orange-500'></span>
            </div>  
           
        </div>
    </div>
    <div className='w-[1000px] my-10 mx-auto flex flex-wrap gap-3'>
        <div className='w-[220px] border-2 border-zinc-200 mb-5'>
            <h3 className='border-b-2 border-zinc-200 text-2xl p-3'>Languages</h3>
            <p className='text-zinc-300 p-3'>Javascript - python - typescript</p>
        </div>
        <div className='w-[220px] border-2 border-zinc-200 mb-5'>
            <h3 className='border-b-2 border-zinc-200 text-2xl p-3'>Frameworks</h3>
            <p className='text-zinc-300 p-3'>React - Django - Tailwind</p>
        </div>
        <div className='w-[220px] border-2 border-zinc-200 mb-5'>
            <h3 className='border-b-2 border-zinc-200 text-2xl p-3'>Databases</h3>
            <p className='text-zinc-300 p-3'>MongoDb - PostgreSQl - MySql</p>
        </div>
        <div className='w-[220px] border-2 border-zinc-200 mb-5'>
            <h3 className='border-b-2 border-zinc-200 text-2xl p-3'>Others</h3>
            <p className='text-zinc-300 p-3'>HTML - CSS - SASS - Git - django rest framework</p>
        </div>
    </div>
    </div>
  )}