import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'

const Head = () => {
  return (
   <header className='w-full border-b'>
    <div className='wrapper flex items-center justify-between'>
    <Link href="/" className='w-36'>
        <Image alt='image here' src="/assets/images/logo.svg" width={128} height={38}></Image>
    </Link>

      <SignedIn>
        <nav className='md:flex-between hidden w-full max-w-xs gap-6 mx-5'>
        <NavItems/>
        </nav>
      </SignedIn>

    <div className='flex w-12 justify-end mx-4'>
      <SignedIn>
        <UserButton afterSignOutUrl='/' />
        <MobileNav/>
      </SignedIn>
   
    <SignedOut>
        <Button asChild className='rounded-full' size={'lg'}>
        <Link href="/sign-in">
            login
        </Link>
        </Button> 
    </SignedOut>
</div>
    </div>
    </header>
  )
}

export default Head