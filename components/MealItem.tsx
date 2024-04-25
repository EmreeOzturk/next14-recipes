import Image from 'next/image'
import Link from 'next/link'

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
        <article className='bg-gray-800/60 rounded-lg w-full h-[500px] flex flex-col items-center justify-start'>
            <header className='w-full relative flex flex-col'>
                <div className='relative h-64 w-full'>
                    <Image src={image} alt="food" fill className='object-cover rounded-lg' />
                </div>
                <div className='p-4 text-2xl font-bold font-mono'>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        by {' '}
                        <span className="bg-gradient-to-l from-orange-700 to-orange-400 text-transparent bg-clip-text">
                            {creator}
                        </span>
                    </p>
                </div>
            </header>
            <div className='p-4 flex flex-col justify-between h-full rounded-xl items-end '>
                <p>
                    {summary}
                </p>
                <div className='
                px-4 py-2 bg-gradient-to-l 
                from-orange-400 to-orange-700 rounded-lg w-fit text-center text-white font-bold cursor-pointer hover:from-orange-700 hover:to-orange-400
                '>
                    <Link href={`/meal/${slug}`} >View Recipe</Link>
                </div>
            </div>
        </article >
    )
}

export default MealItem