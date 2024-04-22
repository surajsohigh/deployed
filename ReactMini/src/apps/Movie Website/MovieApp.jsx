import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Index from './components/Index'
import Card from './components/Card'
import {AppProvider} from './context/context'
import DetailedCard from './components/DetailedCard'


function MovieApp() {
  
  return (
    <>
      <AppProvider>
            <Routes>
                <Route path=''>
                  <Route path='/' element={<Index/>}/>
                  {/* <Card path=''></Card> */}
                  <Route path='/:id' element={<DetailedCard/>}/>
                  {/* <Route path='*' element></Route> */}
                </Route>
            </Routes>
      </AppProvider> 
    </>
  )
}

export default MovieApp