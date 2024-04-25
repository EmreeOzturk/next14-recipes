import MealList from '@/components/MealList'
import Link from 'next/link'
import { Suspense } from 'react'
import MealsLoading from './loading-out'
const MealsPage = () => {
    return (
        <>
            <header className="flex flex-col items-start text-gray-300 w-full mt-24 ">
                <h1 className='text-5xl font-bold font-serif mb-20'>Delicious meals, created
                    <span
                        className='bg-gradient-to-l from-orange-400 to-orange-700 text-transparent bg-clip-text'
                    > by you</span>
                </h1>
                <p className='text-2xl mb-6 font-serif '>
                    Choose your favorite meal and share it with the community.
                    <span
                        className='bg-gradient-to-l from-orange-200 to-orange-400 text-transparent bg-clip-text'
                    >It&apos;s easy and fun!</span>
                </p>
                <Link href="/meals/share"
                    className='text-2xl px-4 py-2 bg-red-400 rounded-lg bg-gradient-to-l from-orange-400 to-orange-700 font-bold'
                >
                    Share your favorite recipe
                </Link>
            </header>

            <main>
                <Suspense fallback={<MealsLoading />}>
                    <MealList />
                </Suspense>
            </main>

        </>
    )
}

export default MealsPage