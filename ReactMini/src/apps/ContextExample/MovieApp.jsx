import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Index from './components/Index'
import Card from './components/Card'
import {AppProvider} from './context/context'


function MovieApp() {
  
  return (
    <>
    <h2>iugi</h2>
      <AppProvider>
            <Routes>
                <Route path=''>
                  <Route path='/' element={<Index/>}></Route>
                  {/* <Route path=''></Route> */}
                  <Route path='/:id' element={<Card/>}></Route>
                  {/* <Route path='*' element></Route> */}
                </Route>
            </Routes>
      </AppProvider> 
    </>
  )
}

export default MovieApp