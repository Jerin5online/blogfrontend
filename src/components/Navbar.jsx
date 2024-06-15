
// import { Link, useLocation, useNavigate } from "react-router-dom"
// import {BsSearch} from 'react-icons/bs'
// import logo from "../Assets/linkspherena.png";
// import {FaBars} from 'react-icons/fa'
// import { useContext, useState } from "react"
// import Menu from "./Menu"
// import { UserContext } from "../context/UserContext"



// const Navbar = () => {
  
//   const [prompt,setPrompt]=useState("")
//   const [menu,setMenu]=useState(false)
//   const navigate=useNavigate()
//   const path = useLocation().pathname
  
//   // console.log(prompt)
  

//   const showMenu=()=>{
//     setMenu(!menu)
//   }
  
   
//     const {user}=useContext(UserContext)
    
//   return (
//     <div>
//           <nav className="bg-gray-800">
//       <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//         <div className="relative flex h-16 items-center justify-between">
//              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start hidden sm:ml-6 sm:block d-flex space-x-4">
//                    <Link to={'/'}><img style={{width:"100px"}}  src={logo} alt="" /></Link>
//                   {path==="/" && <div class="d-flex me-3 ">
//                     <input onChange={(e)=>setPrompt(e.target.value)} className="form-control me-sm-2 rounded" type="search" placeholder="Search a post"/>
//                    <button onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="btn btn-light my-2 my-sm-0 rounded" type="submit">Search</button>
//                     </div>}
//                    <div className="hidden md:flex  md:space-x-4" style={{marginLeft:"650px"}}>
//            {user? <h5 className="mt-1"  ><Link className="text-decoration-none mt-2 text-white"  to="/write">Write</Link></h5> :<h5><Link to="/login" ><button type="button" class="btn btn-outline-success text-white">Login</button></Link></h5>}
//          {user? <div onClick={showMenu} >
//              <p className="mt-1" ><i class="fa-solid fa-bars cursor-pointer fa-lg text-white"></i></p>       
    
//            {menu && <Menu/>}
    
//          </div> :<h5><Link to="/register"><button type="button" class="btn btn-outline-info text-white">Register</button></Link></h5>}
//         </div>
                
           
//           </div>
//           <div onClick={showMenu} className="md:hidden text-lg">
//         <p ><i class="fa-solid fa-bars cursor-pointer fa-lg text-white"></i></p>
//         {menu && <Menu/>}
//         </div>
          
//           </div>
//         </div>
      
    
       
//       </nav>
//       </div>
//   )
// }

// export default Navbar 



import { Link, useLocation, useNavigate } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import Menu from "./Menu"
import { UserContext } from "../context/UserContext"
 import logo from "../Assets/linkspherena.png";



const Navbar = () => {
  const [admin,setadmin]=useState(false)

useEffect(()=>{
    if(JSON.parse(sessionStorage.getItem("existinguser"))._id=="65a6971cbc78dd63f0b85531") {
      setadmin(true)
    }
  },[])
  
    const [prompt,setPrompt]=useState("")
  const [menu,setMenu]=useState(false)
  const navigate=useNavigate()
  const path = useLocation().pathname
  
  // console.log(prompt)
  

  const showMenu=()=>{
    setMenu(!menu)
  }
  
   
    const {user}=useContext(UserContext)
  return (
    // <div>
      
    //   <nav class="navbar navbar-expand-lg bg-primary  " data-bs-theme="dark">
    //     <div class="container-fluid">
    //     <Link to={'/'}><img style={{width:"100px"}}  className="ms-4" src={logo} alt="" /></Link>
    //     {path==="/" && <div class="d-flex me-3 ">
    //       <input onChange={(e)=>setPrompt(e.target.value)} className="form-control me-sm-2 rounded p-2 ms-4 bg-secondary" type="search"  placeholder="Search a post"  />         
    //        <button onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="btn btn-light my-2 my-sm-0 rounded" type="submit">Search</button> 
    //        </div>}
     //      <div className="hidden md:flex ms-4 md:space-x-4" style={{marginLeft:"650px"}}>
    //         {user? <h5 className="mt-1"  ><Link className="text-decoration-none mt-2 text-white"  to="/write"></Link></h5> : <h5><Link to="/login" ><button type="button" class="btn btn-outline-success text-white ms-3">Login</button></Link></h5>}
    //       {user? <div onClick={showMenu} >
    //           <p className="mt-1 me-5" ><i class="fa-solid fa-bars cursor-pointer fa-lg text-white"></i></p>       
    
    //         {menu && <Menu/>}
    
    //       </div> :<h5><Link to="/register"><button type="button" class="btn btn-outline-info text-white me-3">Register</button></Link></h5>}
    //      </div>
    //     </div>
    //     <div onClick={showMenu} className="md:hidden text-lg">
    //     <p ><i class="fa-solid fa-bars cursor-pointer fa-lg text-white"></i></p>
    //      {menu && <Menu/>}
    //      </div>
    //   </nav>






    // </div>
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-primary text-sm py-4">
  <nav class="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
    <div class="flex items-center justify-between">
    </div>
 <Link to={'/'}><img style={{width:"100px"}}  className="ms-4" src={logo} alt="" /></Link>

    { admin?<div>  

    <Link to={'/'} >    <h3 className="text-white text-sm hover:text-gray-500 cursor-pointer">Logout</h3>
</Link>
<h2 style={{fontFamily:"fantasy",color:"yellow"}}>Welcome Admin</h2>      

    </div>
    
    
    : <>
      <div id="navbar-dark" class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
        <div class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
        {path==="/home" && <div class="d-flex me-3 ">
             <input onChange={(e)=>setPrompt(e.target.value)} className="form-control me-sm-2 rounded p-2 ms-4 bg-secondary" type="search"  placeholder="Search a post"  />         
              <button onClick={()=>navigate(prompt?"?search="+prompt:navigate("/"))} className="btn btn-light my-2 my-sm-0 rounded" type="submit">Search</button> 
              </div>} 
     
        {/* <a class="font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Account</a>
        <a class="font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Work</a>
        <a class="font-medium text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Blog</a> */}
        <div className="hidden md:flex md:space-x-4">
             {user? <h5 className="mt-1"  ><Link className="text-decoration-none mt-2 text-white"  to="/write"></Link></h5> : <h5><Link to="/login" ><button type="button" class="btn btn-outline-success text-white ms-3">Login</button></Link></h5>}
           {user? <div onClick={showMenu} >
            <p className="mt-3" ><i class="fa-solid fa-bars cursor-pointer fa-lg text-white"></i></p>       
    
            {menu && <Menu/>}
    
        </div> :<h5><Link to="/register"><button type="button" class="btn btn-outline-info text-white me-3">Register</button></Link></h5>}
       </div>
       </div>
      </div></>   }
      <div onClick={showMenu} className="md:hidden text-lg">
         <p ><i class="fa-solid fa-bars cursor-pointer fa-lg text-white"></i></p>
          {menu && <Menu/>}
        </div>

  </nav>
</header>


  )
}

export default Navbar

