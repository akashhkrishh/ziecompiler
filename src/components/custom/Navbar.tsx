
import React from 'react'
import ZieLogo from './ZieLogo'
import { ModeToggle } from '../mode-toggle'
import { Button } from '../ui/button'
import { Download } from 'lucide-react'

function Navbar() {
  return (
    <header className='border-b h-[60px] p-4 lg:px-[24px] lg:py-[12px] flex items-center justify-between'>
      <div className='flex  items-center justify-center space-x-2'>
        <div className='h-[40px] w-[40px]'>
          <ZieLogo />
        </div>
        <h1 className='space-x-1 font-semibold'>
          <span className='text-foreground'>Zie</span>
          <span className='text-d_blue'>Compiler</span>
        </h1>
      </div>
      <div className='flex gap-2'>
        <ModeToggle />
        <Button variant="outline" >
          <Download className="h-[1.2rem] w-[1.2rem] transition-all" />
        <span>Download</span>
      </Button>
      </div>
    </header>
  )
}

export default Navbar