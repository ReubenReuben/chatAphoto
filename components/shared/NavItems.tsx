"use client"
import { headerLinks } from '@/constants'
import React from 'react'
import Link  from "next/link";
import { usePathname } from 'next/navigation';

const NavItems = () => {
    const pathname =usePathname();

  return (
    <ul className='md:flex flex-between w-full flex-col items-startgap-5 md:flex-row'>
        {headerLinks.map((link) =>{
            const isActive= pathname ===link.route;

            return(
                <li
                key={link.route}
                className={` ${isActive && `text-primary-500`} flex-cente p-medium-16 whitespace-nowrap`}>
                    <Link  href={link.route}> {link.label}</Link>
                </li>
            )
        })}

    </ul>
  )
}

export default NavItems