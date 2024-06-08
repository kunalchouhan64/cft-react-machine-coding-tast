import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { handletoggleformshow } from './Slices/ToggleFormShowSlice';
import { useDispatch, useSelector } from 'react-redux';


const FeedbackForm = () => {

    const dispatch = useDispatch()
    // Subscribing the store for the toggle form show
    const toggleformshow = useSelector(store => store.toggleformshow.default)




    // Managing the state...
    const [fname, SetfName] = useState()
    const [lname, SetLName] = useState()
    const [address, SetAddress] = useState()
    const [country, SetCountry] = useState()
    const [emailid, SetEmailID] = useState()
    const [number, SetNumber] = useState()

    //⭐ Handle submit Function for Feedback Form
    const HandleSubmit = (e) => {
        // Preventing the page refreshing...
        e.preventDefault()
        // Checking Email Validation
        const emailregixvalidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(emailid)

        if (emailregixvalidation) {
            //⭐ Setting user Feedback to Local Storage ( User Details API was not Available)
            localStorage.setItem('user-feedback', JSON.stringify({
                firstname: fname,
                lastname: lname,
                address: address,
                country: country,
                emailid: emailid,
                number: number
            }))
            // Emtpy all the states after form submission
            SetfName('')
            SetLName('')
            SetAddress('')
            SetCountry('')
            SetEmailID('')
            SetNumber('')
            // Toast alert message for the success of data submission
            toast('"Feedback Form Submitted Successfully...!"')
        } else {
            alert('Please Enter Details Correctly..!!')

        }


    }
    const HandleToggleForm = () => {
        dispatch(handletoggleformshow(!toggleformshow))
    }
    return (
        <>
            <ToastContainer position='top-center' />
            <div className='font-Raleway p-5 bg-[#EBF2F7] h-auto w-full flex justify-start items-start flex-col'>
                <div className='space-y-1 flex justify-between items-center w-full'>
                    <div>
                        <h2 className='text-3xl font-semibold text-start'>Thank You so for taking the time!</h2>
                        <p className='text-lg text-black'>Please Provide the below Details!</p>
                    </div>
                    <div>
                        <FontAwesomeIcon onClick={() => HandleToggleForm()} className='text-2xl bg-red-700 text-white h-10 w-10 rounded-full cursor-pointer p-2' icon={faClose} />
                    </div>
                </div>
                <form onSubmit={HandleSubmit} className=' w-full md:w-2/3 py-7 space-y-4'>
                    <div className='flex flex-col justify-start items-start space-y-2 py-2'>
                        <label htmlFor="firstname" className='font-semibold text-lg'>First Name:</label>
                        <input required className='bg-white py-3 px-4 outline-none rounded-lg shadow-xl shadow-gray-300 w-3/4 placeholder-black font-Raleway' type="text" value={fname} onChange={(e) => SetfName(e.target.value)} name="firstname" id="firstname" placeholder='John' />
                    </div>
                    <div className='flex flex-col justify-start items-start space-y-2 py-2'>
                        <label htmlFor="lastname" className='font-semibold text-lg'>Last Name:</label>
                        <input required className='bg-white py-3 px-4 outline-none rounded-lg shadow-xl shadow-gray-300 w-3/4 placeholder-black' type="text" value={lname} onChange={(e) => SetLName(e.target.value)} name="lastname" id="lastname" placeholder='Doe' />
                    </div>
                    <div className='flex flex-col justify-start items-start space-y-2 py-2'>
                        <label htmlFor="address" className='font-semibold text-lg'>Address:</label>
                        <input required className='bg-white py-8 px-4 outline-none rounded-lg shadow-xl shadow-gray-300 w-3/4 placeholder-black' type="text" value={address} onChange={(e) => SetAddress(e.target.value)} name="address" id="address" placeholder='Address' />
                    </div>
                    <div className='flex flex-col justify-start items-start space-y-2 py-2'>
                        <label htmlFor="country" className='font-semibold text-lg'>Country:</label>
                        <input required className='bg-white py-3 px-4 outline-none rounded-lg shadow-xl shadow-gray-300 w-3/4 placeholder-black' type="text" value={country} onChange={(e) => SetCountry(e.target.value)} name="country" id="country" placeholder='Country' />
                    </div>
                    <div className='flex flex-col justify-start items-start space-y-2 py-2'>
                        <label htmlFor="email" className='font-semibold text-lg'>Email ID:</label>
                        <input required className='bg-white py-3 px-4 outline-none rounded-lg shadow-xl shadow-gray-300 w-3/4 placeholder-black' type="email" value={emailid} onChange={(e) => SetEmailID(e.target.value)} name="email" id="email" placeholder='Your Email ID' />
                    </div>
                    <div>
                        <label htmlFor="number">Phone Number:</label>
                        <div className='flex space-x-3 justify-start items-center'>
                            <input required value={number} onChange={(e) => SetNumber(e.target.value)} className='bg-white py-3 px-4 outline-none rounded-lg shadow-xl shadow-gray-300 w-3/4 placeholder-black text-lg' type="number" name="number" id="number" placeholder='+91 1234567890' />
                        </div>
                    </div>
                    <button type='submit' className='py-3 px-7 bg-green-700 text-white my-5 font-semibold text-lg rounded-lg'>Submit Feedback</button>
                </form>
            </div>

        </>
    )
}

export default FeedbackForm
