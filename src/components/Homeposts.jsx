/* eslint-disable react/prop-types */
import Aos from 'aos';
import {IF} from '../url'
import "aos/dist/aos.css"; 
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios"




const HomePosts = ({post}) => {
  const postId=useParams().id

  const handleDeletePost=async ()=>{

    try{
      const res=await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
      console.log(res.data)

    }
    catch(err){
      console.log(err)
    }

  }
 

  useEffect(()=>{
    Aos.init({duration:1000})
  })
  return (
    <div  data-aos="zoom-in" className="w-full flex mt-8 space-x-4 border border-dark-6 p-4 rounded shadow" >
    {/* left */}
    <div className="w-[35%] h-[200px] flex justify-center items-center">
    <img src={IF+post.photo} alt="" className="h-full w-full object-cover"/>
    </div>
    {/* right */}
    <div className="flex flex-col w-[65%] ">
      <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
    {post.title}
      </h1>
      <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
       <p>@{post.username}</p>
       <div className="flex space-x-2 text-sm">
       <p>{new Date(post.updatedAt).toString().slice(0,15)}</p>
       <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
       </div>
      </div>
      <p className="text-sm md:text-lg text-dark">{post.description.slice(0,200)+" ...Read more"}</p>
    </div>
    <div>

    </div>


    </div>
  )
}

export default HomePosts
