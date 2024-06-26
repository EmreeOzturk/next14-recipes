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
        if (!file) {
            setImage(undefined)
            return
        }
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
                    accept="image/png, image/jpeg" type="file" id='image' name='image'
                    required
                />

                <button
                    type='button'
                    className=' text-center p-4 bg-gradient-to-l w-52 from-orange-400 to-orange-700 rounded-lg  text-white font-bold cursor-pointer hover:from-orange-700 hover:to-orange-400'
                    onClick={() => inputRef.current?.click()}
                >
                    Upload Image
                </button>

            </div>
            <div className="w-[300px] h-[300px] border-white rounded-md relative">
                {image ? <Image src={URL.createObjectURL(image)} alt="uploaded" className="object-cover" fill /> : <div className='bg-gray-800/60 w-full h-full flex items-center justify-center rounded-md'>
                    <p className='text-white text-center p-4'>No image uploaded</p>
                </div>}
            </div>
        </div>

    )
}

export default UploadImage