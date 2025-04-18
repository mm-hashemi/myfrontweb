import React from 'react'

export default function Projects() {
  return (
    <div className='w-[1000px] mx-auto  h-[100vh] flex flex-col justify-center '>
    <div className=''>
        <div className='flex items-center justify-between'>
          <div className='flex gap-4 items-center  pb-10'>
          <h3 className='text-3xl'>works</h3><span className='w-[500px] h-[2px] bg-orange-500'></span>
            </div>  
            <h3 className='text-2xl'>view all</h3>
        </div>
    </div>
    <div className='w-[1000px] mx-auto flex justify-between'>
{/* 1 */}
      <div className='w-[250px] border-2 border-zinc-400 mb-5'>
        <div className='border-b-2 border-zinc-400'><img src="/assets/images/demo1.png" alt="" /></div>
        <div className='border-b-2 border-zinc-400 p-3'>
        <h5>HTML CSS JS REACT TAILWIND</h5>
          </div>     
          <div className='p-3'>
            <h5 className='text-4xl'>ChertNodes</h5>
            <p>Minecraft servers hosting</p>
            </div>   
            <div className='flex gap-3 p-3 mt-3'>
              <button className='border-2 px-7 py-2 rounded-2xl border-orange-500'>Live</button>
              <button className='border-2 px-7 py-2 rounded-2xl border-orange-500'>Code</button>

            </div>
      </div>
{/* 2 */}
<div className='w-[250px] border-2 border-zinc-400 mb-5'>
        <div className='border-b-2 border-zinc-400'><img src="/assets/images/demo1.png" alt="" /></div>
        <div className='border-b-2 border-zinc-400 p-3'>
        <h5>HTML CSS JS REACT TAILWIND</h5>
          </div>     
          <div className='p-3'>
            <h5 className='text-4xl'>ChertNodes</h5>
            <p>Minecraft servers hosting</p>
            </div>   
            <div className='flex gap-3 p-3 mt-3'>
              <button className='border-2 px-7 py-2 rounded-2xl border-orange-500'>Live</button>
              <button className='border-2 px-7 py-2 rounded-2xl border-orange-500'>Code</button>

            </div>
      </div>

{/* 3 */}
<div className='w-[250px] border-2 border-zinc-400 mb-5'>
        <div className='border-b-2 border-zinc-400'><img src="/assets/images/demo1.png" alt="" /></div>
        <div className='border-b-2 border-zinc-400 p-3'>
        <h5>HTML CSS JS REACT TAILWIND</h5>
          </div>     
          <div className='p-3'>
            <h5 className='text-4xl'>ChertNodes</h5>
            <p>Minecraft servers hosting</p>
            </div>   
            <div className='flex gap-3 p-3 mt-3'>
              <button className='border-2 px-7 py-2 rounded-2xl border-orange-500'>Live</button>
              <button className='border-2 px-7 py-2 rounded-2xl border-orange-500'>Code</button>

            </div>
      </div>




    </div>
    </div>

  )
}
