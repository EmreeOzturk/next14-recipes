import { getMeal } from "@/lib/meals"
import Image from "next/image"
import { notFound } from "next/navigation"


export async function generateMetadata({ params }: { params: { slug: string } }) {
  const meal:any = await getMeal(params.slug)
  return {
    title: meal.title,
    description: meal.summary
  }

}

const MealPage = async ({ params }
  : {
    params: {
      slug: string
    }
  }

) => {
  const { slug } = params
  const meal: any = await getMeal(slug)
  if (!meal) {
    notFound()
  }
  meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  return (
    <article className="p-12 mt-24">
      <header className="flex  items-start gap-12">
        <div className="relative h-96 w-96">
          <Image src={meal.image} alt="food" fill className="object-cover w-full h-96" />
        </div>
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-7xl font-bold font-serif tracking-wider">
            {meal.title}
          </h1>
          <p className="text-3xl">
            by {' '}
            <span>
              {meal.creator}
            </span>
          </p>
          <p>
            {meal.summary}
          </p>
        </div>
      </header>
      <main className="h-full mt-12 flex justify-center items-center p-12 w-full bg-slate-600/60 rounded-xl"
        dangerouslySetInnerHTML={{ __html: meal.instructions }}
      >
      </main>
    </article>
  )
}

export default MealPage