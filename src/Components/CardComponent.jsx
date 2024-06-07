import React from 'react'

const CardComponent = ({ item, HandleRemoveCard, toggledesign }) => {
  return (
    <>
      <div className={`py-4 px-4 bg-white rounded-xl shadow-xl shadow-gray-300 flex justify-center  ${toggledesign === 'normal_view' ? 'items-start' : 'items-center'} space-y-2 w-fit`} key={item.id}>
        <div className='space-y-2'>
          <p className='font-semibold text-xl'>ID: {item.id}</p>
          <p className='font-semibold text-xl'>Title: {item.title}</p>
          <p>Content: {item.body}</p>

        </div>
        <div className='px-6'>

          <button onClick={() => HandleRemoveCard(item.id)} className='h-12 w-12 rounded-full bg-red-500 text-white flex  justify-center items-center font-bold text-xl'>X</button>

        </div>
      </div>
    </>
  )
}

export default CardComponent
