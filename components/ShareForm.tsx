
import UploadImage from "./UploadImage"
const ShareForm = () => {
    return (
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
           <UploadImage />
            <div className='flex flex-col items-end gap-4 mt-12'>
                <button className='p-4 bg-gradient-to-l w-52 from-orange-400 to-orange-700 rounded-lg text-center text-white font-bold cursor-pointer hover:from-orange-700 hover:to-orange-400'>
                    Share
                </button>
            </div>
        </form>
    )
}

export default ShareForm