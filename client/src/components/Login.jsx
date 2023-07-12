// import {useState} from "react"
// // import './App.css';

// function Login() {
//   const[email,setEmail]=useState('')
//   const[password,setPassword]=useState('')


//   async function loginUser(e){
//     e.preventDefault()
//     const response=await fetch(`http://localhost:2345/api/login`,{
//       method:'POST',
//       headers:{
//        'content-type':'application/json',
//       },
//       body:JSON.stringify({
//         email,
//         password,
//       }),
//     })
//     const Data =await response.json()
//     console.log(Data)
//   }
//   return (
//     <div>
//     <h1>Login</h1>

//  <form >
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
// <input type="submit" value="login"  onClick={loginUser} />
// </form>  

//     </div>
//   );
// }

// export default Login;
import { useState } from "react"
// import './App.css';


function Login() {
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')


  async function registerUser(e){
    e.preventDefault()
    const response=await fetch(`http://localhost:2345/api/register`,{
      method:'POST',
      headers:{
       'content-type':'application/json',
      },
      body:JSON.stringify({
        email,
        password,
      }),
    })
    
    const data =await response.json({ extended: false })

    if (data.user){
      localStorage.setItem('token',data.user)
      alert("Login successful")
      window.location.href="/"

    }else{
      alert("please your password and username")
    }
    console.log(data)
  }
  return (
    <div>
    <h1>Login</h1>

 <form >
  

 <input 
  value={email} 
  onChange={(e)=>setEmail(e.target.value)}
  type="text" 
  placeholder="Email"/>
<br />

 <input  
  value={password} 
  onChange={(e)=>setPassword(e.target.value)}
  type="text" 
  placeholder="password"/>

<br />
<input type="submit" value="Login"  onClick={registerUser} />
</form>  

    </div>
  );
}

export default Login;
