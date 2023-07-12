import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


// import {useState} from "react"
// import './App.css';

// function App() {
//   const[name,setName]=useState('')
//   const[email,setEmail]=useState('')
//   const[password,setPassword]=useState('')


//   async function registerUser(e){
//     e.preventDefault()
//     const response=await fetch(`http://localhost:2345/api/register`,{
//       method:'POST',
//       headers:{
//        'content-type':'application/json',
//       },
//       body:JSON.stringify({
//         name,
//         email,
//         password,
//       }),
//     })
//     const data =await response.json()
//     console.log(data)
//   }
//   return (
//     <div>
//     <h1>Register</h1>

//  <form >
//   <input
//   value={name} 
//   onChange={(e)=>setName(e.target.value)}
//   type="text" 
//   placeholder="Name"/>
// <br />

//  <input 
//   value={email} 
//   onChange={(e)=>setEmail(e.target.value)}
//   type="text" 
//   placeholder="Email"/>
// <br />

//  <input  
//   value={password} 
//   onChange={(e)=>setPassword(e.target.value)}
//   type="text" 
//   placeholder="password"/>

// <br />
// <input type="submit" value="Register"  onClick={registerUser} />
// </form>  

//     </div>
//   );
// }

// export default App;
