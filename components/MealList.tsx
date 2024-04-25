import React from 'react'
import MealItem from './MealItem'
const MealList = ({ meals }: { meals: any }) => {
    return (
        <ul>
            {
                meals.map((meal: any) => (
                    <li key={meal.id}>
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