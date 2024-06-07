import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBoxesStacked, faList } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { handletoggleformshow } from './Slices/ToggleFormShowSlice'

const LeftMenuComponent = ({ ToggleViewNormal, ToggleViewList }) => {

    const dispatch = useDispatch()
    //⭐ Subscrining the redux store / state for the toggledesign
    const toggledesign = useSelector(store => store.toggleview.default)
    // ⭐ Subscribing the redux store / stare for the toggleformshow
    const toggleformshow = useSelector(store => store.toggleformshow.default)


    //⭐ Handle Toggle Form Function - We are dispatching a function with payload
    const HandleToggleForm = () => {
        dispatch(handletoggleformshow(!toggleformshow))
    }
    return (
        <>

            <div className='left min-h-screen  w-1/4 bg-[#EAF1F6] py-6 px-8 space-y-9 shadow-lg shadow-gray-400 sticky top-14'>
                <div className='py-8 px-4 bg-white flex rounded-xl justify-start items-center space-x-4 shadow-xl shadow-slate-300'>
                    <div>
                        <img className='rounded-full h-20 w-20 object-center object-cover' src="https://images.unsplash.com/photo-1481214110143-ed630356e1bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29tZW58ZW58MHx8MHx8fDA%3D" alt="" />
                    </div>
                    <div className='text-black'>
                        <h3 className='font-semibold font-Raleway text-2xl'>Hi Reader,</h3>
                        <p>Here's your News</p>
                    </div>
                </div>
                <div className='py-3 px-3 w-full bg-white flex rounded-xl justify-center items-center  flex-col space-y-3  shadow-xl shadow-slate-300'>

                    <h3 className=' font-Raleway text-3xl font-bold text-black text-center'>View Toggle</h3>

                    <div className='h-auto w-full flex justify-between items-center'>
                        <button onClick={() => ToggleViewNormal()} className={`w-full transition-all ease-linear duration-300  py-6 rounded-l-xl text-white ${toggledesign == 'normal_view' ? 'bg-green-600' : 'bg-gray-400'}`}><FontAwesomeIcon className='text-2xl' icon={faBoxesStacked} /></button>
                        <button onClick={() => ToggleViewList()} className={`w-full  transition-all ease-linear duration-300  py-6 rounded-r-xl text-white ${toggledesign === 'list_view' ? 'bg-green-600' : 'bg-gray-400'}`}><FontAwesomeIcon className='text-2xl' icon={faList} /></button>
                    </div>

                </div>
                <div className='py-3 px-6 w-full bg-white flex rounded-xl justify-center items-center  flex-col space-y-3  shadow-xl shadow-slate-300'>

                    <h3 className=' font-Raleway text-3xl font-bold text-black text-center'>Have a Feedback?</h3>

                    <button onClick={() => HandleToggleForm()} className={` hover:bg-black hover:text-white transition-all ease-linear duration-300 text-xl font-bold font-Raleway  py-4 px-5 rounded-xl ${toggleformshow === true ? 'bg-red-400 text-black' : 'text-black bg-green-500'}`}>We're Listening!</button>

                </div>
            </div>
        </>
    )
}

export default LeftMenuComponent
