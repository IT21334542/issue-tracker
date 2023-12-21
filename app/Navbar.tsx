'use client';
import Link from 'next/link'
import React from 'react'
import classNames from 'classnames';
import { usePathname } from 'next/navigation';
import { AiFillBug } from "react-icons/ai";


const Navbar = () => {

    const CurPath = usePathname();
    const navLinksList =[
        {herf:'/',name:'DashBoard'},
        {herf:'/issues',name:'Issues'}     
    ]



  return (
    <nav className='flex justify-between px-4 h-10 items-center border-2 mb-3'>
        <Link href={'/'}><AiFillBug/></Link>
        <ul className='flex space-x-3'>
            {
                navLinksList.map((link,index)=>
                    <li key={index}>
                        <Link href={link.herf} className={classNames({
                            'text-zinc-500':(link.herf!=CurPath),
                            'text-zinc-900':(link.herf===CurPath),
                            'hover:text-zinc-800 transition-colors':true
                        })}>
                            {link.name}
                        </Link>
                    </li>)
            }
        </ul> 
    </nav>

  )
}

export default Navbar
