
import Image from 'next/image'
import LightLogo from '@/app/assets/svg/ziecompiler_logo_light.svg'
import DarkLogo from '@/app/assets/svg/ziecompiler_logo_dark.svg'

function ZieLogo() {
  return (
    <div className='h-full '>
    
    <Image
        className='h-full aspect-square hidden dark:flex'
        src={LightLogo}
        alt='ZieLogo'
        priority
        />
    <Image
    priority
        className='h-full aspect-square dark:hidden'
        src={DarkLogo}
        alt='ZieLogo'
        />
   
    </div>
  )
}

export default ZieLogo