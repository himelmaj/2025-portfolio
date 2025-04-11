"use client"
import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

const ExpandedCanvas = ({ src, alt }: { src: string | StaticImport, alt: string }) => {
    const [canvasExpanded, setCanvasExpanded] = useState<boolean>(false)
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
    }, [])

    return (
        <div className='hidden md:block'>

            <div className='flex'>
                <Image src={src} width={380} height={380} alt={alt} className='z-0 grayscale-100 w-full h-full' />


                <motion.canvas

                    ref={canvasRef}
                    animate={canvasExpanded ? "expanded" : "collapsed"}
                    initial={{
                        height: "380px",
                        width: "380px",
                    }}
                    variants={{
                        expanded: { width: "100vw", height: "100vh" },
                        collapsed: { width: "380px", height: "380px" }
                    }}

                    className={cn('bg-amber-500 opacity-40 absolute  z-50', (!canvasExpanded && ' cursor-pointer'))}
                    transition={{
                        duration: 0.5,
                        ease: "easeInOut"
                    }}

                    onClick={() => setCanvasExpanded(true)}
                />
            </div>

            {canvasExpanded && (
                <motion.div
                    className={cn('fixed top-1 right-0  z-50 flex flex-col')}
                    initial={{
                        opacity: 0
                    }}
                    animate={canvasExpanded ? "expanded" : "collapsed"}
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
                </motion.div>
            )}
        </div>
    )
}

export default ExpandedCanvas