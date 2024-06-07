import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import FeedbackForm from './Components/FeedbackForm'

const App = () => {

  return (
    <>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/form' element={<FeedbackForm />} />
      </Routes>

    </>
  )
}

export default App
