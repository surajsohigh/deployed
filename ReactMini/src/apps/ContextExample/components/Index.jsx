import React from 'react'
// import Card from './Card'
import { Link } from 'react-router-dom';


function Index() {
  return (
    <div>
        <h2>Home Movie</h2>
        <Link to="movie/card">About Us</Link>
    </div>
  )
}

export default Index