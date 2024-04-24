import ImageSlide from "@/components/ImageSlide";

export default function Home() {
  return (
    <>
      <header className="flex w-full mt-24 items-center">
        <div className="w-1/2 md:pl-32">
          <ImageSlide />
        </div>
        <div className="font-sans gap-10 flex flex-col items-start">
          <h1 className="text-5xl font-bold  tracking-wider bg-gradient-to-l from-orange-400 to-orange-700 inline-block text-transparent bg-clip-text">NEXTLEVEL FOOD FOR <br /> NEXTLEVEL FOODIES</h1>

          <h2 className="text-3xl tracking-wide">Taste & share food from all over the world.</h2>

          <div className="flex items-center justify-center gap-10">
            <p className="text-3xl font-thin bg-gradient-to-l from-orange-200 to-orange-400 inline-block text-transparent bg-clip-text">
              Join The Community
            </p>
            <button className="text-2xl px-4 py-2 bg-red-400 rounded-lg bg-gradient-to-l from-orange-400 to-orange-700 font-bold">
              Explore Meals
            </button>
          </div>
        </div>
      </header>
      <main className="flex flex-col mt-36">
        <section className="text-center">
          <h2 className="text-center text-6xl font-bold">How it works</h2>
          <p className="text-2xl my-12">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="text-2xl my-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
        <section className="text-center mt-20">
          <h2 className="text-center text-6xl font-bold">Why NextLevel Food?</h2>
          <p className="text-2xl my-12">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p className="text-2xl my-4">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
