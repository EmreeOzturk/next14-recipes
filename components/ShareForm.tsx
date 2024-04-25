"use client"
import { shareForm } from "@/server/actions"
import UploadImage from "./UploadImage"
import ShareButton from "./ShareButton"
import { useFormState } from "react-dom"
const ShareForm = () => {
    const [state, formAction] = useFormState(shareForm as any, { message: null })
    return (
        <form action={formAction}>
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
            <UploadImage />
            <p className="text-4xl text-center font-bold font-sans">
                {state.message}
            </p>
            <ShareButton />
        </form>
    )
}

export default ShareForm