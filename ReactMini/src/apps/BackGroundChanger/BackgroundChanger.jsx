import React, { useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";


function BackgroundChanger() {
    const [bgcolor, setBgcolor] = useState("bg-white")
    const [textcolor, setTextColor] = useState("text-black")
    

    function bcChangeHandler() {
        bgcolor === "bg-white" ? setBgcolor("bg-black") : setBgcolor("bg-white")
        textcolor === "text-black" ? setTextColor("text-white") : setTextColor("text-black")

    }
  return (
    <div className={`${bgcolor} w-screen h-screen ${textcolor} flex flex-col items-center justify-center`}>
        <h2 className='font-bold text-4xl p-9'>Theme Changer</h2>
        <div className='border py-4 px-7 rounded-md border-gray-500 text-3xl font-semibold cursor-pointer'
        onClick={() => {bcChangeHandler()}} >
                {
                    bgcolor === 'bg-white' ? <MdDarkMode /> : <IoSunnyOutline />
                }
            
            

        </div>
    </div>
  )
}

export default BackgroundChanger