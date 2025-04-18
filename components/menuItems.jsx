import Link from 'next/link'
import React from 'react'

export default function MenuItems({title}) {
  return (
    <section>
        <>
        <li className="scroll active hover:text-orange-500"><Link href={`#${title}`}>{title}</Link></li>

        </>

    </section>
  ) 
}
