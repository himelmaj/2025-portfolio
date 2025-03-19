"use client";

import { useRef, useEffect } from "react";

const PaintCanvas = () => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {

        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const boundingRect = canvas.getBoundingClientRect();

        canvas.width = boundingRect.width;
        canvas.height = boundingRect.height;

        if (!context) return;

        const rootStyle = getComputedStyle(document.documentElement);
        const color = rootStyle.getPropertyValue('--foreground');

        context.strokeStyle = color;
        context.lineJoin = 'round';
        context.lineCap = 'round';
        context.lineWidth = 5;

        
        let isDrawing = false;
        let lastX = 0;
        let lastY = 0;

        const draw = (event: MouseEvent) => {
            if (!isDrawing) return;

            context.beginPath();
            context.moveTo(lastX, lastY);
            context.lineTo(event.offsetX, event.offsetY);
            context.stroke();

            lastX = event.offsetX;
            lastY = event.offsetY;
        }

        canvas.addEventListener('mousedown', (event) => {
            isDrawing = true;
            lastX = event.offsetX;
            lastY = event.offsetY;
        });

        canvas.addEventListener('mousemove', draw);
        
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);

        return () => {
            canvas.removeEventListener('mousedown', () => isDrawing = false);
            canvas.removeEventListener('mousemove', draw);
            canvas.removeEventListener('mouseup', () => isDrawing = false);
            canvas.removeEventListener('mouseout', () => isDrawing = false);
        }

    }, []);


  return (
    <canvas ref={canvasRef} className="absolute min-h-screen min-w-screen z-0" />
  )
}

export default PaintCanvas