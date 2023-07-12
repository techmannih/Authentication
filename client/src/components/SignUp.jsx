import { useState } from "react"
// import './App.css';
// import { useNavigate } from 'react-router-dom'

function SignUp() {
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
// const history =useNavigate()

  async function registerUser(e){
    e.preventDefault()
    const response=await fetch(`http://localhost:2345/api/register`,{
      method:'POST',
      headers:{
       'content-type':'application/json',
      },
      body:JSON.stringify({
        name,
        email,
        password,
      }),
    })
  response.json({ extended: false })

    // if(data.status==='ok'){
    //   history.pushState('/login')
    // }
    // console.log(data)
  }
  return (
    <div>
    <h1>SignUp</h1>

 <form >
  <input
  value={name} 
  onChange={(e)=>setName(e.target.value)}
  type="text" 
  placeholder="Name"/>
<br />

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
<input type="submit" value="SignUp"  onChange={registerUser} />
</form>  

    </div>
  );
}

export default SignUp;
