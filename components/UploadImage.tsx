"use client"

import { useRef } from "react"
const UploadImage = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div className='flex flex-col gap-4 mt-12'>
            <label className='text-2xl' htmlFor="image">Image</label>
            <input ref={inputRef} className='p-4 bg-gray-800/60 rounded-lg hidden' type="file" id='image' name='image' />
            <button
                type='button'
                className=' text-center p-4 bg-gradient-to-l w-52 from-orange-400 to-orange-700 rounded-lg  text-white font-bold cursor-pointer hover:from-orange-700 hover:to-orange-400'
                onClick={() => inputRef.current?.click()}
            >
                Upload Image
            </button>
        </div>
    )
}

export default UploadImage