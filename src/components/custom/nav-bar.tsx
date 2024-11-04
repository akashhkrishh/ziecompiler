"use client";
// @ts-nocheck
import { AppDispatch, RootState } from '@/redux/store';

import { useDispatch, useSelector } from 'react-redux';
import { setFullScreen } from '@/redux/slices/layoutSlice';
import { ModeToggle } from './mode-toggle';
import { CircleCheckBig , CircleDotDashed,  Download,  Maximize, Minimize, PlayIcon, ShieldAlert, } from 'lucide-react';
import { Button } from '../ui/button';
import { handleDownload } from '@/utils/utils';
import { setOutput, submitCode } from '@/redux/slices/dataSlice';
 
import { DialogDemo } from './dialog-demo';
import ZieLogo from './ZieLogo';
import { SubmitCodePayload } from '@/utils/type';
 

const Navbar: React.FC = () => {
    // const param =useParams<{ slug: string; }>()
    // // Fetch slug using useEffect


    const { isFullScreen } = useSelector((state: RootState) => state.layout);
    const { source_code, stdin, language_id, loading, language_title, fileName, status } = useSelector((state: RootState) => state.data);
    const dispatch = useDispatch();
    const dispatchNew = useDispatch<AppDispatch>();

    const handleExecuter = async () => {
        dispatch(setOutput(null));
        const data:SubmitCodePayload = { source_code, language_id, stdin };
        try {
            await dispatchNew(submitCode(data)); // Ensure submitCode is a thunk
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <header>
            {!isFullScreen && (
                <div className='w-full h-14 border-b flex items-center justify-center p-3'>
                    <ZieLogo />
                    <h1>Zie <span className='text-d_blue'> Compiler</span></h1>


                </div>
            )}
            {status &&
                <div className='flex border-b items-center justify-center lg:hidden md:hidden'>
                    <div className=' text-sm p-2 items-center justify-center'>
                        {
                            status && (
                                (status == 'Running') &&
                                <div className='text-yellow-600 space-x-1 flex items-center h-full justify-center  '>
                                    <CircleDotDashed size={16} className=' animate-spin' />
                                    <span>{status}</span>
                                </div>
                            )

                        }
                        {
                            status && (
                                (status == 'Runtime Error' || status == "Compile Error") &&
                                <div className='text-orange-700 space-x-1 flex items-center h-full justify-center  '>
                                    <ShieldAlert size={16} />
                                    <span>{status}</span>
                                </div>
                            )

                        }
                        {
                            status && (
                                (status == 'Finish') &&
                                <div className='text-green-600 space-x-1 flex items-center h-full justify-center  '>
                                    <CircleCheckBig size={16} />
                                    <span>{status}</span>
                                </div>
                            )

                        }
                    </div>
                </div>
            }
            <div className='w-full h-14 border-b flex items-center justify-center  md:justify-between  lg:justify-between  p-4'>
                <div className='text-d_blue   flex space-x-1 text-center items-center justify-start'>
                    <span className='text-md lg:ml-8 md:ml-8  hidden md:flex lg:flex lg:text-md md:text-md'>{fileName}</span>
                </div>

                <div className='flex space-x-2  justify-end items-end'>

                    <div className='hidden md:flex lg:flex text-sm p-2 items-center justify-center'>
                        {
                            status && (
                                (status == 'Running') &&
                                <div className='text-yellow-600 space-x-1 flex items-center h-full justify-center  '>
                                    <CircleDotDashed size={16} className=' animate-spin' />
                                    <span>{status}</span>
                                </div>
                            )

                        }
                        {
                            status && (
                                (status == 'Runtime Error' || status == "Compile Error") &&
                                <div className='text-orange-700 space-x-1 flex items-center h-full justify-center  '>
                                    <ShieldAlert size={16} />
                                    <span>{status}</span>
                                </div>
                            )

                        }
                        {
                            status && (
                                (status == 'Finish') &&
                                <div className='text-green-600 space-x-1 flex items-center h-full justify-center  '>
                                    <CircleCheckBig size={16} />
                                    <span>{status}</span>
                                </div>
                            )

                        }
                    </div>

                    <div className=' md:block lg:block'>
                        <DialogDemo language_title={language_title} />
                    </div>
                    <Button variant={"outline"} className='bg-green-600  text-white' disabled={loading} size={"icon"} onClick={handleExecuter}>
                        {<PlayIcon />}
                    </Button>
                    <Button variant={"outline"} size={"icon"} onClick={() => handleDownload(source_code!,fileName!)}>
                        <Download />
                    </Button>
                    <ModeToggle />
                    <Button variant={"outline"} size={"icon"} onClick={() => dispatch(setFullScreen(!isFullScreen))}>
                        {isFullScreen ? <Minimize /> : <Maximize />}
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
