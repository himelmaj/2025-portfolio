"use client"
import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import FotoPortfolio from "@/public/foto-porfolio.webp"
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const ExpandedCanvas = () => {
    const [canvasExapanded, setCanvasExpanded] = useState<Boolean>(false)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
    }, [])

    return (
        <div className='hidden md:block'>

            <Image src={FotoPortfolio} width={350} height={350} alt='Foto Portfolio' className='z-0 grayscale-100 flex items-center jsutify-center absolute m-auto inset-0' />


            <motion.canvas

                ref={canvasRef}
                animate={canvasExapanded ? "expanded" : "collapsed"}
                initial={{
                    height: 350,
                    width: 350
                }}
                variants={{
                    expanded: { width: "100vw", height: "100vh" },
                    collapsed: { width: 350, height: 350 }
                }}

                className={cn('bg-amber-500 opacity-40 absolute inset-0 m-auto flex items-center justify-center z-50', (!canvasExapanded && ' cursor-pointer'))}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                }}

                onClick={() => setCanvasExpanded(true)}
            />

            {canvasExapanded && (
                <motion.div
                    className={cn('fixed top-1/2 right-0 -translate-y-1/2 z-50 flex flex-col')}
                    initial={{
                        opacity: 0
                    }}
                    animate={canvasExapanded ? "expanded" : "collapsed"}
                    variants={{
                        expanded: { opacity: 100 },
                        collapsed: { opacity: 0 }
                    }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut"
                    }}
                >

                    <Button onClick={() => setCanvasExpanded(false)} type='button' variant={"secondary"} className=''>
                        <X className='h-full w-full' />
                    </Button>
                    <Button onClick={() => setCanvasExpanded(false)} type='button' variant={"secondary"} className=''>
                        <X />
                    </Button>



                </motion.div>
            )}
        </div>
    )
}

export default ExpandedCanvas