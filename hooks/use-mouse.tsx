"use client";

import { useState, useEffect } from "react";

interface Mouse {
    x: number;
    y: number;
}

const useMouse = () => {
    const [position, setPosition] = useState<Mouse>({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        window.addEventListener("mousemove", updatePosition);
        return () => window.removeEventListener("mousemove", updatePosition);
    }, []);

    return position;
}

export default useMouse