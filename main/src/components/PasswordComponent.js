import { useEffect, useState } from "react";
const PaswordComponent=()=>{
    const [newPassword,setNewPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const handleSubmit=(e)=>{
       e.preventDefault();
       if(newPassword!==confirmPassword){
        alert('PAssword and confirm password does not match')
       }
    }
    useEffect(()=>{
        localStorage.setItem('newPassword',JSON.stringify(newPassword))
        localStorage.setItem('confirmPassword',JSON.stringify(confirmPassword))
    })
    return(
        <>
       
        <form className="App" onSubmit={handleSubmit}>
        <h2>Change Password</h2>
        <label htmlFor="newpass">Enter new Password:</label>
        <input type="password" id="newpass" placeholder="password" required autoFocus="" onChange={(e)=>setNewPassword(e.target.value)}/><br></br>
        <label htmlFor="confirmpass">Enter confirm Password:</label>
        <input type="password" id="confirmpass" placeholder=" confirm password" required autoFocus="" onChange={(e)=>setConfirmPassword(e.target.value)}/><br></br>
        <button className="btn btn-success">Submit</button>
        </form>
        </>
    )
}
export default PaswordComponent