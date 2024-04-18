import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContextProvider";

const useSignup=()=> {
    const [loading,setLoading]=useState(false);
    const {authUser,setAuthUser}=useAuthContext();
    const signupfunction=async({fullName,userName,password,confirmPassword,gender})=>{
        console.log("entered")
        if(password!==confirmPassword){
            toast.error("passwords do not match");
            return
        }
        if(password.length<6){
            toast.error("password must be atleast 6 characters");
            return
        }
        setLoading(true)
        try{
            const res=await fetch("/api/auth/signup",{
                method:"POST",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify({fullName,userName,password,confirmPassword,gender})
            })
            const data=await res.json();
            if(data.error){
                throw  new Error(data.error)
            }
            console.log(data)
            //set to localstorage
            localStorage.setItem("userInfo", JSON.stringify(data));
            //set context
            setAuthUser(data)
        }catch(error){
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    };
    return {signupfunction,loading}
}
export default useSignup