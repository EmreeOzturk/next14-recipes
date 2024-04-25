import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MealItem = ({
    title, slug, image, summary, creator
}: {
    title: string
    slug: string
    image: string
    summary: string
    creator: string
}) => {
    return (
        <article>
            <header>
                <div className='relative'>
                    <Image src={image} alt="food" width={300} height={200} />
                </div>
                <div>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        by
                        <span>
                            {creator}
                        </span>
                    </p>
                </div>
            </header>
            <div>
                <p>
                    {summary}
                </p>
                <div>
                    <Link href={`/meal/${slug}`} >View Recipe</Link>
                </div>
            </div>
        </article >
    )
}

export default MealItem