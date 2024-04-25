"use client"
import { useFormStatus } from "react-dom"
const ShareButton = () => {
    const { pending } = useFormStatus()
    console.log(status)
    return (
        <div className='flex flex-col items-end gap-4 mt-12'>
            <button
                disabled={pending}
                className='p-4 bg-gradient-to-l w-52 from-orange-400 to-orange-700 rounded-lg text-center text-white font-bold cursor-pointer hover:from-orange-700 hover:to-orange-400'>
                {
                    pending ? 'Sharing...' : 'Share'
                }
            </button>
        </div>
    )
}

export default ShareButton