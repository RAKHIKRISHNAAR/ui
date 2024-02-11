import React, { useState } from 'react'
import "./mix.css"
import { NavLink } from 'react-router-dom';

const Register = () => {

    const [passShow,setPassShow] =useState(false);
    const [cpassShow,setCPassShow] =useState(false);

    //state to store values

    const [inpval,setInpval]=useState({
        fname:"",
        email:"",
        password:"",
        cpassword:""
    });

    // console.log(inpval);

//for setting value

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

    const addUserdata =(e)=>{

e.preventDefault();

const {fname,email,password,cpassword}=inpval;
//validations

if(fname ===""){
    alert("Please Enter Your Name");
}else if(email ===""){
    alert("Please Enter Your Email");
}
//if user not add the @
else if(!email.includes("@")){
    alert("Enter Valid Email")
}else if(password ===""){
    alert("Enter Password")
}else if(password.length <6){
    alert("Enter must be char")
}
else if(cpassword ===""){
    alert("Enter Confirm Password")
}else if(cpassword.length <6){
    alert("Confirm password must be char")
}else if(password !== cpassword){
    alert("Password and Confirm Password are not match")
}else{
    console.log("user registration successfully done");
}
    }


  return (
    <>
     <section>
        <div className="form_data">
            <div className="form_heading">
                <h1>Sign Up</h1>
                <p>You are using Project Cloud to manage tasks.We hope that you will like it.</p>
            </div>
            <form>
<div className="form_input">
    <label htmlFor="fname">Name</label>
    <input type="text" onChange={setVal} value={inpval.fname} name="fname" id="fname" placeholder="Enter Your Name" />
</div>

<div className="form_input">
    <label htmlFor="email">Email</label>
    <input type="email" onChange={setVal} value={inpval.email} name="email" id="email" placeholder="Enter Your Email Address" />
</div>

<div className="form_input">
    <label htmlFor="password">Password</label>
    <div className="two">
     <input type={!passShow? "password":"text"}  onChange={setVal} value={inpval.password} name="password" id="password" placeholder="Enter Your Password" />
<div className="showpass" onClick={()=>setPassShow(!passShow)}>
    {!passShow?"Show":"Hide"}
</div> 
    </div>
</div>

<div className="form_input">
    <label htmlFor="password">Confirm Password</label>
    <div className="two">
     <input type={!cpassShow? "password":"text"} onChange={setVal}  value={inpval.cpassword}name="cpassword" id="cpassword" placeholder="Confirm Password" />
<div className="showpass" onClick={()=>setCPassShow(!cpassShow)}>
    {!cpassShow?"Show":"Hide"}
</div> 
    </div>
</div>

<button className='btn'onClick={addUserdata}>Sign Up</button>
<p>Already have an account?<NavLink to="/">Log In</NavLink> </p>
            </form>
        </div>
    </section>
    
    </>
  )
}

export default Register