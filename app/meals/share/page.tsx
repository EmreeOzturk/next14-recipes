import React from 'react'

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
        <form >
          <div className='flex gap-4 mt-12'>
            <div className='flex flex-col w-full'>
              <label className='text-2xl' htmlFor="name">Your Name</label>
              <input className='p-4 bg-gray-800/60 rounded-lg' type="text" id='name' name='name' />
            </div>
            <div className='flex flex-col w-full'>
              <label className='text-2xl' htmlFor="mail">Your Mail</label>
              <input className='p-4 bg-gray-800/60 rounded-lg' type="text" id='mail' name='mail' />
            </div>
          </div>
          <div className='flex flex-col w-full mt-12'>
            <label className='text-2xl' htmlFor="title">Title</label>
            <input className='p-4 bg-gray-800/60 rounded-lg' type="text" id='title' name='title' />
          </div>
          <div className='flex flex-col gap-4 mt-12'>
            <label className='text-2xl' htmlFor="summary">Summary</label>
            <textarea className='p-4 bg-gray-800/60 rounded-lg' id='summary' name='summary' />
          </div>
          <div className='flex flex-col gap-4 mt-12'>
            <label className='text-2xl' htmlFor="instructions">Instructions</label>
            <textarea className='p-4 bg-gray-800/60 rounded-lg' id='instructions' />
          </div>
          <div className='flex flex-col gap-4 mt-12'>
            <label className='text-2xl' htmlFor="image">Image</label>
            <input className='p-4 bg-gray-800/60 rounded-lg hidden' type="file" id='image' name='image' />
            <button
              type='button'
              className=' text-center p-4 bg-gradient-to-l w-52 from-orange-400 to-orange-700 rounded-lg  text-white font-bold cursor-pointer hover:from-orange-700 hover:to-orange-400'
            // onClick={() => {
            //   const input = document.getElementById('image')
            //   // input.click()
            // }}
            >
              Upload Image
            </button>
          </div>
          <div className='flex flex-col items-end gap-4 mt-12'>
            <button className='p-4 bg-gradient-to-l w-52 from-orange-400 to-orange-700 rounded-lg text-center text-white font-bold cursor-pointer hover:from-orange-700 hover:to-orange-400'>
              Share
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default SharePage