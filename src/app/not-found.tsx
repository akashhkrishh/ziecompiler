import Navbar from '@/components/custom/nav-bar'
import React from 'react'
import notFound from "@/assets/svg/notfound.svg"
import Image from 'next/image'
import { ModeToggle } from '@/components/custom/mode-toggle'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <Image src={notFound}  alt='nofount'/>
      <div className='flex gap-2'>
      <ModeToggle/>
      <Link href={"/"}><Button  variant={"outline"} size={"default"}><Home/> Back to home</Button></Link>
      
      </div>
      
    </div>
  )
}
