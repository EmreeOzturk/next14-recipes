

import ShareForm from '@/components/ShareForm'

const SharePage = () => {
  return (
    <div className='mt-24'>
      <header className='flex flex-col items-start'>
        <h1 className='text-7xl font-bold font-serif'>Share your {' '}
          <span
            className='bg-gradient-to-l from-orange-400 to-orange-700 text-transparent bg-clip-text'
          >
            favorite recipe
          </span>
        </h1>
        <p className='mt-12 text-3xl tracking-wider'>
          Or any other meal you love to cook
        </p>
      </header>
      <main className='p-24'>
        <ShareForm />
      </main>
    </div>
  )
}

export default SharePage