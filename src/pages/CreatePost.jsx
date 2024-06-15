
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {ImCross} from 'react-icons/im'
import { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { URL } from '../url'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const CreatePost = () => {
   
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [file,setFile]=useState(null)
    const {user}=useContext(UserContext)
    const [cat,setCat]=useState("")
    const [cats,setCats]=useState([])
   console.log(file);
    const navigate=useNavigate()

    const deleteCategory=(i)=>{
       let updatedCats=[...cats]
       updatedCats.splice(i)
       setCats(updatedCats)
    }

    const addCategory=()=>{
        let updatedCats=[...cats]
        updatedCats.push(cat)
        setCat("")
        setCats(updatedCats)
    }

    const handleCreate=async (e)=>{
        e.preventDefault()
        const post={
          title,
          description,
          username:user.username,
          userId:user._id,
          categories:cats
        }

        if(file){
          const data=new FormData()
          const filename=Date.now()+file.name
          data.append("img",filename)
          data.append("file",file)
          post.photo=filename
           console.log(data)
          //img upload
          try{
            const imgUpload=await axios.post(URL+"/api/upload",data)
            // console.log(imgUpload.data)
          }
          catch(err){
            console.log(err)
          }
        }
        //post upload
        // console.log(post)
        try{
          const res=await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
          navigate("/posts/post/"+res.data._id)
          // console.log(res.data)

        }
        catch(err){
          console.log(err)
        }
    }



  return (
         <div>
             <Navbar/>

         <div id='createbg' className='px-6 md:px-[200px] mb-5 d-flex flex-column justify-center align-items-center'>
           <div>
<div class="heading text-center  text-3xl m-5 mb-3 text-gray-800 " style={{fontFamily:""}}> Create New Post</div>
           </div>
         {/* <form className='w-full flex flex-col space-y-4 md:space-y-8 d-flex flex-column justify-center align-items-center border w-50 rounded shadow mb-5'>
           <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none mt-5 border border-dark rounded w-75'/>
           <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className='px-4'/>
       <div className='flex flex-col'>
             <div className='flex items-center space-x-4 md:space-x-8'>
                 <input value={cat} onChange={(e)=>setCat(e.target.value)} className='px-4 py-2  outline-none border border-dark rounded ' placeholder='Enter post category' type="text"/>
                 <div onClick={addCategory} className='bg-black text-white px-4 py-2 font-semibold cursor-pointer ms-3 rounded'>Add</div>
             </div> */}

           {/* <div className='flex px-4 mt-3'>
             {cats?.map((c,i)=>(
                 <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                <p>{c}</p>
                 <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
             </div>
            ))} */}
            
             {/* </div>
           </div>
           <textarea onChange={(e)=>setDescription(e.target.value)} className="description bg-gray-100 sec p-3 h-30 w-75 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>

           <button onClick={handleCreate} className=' btn btn-outline-dark w-full md:w-[20%] mx-auto text-white font-semibold px-4 py-2 md:text-xl text-lg mb-3 rounded'>Create</button>
         </form> */}


<div class="container">
        <div class="d-flex justify-content-center align-items-center">
            <form action="" class="row  g-4 w-75 rounded-3 shadow p-5 mt-2 text-white">
                <div class="col-md-6">
                    <label   for="" class="form-label">Enter Post Titile</label>
                    <input onChange={(e)=>setTitle(e.target.value)} class="form-control" type="text" placeholder="Enter Post Title"/>
                </div>
                <div class="col-md-6">
                    <label for="" class="form-label ms-3  ">Choose File</label>
                    <input className='ms-3' onChange={(e)=>setFile(e.target.files[0])} type="file"/>
                </div>
                <div class="col-md-12">
                    <label for="" class="form-label">Category</label>
                    <input value={cat} onChange={(e)=>setCat(e.target.value)} class="form-control" type="text" placeholder="Enter Post Category"/>
                    <div onClick={addCategory} className='bg-black mt-3 pt-2 pb-2 w-25 text-white font-semibold cursor-pointer rounded text-align-center d-flex justify-center'> Add</div>

                </div>
                <div className='flex px-4 mt-3'>
             {cats?.map((c,i)=>(
                 <div key={i} className='flex text-blac justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
                <p>{c}</p>
                 <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
             </div>
            ))}
            </div>
                <div class="col-md-12">
                <textarea onChange={(e)=>setDescription(e.target.value)} className="description text-black bg-gray-100 sec p-3 h-30 w-100 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
                </div>
                <div class="col-12 text-center">
                    <button onClick={handleCreate} type="submit" class="btn btn-light btn-outline-success w-25">Create</button>
                </div>
            </form>
        </div>
    </div>

        </div>
     </div>


// {/* <div id='createbg' class="flex items-center justify-center p-12">


// <div class="mx-auto w-full max-w-[550px]">
// <div class="heading text-center font-bold text-2xl  mb-3 text-gray-800 " style={{fontFamily:"fantasy"}}> Create New Post</div>

//   <form >
//     <div class="mb-2">
//       <label
//         for="name"
//         class="mb-2 block text-base font-medium text-[#07074D]"
//       >
//         Enter Post Title
//       </label>
      
//      <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter post title' className='w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md'/>

//     </div>

//     <div class="mb-4 mt-4">
      
//     <input onChange={(e)=>setFile(e.target.files[0])} type="file"  className='px-4'/>
     
      
//     </div>
    
//     <div class="mb-2">
//       <label
//         for="email"
//         class="mb-2 block text-base font-medium text-[#07074D]"
//       >
//        Post Category
//       </label>
     
//      <input value={cat} onChange={(e)=>setCat(e.target.value)} className='w-75 rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md' placeholder='Enter post category' type="text"/>

//      <div onClick={addCategory} className='hover:shadow-form rounded-md bg-[#f55a3f] py-3 px-8 ms-3 text-base font-semibold text-white outline-none'>Add</div>

//     </div>
//       {/* categories */}
//       <div className='flex px-4 mt-3'>
//               {cats?.map((c,i)=>(
//                   <div key={i} className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
//                  <p>{c}</p>
//                  <p onClick={()=>deleteCategory(i)} className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
//               </div>
//              ))}
//     </div>
//     <div class="">
//       <label onChange={(e)=>setDescription(e.target.value)}
//         for="message"
//         class="mb-3 block text-base font-medium text-[#07074D]"
//       >
//         Message
//       </label>
//       <textarea
//         rows="4"
//         name="message"
//         id="message"
//         placeholder="Type your message"
//         class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
//       ></textarea>
//     </div>
//     <div>
//       <button onClick={handleCreate}
//         class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
//       >
//         Submit
//       </button>
//     </div>
//   </form>
// </div>
// </div> */}

  )
}

export default CreatePost