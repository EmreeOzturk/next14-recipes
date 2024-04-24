"use client"
import burgerImg from '@/assets/burger.jpg';
import curryImg from '@/assets/curry.jpg';
import dumplingsImg from '@/assets/dumplings.jpg';
import macncheeseImg from '@/assets/macncheese.jpg';
import pizzaImg from '@/assets/pizza.jpg';
import schnitzelImg from '@/assets/schnitzel.jpg';
import tomatoSaladImg from '@/assets/tomato-salad.jpg';

import { useState, useEffect } from 'react';
import Image from 'next/image';
const images = [
    { image: burgerImg, alt: 'A delicious, juicy burger' },
    { image: curryImg, alt: 'A delicious, spicy curry' },
    { image: dumplingsImg, alt: 'Steamed dumplings' },
    { image: macncheeseImg, alt: 'Mac and cheese' },
    { image: pizzaImg, alt: 'A delicious pizza' },
    { image: schnitzelImg, alt: 'A delicious schnitzel' },
    { image: tomatoSaladImg, alt: 'A delicious tomato salad' },
];
const ImageSlide = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => {
                return (prevIndex + 1) % images.length;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div style={{
            width: '400px',
            height: '400px',
            position: 'relative',
        }}>
            {
                images.map((image, index) => (
                    <Image
                        src={image.image.src}
                        fill
                        alt={image.alt}
                        key={index}
                        className={index === currentImageIndex ? 'rounded-lg  transition-all duration-700' : 'opacity-0 scale-110 translate-x-2 rotate-2'}

                    />
                ))
            }
        </div>
    )
}

export default ImageSlide