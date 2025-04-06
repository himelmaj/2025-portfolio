import FotoPorfolio from "@/public/foto-porfolio.webp"
import Sinsajo from "@/public/sinsajo.png"
import Shorten from "@/public/shorten.png"
import Portfolio2024 from "@/public/2024.png"


export default [
    {
        id: "1",
        slug: "1",
        title: "Porfolio 2024",
        description: "Portdolio hecho en verano 2024 con Astro + React + Tailwind",
        publishedAt: new Date("01-08-2024"),
        className: "col-span-2",
        mainImage: {
            src: Portfolio2024,
            alt: "Foto Portfolio"
        },
        images: [
            {
                src: Portfolio2024,
                alt: "Foto Test"
            },
            {
                src: Portfolio2024,
                alt: "Foto Test"
            }
        ]
    },
    {
        id: "2",
        slug: "2",
        title: "Porfolio 2025",
        description: "Portdolio hecho en verano 2024 con Astro + React + Tailwind",
        publishedAt: new Date("01-08-2025"),
        mainImage: {
            src: FotoPorfolio,
            alt: "Foto Portfolio"
        },
        images: [
            {
                src: FotoPorfolio,
                alt: "Foto Test"
            },
            {
                src: FotoPorfolio,
                alt: "Foto Test"
            }
        ]
    },
    {
        id: "3",
        slug: "3",
        title: "Porfolio 2023",
        description: "Portdolio hecho en verano 2024 con Astro + React + Tailwind",
        publishedAt: new Date("01-08-2023"),
        mainImage: {
            src: FotoPorfolio,
            alt: "Foto Portfolio"
        },
        images: [
            {
                src: FotoPorfolio,
                alt: "Foto Test"
            },
            {
                src: FotoPorfolio,
                alt: "Foto Test"
            }
        ]
    },
    {
        id: "4",
        slug: "4",
        title: "Sinsajo",
        description: "Portdolio hecho en verano 2024 con Astro + React + Tailwind",
        publishedAt: new Date("01-08-2023"),
        className: "col-span-2",
        mainImage: {
            src: Sinsajo,
            alt: "Foto Portfolio"
        },
        images: [
            {
                src: Sinsajo,
                alt: "Foto Test"
            },
            {
                src: Sinsajo,
                alt: "Foto Test"
            }
        ]
    },
    {
        id: "5",
        slug: "5",
        title: "Shorten",
        description: "Portdolio hecho en verano 2024 con Astro + React + Tailwind",
        publishedAt: new Date("01-08-2023"),
        className: "col-span-2",
        mainImage: {
            src: Shorten,
            alt: "Foto Portfolio"
        },
        images: [
            {
                src: Shorten,
                alt: "Foto Test"
            },
            {
                src: Shorten,
                alt: "Foto Test"
            }
        ]
    }
]