"use client"

import BasicEditor from '@/components/custom/monaco-editor'
import { RootState } from '@/redux/store'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguageName, setLanguageId, setSourceCode, setStdin, setLanguageTitle, setFileName, setOutput } from '@/redux/slices/dataSlice'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { filterLanguage } from '../../utils/utils'
import { Language } from '../../utils/type'
import { notFound } from 'next/navigation'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Label } from '@/components/ui/label'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

export default function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = React.use(params);
  const [isMobile, setIsMobile] = useState(false);
  const { language_id, output, language_name, source_code, stdin, status } = useSelector((state: RootState) => state.data);
  useEffect(() => {
    const updateScreenSize = () => {
        setIsMobile(window.innerWidth < 1024);
    };

    updateScreenSize(); // Initial check
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
}, []);
  useEffect(() => {

    const fetchData = filterLanguage(slug);
    if (!fetchData) {
      notFound()
    }
    dispatch(setLanguageId(fetchData?.id));
    dispatch(setFileName(fetchData?.fileName));
    dispatch(setLanguageTitle(fetchData?.name));
    dispatch(setLanguageName(fetchData?.lang));
    dispatch(setSourceCode(fetchData?.codeExample));
  }, [slug])
  const dispatch = useDispatch();
  const handleOnChange = (newCode: string | undefined) => {

    dispatch(setSourceCode(newCode))
  }
  const handleClear = (newCode: string | undefined) => {
    dispatch(setStdin(newCode))
  }
  const handleClearOutput = (newCode: string | undefined) => {
    dispatch(setOutput(newCode))
  }
  return (

    <>
  
    <div className='flex-1'>
      <ResizablePanelGroup direction={isMobile?'vertical':'horizontal'}>
        
       
      <ResizablePanel defaultSize={!isMobile?50:60} minSize={10} className='py-4 lg:py-4'>
      <BasicEditor language={language_name} value={source_code} onChange={handleOnChange} />
      </ResizablePanel>

     <ResizableHandle/>
      <ResizablePanel defaultSize={!isMobile?50:40} minSize={10}>
        <ResizablePanelGroup direction='vertical'>
          <ResizablePanel defaultSize={!isMobile?50:30} className={`${isMobile?"text-xs":"text-md"} flex flex-col `}>
            <div className='p-2 lg:px-4 border-b flex items-center justify-between'>
              <h1 className='text-d_blue font-medium   '>{"STDIN"}</h1>
              <Button className='h-8' onClick={()=>handleClear("")} variant={"outline"}>{"Clear"}</Button>
            </div>
           <ScrollArea className='flex-1  p-3 lg:p-4'>
              <Textarea className='h-full border-none  resize-none' value={stdin} onChange={(e)=>dispatch(setStdin(e.target.value))} placeholder='Input for the program ( Optional )'
                
                />
                
           </ScrollArea>

          </ResizablePanel>
          <ResizableHandle/>
          <ResizablePanel  defaultSize={!isMobile?50:70} className={`${isMobile?"text-xs":"text-md"} flex flex-col `}>
          <div className='p-2 lg:px-4 border-b flex items-center justify-between'>
              <h1 className='text-d_blue font-medium   '>{"Output"}</h1>
              <Button className='h-8' onClick={()=>handleClearOutput("")} variant={"outline"}>{"Clear"}</Button>
            </div>
            <ScrollArea className={`flex-1 p-3 lg:p-4  ${isMobile?"text-xs":"text-md"}`}>
            <pre className=' break-words'>
             
             
             {
             output?.stdout && 
             output?.stdout
            }
             </pre>
             <pre className='text-orange-700'>
            {
             output?.compile_output && 
             output?.compile_output
            }
            {
             output?.stderr && 
             output?.stderr
            }
             </pre>
             <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </ResizablePanel>

        </ResizablePanelGroup>
      </ResizablePanel>

 
      </ResizablePanelGroup>

    </div>
    </>
  )
}
