import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import logo from "@/assets/logo.png"
const Header = () => {
    return (
        <header className='flex justify-between items-center py-8'>
            <Link href="/" className='flex items-center gap-8'>
                <Image src={logo.src} alt="logo" width={70} height={70} priority />
                <p className='text-3xl font-mono tracking-wider'>
                    Food Recipes
                </p>
            </Link>
            <nav >
                <ul className='flex  text-2xl gap-12 font-mono'>
                    <li>
                        <Link href="/meals" className='hover:text-yellow-400 font-bold hover:shadow-xl'>
                            Browse Meals
                        </Link>
                    </li>
                    <li>
                        <Link href="/community" className='hover:text-yellow-400 font-bold hover:shadow-xl'>
                            Find Community
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header