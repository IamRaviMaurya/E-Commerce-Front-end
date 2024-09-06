import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignup = () => {
  return (
    <div className='login-sign-up'>
      <div className="login-sign-up-container">
        <h1>Sign Up</h1>
        <div className="login-sign-up-fields">
          <input type="tex" placeholder='Your full name' />
          <input type="email" placeholder='Your email' />
          <input type="password" placeholder='Your password' />
        </div>
        <button>Continue</button>
        <p className='login-sign-up-login'>Already have Account? <span> Login here</span></p>
         <div className="login-sign-up-login-agree">
          <input type="checkbox" name=''  id=''/>
          <p>By continue, I agree to the terms and conditions.</p>
         </div>
      </div>
    </div>
  )
}

export default LoginSignup
