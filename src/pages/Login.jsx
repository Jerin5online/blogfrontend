import { Form } from "react-bootstrap";
import signin from "../Assets/signin.png";
import logo from "../Assets/linkspherena.png";
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";
import "aos/dist/aos.css"; 
import { useEffect } from 'react';
import Aos from "aos";


const Login = () => {
  useEffect(()=>{
    Aos.init({duration:1000})
  })

const[email,setEmail]=useState("")
const[password,setPassword]=useState("")
const [error,setError]=useState(false)
const{setUser}=useContext(UserContext)
const navigate=useNavigate()



const handleLogin=async()=>{
  
  try {
    const res = await axios.post(URL+"/api/auth/login",{email,password},{withCredentials:true})
    // console.log(res.data);
    setUser(res.data)
    navigate('/home')
    Swal.fire({
      title: "Succesfully Login !",
      text: ` Wow`,
      icon: "success",
    }); 
if(res.status===200){ sessionStorage.setItem('existinguser', JSON.stringify(res.data));
        sessionStorage.setItem('token',JSON.stringify(res.data._id));
      console.log(res.data);
      }
  } catch (err) {
    setError(true)
    console.log(err);
    Swal.fire({
      title: `Oops`,
      icon: "error",
      text :"Invalid email or pasword"
    });
  }
}

  return (
  //   <div id="loginbg" data-aos="zoom-out-right" className='d-flex justify-content-center align-items-center ' style={{ width: "100%", height: "100vh",overflow:"hidden" }}>
     

  //   <div
  //       className="card bg-info p-4 ps-0 rounded w-50 shadow shadow-1 "
     
  //   >
  //     <div className="row align-items-center">
  //       <div className="col-lg-6">
  //         <img
  //           className="mt-5 mb-5 ms-5 w-100"
  //           src={signin}
  //           alt="no image" 
  //         />
  //       </div>


  //       <div className="col-lg-6">

  //         <div className="d-flex justify-content-center align-items-center flex-column">
  //           <img src={logo} alt="" style={{width:"120px"}} />

  //           <h5 className="ms-5 text-dark">
  //           </h5>
  //           <Form>
             
  //               <Form.Group
  //                 className="mb-3 mt-3 ms-5"
  //                 controlId="formBasicEmail"
  //               >
  //                 <Form.Label className="text-white">
  //                   Enter Username or Email-Id
  //                 </Form.Label>
  //                 <Form.Control
  //                   type="text"
  //                   placeholder="Enter Username or Email-id"
  //                   onChange={(e)=>setEmail(e.target.value)}
  //                 />
  //                 <Form.Text className="text-muted"></Form.Text>
  //               </Form.Group>
              
  //             <Form.Group
  //               className="mb-3 mt-3 ms-5"
  //             >
               
  //               <Form.Text className="text-dark">
  //                 We'll never share your email with anyone else.
  //               </Form.Text>
  //             </Form.Group>
  //             <Form.Group
  //               className="mb-3 ms-5"
  //               controlId="formBasicEmail"
  //             >
  //               <Form.Label className="text-white">Enter Password</Form.Label>
  //               <Form.Control
  //                 type="password"
  //                 placeholder="Enter Password"
  //                 onChange={(e)=>setPassword(e.target.value)}

                 
  //               />
  //               <Form.Text className="text-muted"></Form.Text>
  //             </Form.Group>

             
               
               
  //                <div className="mt-4 ms-5">
  //                 <button
  //                   type="button"
  //                   class="btn btn-dark "
  //                   onClick={handleLogin}
  //                 >
  //                   Login
  //                 </button>
  //                 {error && <h3 className="text-red-500 text-sm">Something went wrong</h3>}
  //                 <p className="text-white mt-3">
  //                   New User ? Click here to{" "}
  //                   <Link
  //                     to={"/register"}
  //                     style={{ color: "blue", textDecoration: "none" }}
  //                   >
  //                     Register
  //                   </Link>
  //                 </p>
  //               </div> 
              
  //           </Form>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  <div id="authbg" class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    <div class="relative py-3 sm:max-w-xl sm:mx-auto">
      <div
        class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
      </div>
      <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div class="max-w-md mx-auto">
          <div>
            <h1 class="text-2xl font-semibold">Welcome to - - Login Form </h1>
          </div>
          <div class="divide-y divide-gray-200">
            <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
              <div class="relative">
                <input  onChange={(e)=>setEmail(e.target.value)} autocomplete="off" id="email" name="email" type="text" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email address" />
                <label for="email" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email Address</label>
              </div>
              <div class="relative">
                <input  onChange={(e)=>setPassword(e.target.value)} autocomplete="off" id="password" name="password" type="password" class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                <label for="password" class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
              </div>
              <div class="relative">
                <button  onClick={handleLogin} class="bg-blue-500 text-white rounded-md px-2 py-1">Login</button>
              </div>
              <p className="text-black mt-3">
                     New User ? Click here to{" "}
                     <Link
                       to={"/register"}
                       style={{ color: "blue", textDecoration: "none" }}
                     >
                       Register
                     </Link>
                   </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login
