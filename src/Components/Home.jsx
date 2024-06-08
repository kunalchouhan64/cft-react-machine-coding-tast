import React, { useState } from 'react'
import useFetchData from './Hooks/useFetchData'
import { useDispatch, useSelector } from 'react-redux'
import { removecard } from './Slices/DataSlice'

import CardComponent from './CardComponent'
import LeftMenuComponent from './LeftMenuComponent'
import Pagination from './Pagination'
import { handlelistview, handlenormaview } from './Slices/ToggleViewSlice'
import FeedbackForm from './FeedbackForm'

const Home = () => {
    const dispatch = useDispatch()
    //⭐ Calling the hook and fetching the data from API
    const data = useFetchData()
    //⭐ Subscribing the store for the toggle design
    const toggledesign = useSelector(store => store.toggleview.default)
    //⭐ subscribing the store for the toggle from show
    const toggleformshow = useSelector(store => store.toggleformshow.default)
    // console.log(toggleformshow);

    //⭐ Page State for Pagination
    const [page, SetPage] = useState(1);




    //⭐ Function For Page Click Handle Pagination
    const HandlePageClick = (pageclicked) => {
        SetPage(pageclicked)
    }

    //⭐ Function For Handle Next For Pagintion
    const HandleNext = () => {
        if (page >= data.length / 10) {
            SetPage(1)
        } else {
            SetPage(page + 1)
        }
    }

    //⭐ Funtion for Handle Prev For Pagination
    const HandlePrev = () => {

        // ⭐First Logic 
        (page === 1) ? SetPage((data.length / 10)) : SetPage(page - 1)


        // ⭐Second Logic
        // if (page === 1) {

        //     SetPage((data.length / 10))
        // }
        //  else { SetPage(page - 1) }

    }

    // ⭐ Function for handle remove card
    const HandleRemoveCard = (index) => {
        // alert(ITEM.id)
        console.log('clicked...', index)
        dispatch(removecard(index))
    }

    //⭐ Dispatching the function for Normal View
    const ToggleViewNormal = () => {
        dispatch(handlenormaview('normal_view'))
    }

    //⭐ Dispatching the function for List View
    const ToggleViewList = () => {
        dispatch(handlelistview('list_view'))
    }

    return (
        <div className='min-h-screen bg-[#EAF1F6] w-full p-5 text-black font-Raleway flex justify-center items-center'>
            <div className='w-full min-h-screen p-4 flex justify-center items-start gap-10'>
                <LeftMenuComponent ToggleViewList={ToggleViewList} ToggleViewNormal={ToggleViewNormal} toggledesign={toggledesign} />
                <div className='right w-2/3 p-3 space-y-5'>

                    {
                        toggleformshow === true ? <FeedbackForm /> : (

                            data.length <= 0 ? <p className='text-center font-Raleway text-xl'>Loading....(for 5 second)</p> : (
                                <div className={`  ${toggledesign === 'list_view' ? 'space-y-3' : 'grid grid-cols-3 gap-5 place-items-center justify-items-center w-full'} `}>

                                    {
                                        data.slice(page * 6 - 6, page * 6).map((item) => {
                                            return (
                                                <>
                                                    <CardComponent key={item.id} HandleRemoveCard={HandleRemoveCard} item={item} toggledesign={toggledesign} />
                                                </>
                                            )
                                        })
                                    }

                                    <Pagination data={data} page={page} toggledesign={toggledesign} HandlePageClick={HandlePageClick} HandleNext={HandleNext} HandlePrev={HandlePrev} />
                                </div>
                            )

                        )
                    }



                </div>
            </div>
        </div>
    )
}

export default Home
