import React, { useState } from 'react'
import "./mix.css"
import { NavLink } from 'react-router-dom';

const Login = () => {
//create a state for showing/hiding password
    const [passShow,setPassShow] =useState(false);

     //state to store values

     const [inpval,setInpval]=useState({
        email:"",
        password:"",
        // cpassword:""
    });

    // console.log(inpval);

    const setVal =(e)=>{
        // console.log(e.target.value);
        // e varunna value ah state il store chyunn
        
        const {name,value} =e.target;
        
        setInpval(()=>{
            return{
                //bcoz we need the initial value & the input from user,thts y we use spread operator
        ...inpval,
        [name]:value
            }
        })
            };

            const loginuser =(e)=>{
e.preventDefault();

const {email,password}=inpval;
 if(email ===""){
    alert("Please Enter Your Email");
}
//if user not add the @
else if(!email.includes("@")){
    alert("Enter Valid Email")
}else if(password ===""){
    alert("Enter Password")
}else if(password.length <6){
    alert("Enter must be char")
}else{
    console.log("user login successfully done");
}
            }


  return (
    <>
    <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>Welcome Back,Log In</h1>
                <p>Hi,We are glad that you are back.Please Login</p>
            </div>
            <form>
<div className="form_input">
    <label htmlFor="email">Email</label>
    <input type="email" value={inpval.email} onChange={setVal} name="email" id="email" placeholder="Enter Your Email Address" />
</div>

<div className="form_input">
    <label htmlFor="password">Password</label>
    <div className="two">
     <input type={!passShow? "password":"text"}  value={inpval.password} onChange={setVal} name="password" id="password" placeholder="Enter Your Password" />
<div className="showpass" onClick={()=>setPassShow(!passShow)}>
    {!passShow?"Show":"Hide"}
</div> 
    </div>
</div>

<button className='btn' onClick={loginuser}>Login</button>
<p>Don't have an account? <NavLink to="/register">Sign Up</NavLink></p>
            </form>
        </div>
    </section>
    </>
  )
}

export default Login