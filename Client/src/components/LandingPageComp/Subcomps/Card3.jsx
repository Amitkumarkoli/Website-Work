import React, { useState, useEffect } from 'react'
import {useNavigate} from "react-router-dom"
import Star from './Star'

/* Image */
import { getImage } from '../../../apis/apis'

const Card3 = ({imageId, img, discount, title, mainPrice, prevPrice,rating, reviews }) => {
    const [visible, setvisible] = useState(false)
    const navigate=useNavigate()

    return (
        <div className='h-full w-[21vw] rounded-lg relative flex flex-col justify-center items-center font-[Helvetica]'>
            <div onMouseOver={() => { setvisible(true) }} onMouseLeave={() => { setvisible(false) }} className="card h-[50vh] w-full bg-[#F5F5F5] relative flex justify-center items-center cursor-pointer hover:scale-95 transition-all ease-in-out duration-500">
                <div onClick={()=>navigate(`/gallery/${imageId}`)} className="image absolute w-28 h-28"><img src={`${getImage}/${img}`} alt="" /></div>
                <div className="icons w-full flex justify-between items-start h-full p-3">
                    <div className="off bg-[#ED8A73] px-4 py-1 rounded-md text-white">{discount}%</div>
                    <div className="mainicons flex flex-col gap-2 justify-center items-center">
                        <div className="love p-2 bg-white rounded-full"><img src="src/assets/heart small.png" alt="" /></div>
                        <div className="love p-2 bg-white rounded-full"><img src="src/assets/Quick View.png" alt="" /></div>
                    </div>
                </div>
                <div className={visible ? "transition-all z-20 duration-700 ease-in-out opacity-100 add absolute bottom-0 bg-black text-white w-full justify-center flex py-4 rounded-b-md text-xl" : "transition-all z-20 duration-700 ease-in-out  add absolute bottom-[-60px] bg-black text-white w-full justify-center flex py-4 rounded-b-md text-xl opacity-0"}>Add to Cart</div>
            </div>
            <div className="tags w-full flex flex-col justify-center items-start gap-1 py-2 relative z-30 bg-white">
                <div onClick={()=>navigate(`/gallery/${imageId}`)} className="title text-lg font-semibold transition-all duration-500 hover:scale-105 ease-in-out cursor-pointer">{title}</div>
                <div className="price flex justify-center items-center gap-2 font-medium">
                    <div className="main text-[#DB4444]">{mainPrice}</div>
                    <div className="prev line-through text-gray-600">{prevPrice}</div>
                </div>
                <div className="rating flex justify-center items-center gap-3">
                    <div className="rates flex justify-center items-center gap-1">
                        <Star rating={rating} reviews={reviews}/>
                    </div>
                    <div className="title text-gray-600">({reviews} reviews)</div>
                </div>
            </div>
        </div>
    )
}

export default Card3
