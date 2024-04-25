import React from 'react'
import MealItem from './MealItem'
import { getMeals } from '@/lib/meals'
const MealList = async () => {
    const meals = await getMeals()
    return (
        <ul className='flex flex-wrap gap-12 mt-20'>
            {
                meals.map((meal: any) => (
                    <li key={meal.id} className=' w-[30%]'>
                        <MealItem
                            title={meal.title}
                            slug={meal.slug}
                            image={meal.image}
                            summary={meal.summary}
                            creator={meal.creator} />
                    </li>
                ))
            }
        </ul>
    )
}

export default MealList