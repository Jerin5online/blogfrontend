import { useContext, useEffect, useState } from "react"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ProfilePosts from "../components/ProfilePosts"
import axios from "axios"
import { IF, URL } from "../url"
import { UserContext } from "../context/UserContext"
import { useNavigate, useParams } from "react-router-dom"

const Profile = () => {
    const param=useParams().id
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const {user,setUser}=useContext(UserContext)
    const navigate=useNavigate()
    const [posts,setPosts]=useState([])
    const [updated,setUpdated]=useState(false)
    // console.log(user)
  
  const fetchProfile=async ()=>{
    try{
       const res=await axios.get(URL+"/api/users/"+user._id)
       setUsername(res.data.username)
       setEmail(res.data.email)
       setPassword(res.data.password)
    }
    catch(err){
       console.log(err)
    }
  }
  
  const handleUserUpdate=async ()=>{
    setUpdated(false)
    try{
      const res=await axios.put(URL+"/api/users/"+user._id,{username,email,password},{withCredentials:true})
      // console.log(res.data)
      setUpdated(true)
  
    }
    catch(err){
      console.log(err)
      setUpdated(false)
    }
  
  }
  
  const handleUserDelete=async()=>{
    try{
      const res=await axios.delete(URL+"/api/users/"+user._id,{withCredentials:true})
      setUser(null)
      navigate("/")
      // console.log(res.data)
  
    }
    catch(err){
      console.log(err)
    }
  }
  // console.log(user)
  const fetchUserPosts=async ()=>{
    try{
      const res=await axios.get(URL+"/api/posts/user/"+user._id)
      // console.log(res.data)
      setPosts(res.data)
  
  
    }
    catch(err){
      console.log(err)
    }
  }
  
  useEffect(()=>{
    fetchProfile()
  
  },[param])
  
  useEffect(()=>{
    fetchUserPosts()
  
  },[param])
  return (
    <div>
      <Navbar/>
<div className="min-h-[80vh] px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse md:items-start items-start">
<div className="flex flex-col md:w-[100%] w-full">
<h2 className="text-success">Your Posts</h2>
{posts?.map((p)=>(
            <ProfilePosts key={p._id} p={p}/>
          ))}
</div>

</div>
<div className="flex flex-col space-y-4 md:w-[100] w-full">

<div class="flex flex-col h-screen">
    <div class="grid place-items-center mx-2 my-20 sm:my-auto">
        
    
    
        <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
            px-6 py-10 sm:px-10 sm:py-6 
            bg-light rounded-lg shadow-md lg:shadow-lg">

            <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                Profile
            </h2>

            <div className=" flex flex-col space-y-4 items-start mt-4" method="POST">
            <input onChange={(e)=>setUsername(e.target.value)} value={username} className="outline-none px-4 py-3 text-gray-500 block w-full " placeholder="Your username" type="text"/>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className="outline-none px-4 py-3 text-gray-500 block w-full " placeholder="Your email" type="email"/>

                {/* <button onClick={handleUserUpdate} type="submit" style={{width:"45%"}}
                    class=" py-3  bg-dark rounded-sm
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow">
                    UPDATE
                </button>
                <button onClick={handleUserDelete} type="submit"  style={{width:"45%"}}
                    class=" py-3  bg-dark rounded-sm ms-5 
                    font-medium text-white uppercase
                    focus:outline-none hover:bg-gray-700 hover:shadow-none">
                    DELETE
                </button> */}
                 <div className="flex items-center space-x-4 mt-8">
            <button onClick={handleUserDelete} className="font-semibold px-4 py-2 btn btn-outline-danger rounded">Delete</button>
            <button onClick={handleUserUpdate} className="font-semibold  px-4 py-2 btn btn-outline-success  rounded">Update</button>

          </div>

               {updated && <h6 className="text-success  text-center mt-4">User Updated Successfuly </h6>}
            </div>
        </div>
    </div>
</div>

</div>
      <Footer/>
    </div>
  )
}

export default Profile




