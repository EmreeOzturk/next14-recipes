"use client"

import Image from "next/image"
import { ChangeEvent, useRef, useState } from "react"
const UploadImage = () => {
    const inputRef = useRef<HTMLInputElement>(null)
    const [image, setImage] = useState<File | undefined>(undefined)
    console.log(image)

    const handleImagePicker = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement
        const file: File = (target.files as FileList)[0]
        setImage(file)
    }
    return (
        <div className="flex mt-12 gap-12 items-center justify-center">
            <div className='flex flex-col gap-4 '>
                <label className='text-2xl' htmlFor="image">Image</label>
                <input
                    onChange={handleImagePicker}
                    ref={inputRef}
                    className='p-4 bg-gray-800/60 rounded-lg hidden'
                    accept="image/png, image/jpeg" type="file" id='image' name='image' />
                <button
                    type='button'
                    className=' text-center p-4 bg-gradient-to-l w-52 from-orange-400 to-orange-700 rounded-lg  text-white font-bold cursor-pointer hover:from-orange-700 hover:to-orange-400'
                    onClick={() => inputRef.current?.click()}
                >
                    Upload Image
                </button>

            </div>
            <div>
                {image && <Image src={URL.createObjectURL(image)} alt="uploaded" width={300} height={300} />}
            </div>
        </div>

    )
}

export default UploadImage