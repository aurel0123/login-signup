import React, { useState } from 'react'
import user from '../Assets/user.png';
import email from '../Assets/email.png';
import password from '../Assets/password.png'; 
import './LoginSignUp.css'

export const LoginSignUp = () => {
  const  [action, Setaction] = useState("Sign Up") ; 


  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">{action}</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
          {action === "Login" ? <div></div> :  <div className="input">
            <i><img src={user} alt="" srcset="" /> </i>
            <input type="text" placeholder="Username" />
          </div>}
         
          <div className="input">
            <i><img src={email} alt="" srcset="" /></i>
            <input type="email" placeholder="Email"/>
          </div>
          <div className="input">
            <i><img src={password} alt="" srcset="" /></i>
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up"? <div></div>: <div className="Forgot-Password">Lost Password? <span>Click Here</span></div>}
        
        <div className="submit-container">
          <div className={action === "Sign Up" ? "submit btn-background":"submit"} onClick={()=>Setaction("Sign Up")}>SignUp</div>
          <div className={action === "Login" ? "submit btn-background":"submit"} onClick={()=>Setaction("Login")}>Login</div>
        </div>
      </div>
    </>
  )
}
