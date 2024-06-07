import React from 'react'

const Pagination = ({ toggledesign, HandlePageClick, HandleNext, HandlePrev, data, page }) => {
    return (
        <>
            <div className={` ${toggledesign === 'normal_view' ? 'w-screen pl-[30rem]' : 'w-full'} flex justify-center items-center py-4 z-40`}>
                <button onClick={() => HandlePrev()} className='py-2 px-4 bg-red-600 text-white'>Prev 6 Card</button>
                {
                    new Array(data.length / 10).fill().map((_, i) => {
                        return (
                            <>
                                <div key={i + 1}>
                                    <span className={`py-2 shadow-md shadow-slate-400 text-lg font-Raleway px-4 bg-white rounded-full mx-1 cursor-pointer ${page === i + 1 ? 'bg-white' : 'bg-gray-500 text-white'}`} onClick={() => HandlePageClick(i + 1)} key={i + 1}>{i + 1}</span>
                                </div>
                            </>
                        )
                    })
                }
                <button onClick={() => HandleNext()} className='py-2 px-4 bg-green-600 text-white'>Next 6 Card</button>
            </div>
        </>
    )
}

export default Pagination
