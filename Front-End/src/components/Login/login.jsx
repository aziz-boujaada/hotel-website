import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginPage({onLoginSuccess}){
  
  const [loginForm , setLoginForm] = useState({
    email : "" , 
    password : "",
  });

  const [loginMessage , setLoginMessage] = useState("");
  const [loginSuccessMessage , setLoginSuccessMessage] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    const timeOut = setTimeout(()=>{
        setLoginMessage("");
        setLoginSuccessMessage(false);
    } , 6000);
    return () =>{
      clearTimeout(timeOut)
    }
  },[loginMessage , loginSuccessMessage])

  const handleChange = (e) =>{
    setLoginForm({ ...loginForm ,[e.target.name] : e.target.value})
    console.log("login form" , loginForm)
  }

const handleHiddenMessages = () => {
  setLoginMessage("");
  setLoginSuccessMessage(false);
}

   const handleLogin = async (e) => {
     e.preventDefault();

     try{
       
      const response = await axios.post(
        "https://azizboujaada.infinityfreeapp.com/Back-End/login.php" , 
        {...loginForm},
        {
          headers : {
            "Content-Type" : "application/json"
          },
        }
      );

      const result = response.data;
      if(result.success){
        console.log(result)
        setLoginMessage(result.message);
        setLoginSuccessMessage(true);
        onLoginSuccess();
      setTimeout(() =>  navigate("/") ,2000) ;
      }else{
        console.log(result)
        setLoginMessage(result.message);
      }


     }catch(error){
            console.error("error submitted login form " , error)
     }
   }
    return (
        <>


        {loginMessage && (
                    <div
                      className={`  fixed w-full lg:w-1/2  mx-2   top-8 left-3 right-3 lg:left-1/4 lg:right-1/3 transform -translate-x-1/2 py-3 px-6 shadow-lg z-50 flex items-center justify-between text-white text-center p-3 rounded   animate-bounce ${
                        loginSuccessMessage ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {loginMessage}
                      <FontAwesomeIcon
                      onClick={handleHiddenMessages}
                        icon={faXmark}          
                        className="ml-4 p-2 rounded-full bg-white text-black hover:bg-black hover:text-white transition duration-300 cursor-pointer"
                      />
                    </div>
                  )}
             
        <section className="grid grid-cols-1  lg:flex items-center  p-6 m-10 h-full">
    
          
           
          <div className="   my-10 w-full  ">
            <form className="flex flex-col  items-center gap-5  lg:gap-9 p-3 my-12  w-full  bg-white shadow-xl  rounded-lg ">
             
              <h1 className=" text-center text-3xl text-orange-500 font-Parkinsans font-semibold">
                Log in 
              </h1>
    
              {/* Name and Email */}
              <div className=" flex flex-col items-center gap-2   pt-1 ">
               
                <div>
                  <label htmlFor="email">Your Email</label>
                  <br />
                  <input
                    onChange={handleChange}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    aria-label="Email label"
                    required
                    className="bg-gray-200 p-2 w-full lg:w-[400px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
                  />
                </div>

                 <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                onChange={handleChange}
                placeholder="Enter your password"
                id="password"
                name="password"
                type="password"
                required
                className="bg-gray-200 p-2 w-full lg:w-[400px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
              />
            </div>
               <button onClick={handleLogin} className="bg-orange-500 text-white p-2 mt-2 w-full lg:w-[400px] rounded-lg hover:bg-orange-400 transition duration-300" >
           Log in
          </button>

               <button  className="bg-orange-500 text-white p-2 mt-2 w-full lg:w-[400px] rounded-lg hover:bg-orange-400 transition duration-300" >
           Create an account
          </button>
          <h2>forget password ? <span>reset password</span></h2>
              </div>
              </form>
              </div>

               <div className="">
        <img src="/hotel-website/Front-End/public/hotel-carousel-1.jpg" className="w-full h-auto rounded-lg"/>
      </div>
              </section>
              </>
        )      
}