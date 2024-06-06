import React from 'react'

const Modal = ({ closeModal }) => {
    return (
        <div className='absolute left-0 right-0 top-0 bottom-0 backdrop-blur-sm flex items-center justify-center py-3 px-3'>
            <div className='md:w-2/5 backdrop-blur-sm bg-blue-200 px-4 py-3 rounded-md'>
                <h3 className='text-2xl font-semibold font-mono  mb-4'>Download free ebooks</h3>
                <p className='text-lg mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit fugit sunt. t vero unde. Nihil porro, repellat cum eligendi consequuntur molestiae.</p>
                <div className='flex end'>
                    <button onClick={() => closeModal(false)} className='bg-red-500 text-white px-4 py-2 text-lg rounded-md mr-4 hover:bg-red-400 transition-all'>Cancel</button>
                    <button className='bg-green-500 text-white px-4 py-2 text-lg rounded-md hover:bg-green-400 transition-all'>Download</button>
                </div>
                <button onClick={() => closeModal(false)} className='absolute top-1 right-4 text-lg font-semibold'>&#x2716;</button>
            </div>
        </div>
    )
}

export default Modal