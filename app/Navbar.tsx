import Link from 'next/link'
import React from 'react'
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {


    const navLinksList =[
        {herf:'/',name:'DashBoard'},
        {herf:'/issues',name:'Issues'}     
    ]



  return (
    <nav className='flex justify-between px-4 h-10 items-center border-2 mb-3'>
        <Link href={'/'}><AiFillBug/></Link>
        <ul className='flex space-x-3'>
            {
                navLinksList.map(link=>
                    <li>
                        <Link href={link.herf} className=' text-zinc-500 hover:text-zinc-800 transition-colors'>
                            {link.name}
                        </Link>
                    </li>)
            }
        </ul> 
    </nav>

  )
}

export default Navbar
