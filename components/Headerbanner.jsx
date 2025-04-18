'use client';


import React, { useEffect, useState } from 'react';
import { getProfile } from '@/lib/api';

export default function Headerbanner() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    getProfile().then((res) => {
      setProfile(res.data[0]); // assuming one profile
    });
  }, []);
  if (!profile) return <div>Loading...</div>;
  return (
    <section>
        <div className='w-[1000px] h-[100vh] mx-auto flex flex-col justify-center'>

        <div className='w-52 h-52'>
                <img src={`${profile.image}`} alt="" className='w-[400px] rounded-full' />
               
            </div>


            <div className='flex flex-col justify-center items-start'>
              <h2 className='text-3xl'>
              {profile.name} <br /> <span className='text-orange-500'>{profile.role}</span>
              </h2>
              <div>{profile.description}</div>
             <img src="/assets/images/skillslogo.png" alt="" className='w-90'/>
            </div>

          
        </div>

    </section>
  ) 
}



 
