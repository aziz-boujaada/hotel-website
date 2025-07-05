import axios from "axios";
import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function RegisterForm() {
  
  const [registerSuccessMsg , setRegisterSuccessMsg] = useState(false);
  const [registerMessage , setRegisterMessage] = useState("");
  const [registerForm , setRegisterForm] = useState({
    username: "", 
    email: "", 
    password: "",
    confirm_password: "",
  });

  useEffect(() =>{
    const timeOut = setTimeout(()=>{
      setRegisterMessage("");
      setRegisterSuccessMsg(false)
    } , 6000)
    return () => {
      clearTimeout(timeOut);
    }
  } , [registerSuccessMsg , registerMessage]);

  const handleHiddenRegisterMsg = () =>{
    setRegisterMessage("");
    setRegisterSuccessMsg(false)
  }

  const handleChange = (e) => {
    setRegisterForm({...registerForm , [e.target.name] : e.target.value});
  }
  const handleRegister = async (e) => {
      e.preventDefault();
       
      try{
        
        const response = await axios.post(
           "http://localhost/hotel-website/Back-End/register.php",
           {...registerForm},
           {
            headers : {
                "Content-Type" : "application/json"
            },
           }
        );
         const result = response.data;
      if (result.success) {
        console.log(result)
        setRegisterMessage(result.message)
        setRegisterSuccessMsg(true);
      }else{
        console.log(result)
        setRegisterMessage(result.message);
        setRegisterSuccessMsg(false);
      }

      }catch(error){
        console.error("error submitted  form" , error);
      }
  }

  return (
    <>
      <div className="  pb-10 mx-[25%] m-10 w-1/2 ">
    
       <form
            className="absolute bg-white flex flex-col  items-center gap-3  lg:gap-9 p-2 my-12  w-full lg:w-1/2 shadow-xl  rounded-lg"
          >
       {registerMessage && (
      <div className= {` flex items-center justify-between text-white text-center p-3 rounded w-full  animate-bounce ${registerSuccessMsg ? "bg-green-500" : "bg-red-500"}`}>
        {registerMessage}
        <FontAwesomeIcon icon={faXmark} onClick={handleHiddenRegisterMsg} className="ml-4 p-2 rounded-full bg-white text-black hover:bg-black hover:text-white transition duration-300 cursor-pointer" />
      </div>
    )}
        <h1 className=" text-center text-3xl text-orange-500 font-Parkinsans font-semibold">
          Register
        </h1>
          

            {/* Name and Email */}
            <div className=" grid grid-cols-1 lg:flex items-center gap-3 lg:gap-6  pt-1 lg:pt-4">
              <div>
                <label htmlFor="name">Your Name</label>
                <br />
                <input
                 onChange={handleChange}
                  id="name"
                  name="username"
                  type="text"
                  placeholder="Enter Your Name"
                  aria-label="Name label"
                  required
                  className="bg-gray-200 p-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
                />
              </div>
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
                  className="bg-gray-200 p-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
                />
              </div>
            </div>


                 {/*password*/}
              <div className="grid grid-cols-1 lg:flex items-center gap-3 lg:gap-6 pt-0 lg:pt-4">
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
                  className="bg-gray-200 p-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
                />
              </div>
              <div>
                <label htmlFor="checkout">Confirm password</label>
                <br />
                <input
                onChange={handleChange}
                  placeholder="Confirm your password"
                  id="ConfirmPassword"
                  name="confirm_password"
                  type="password"
                  required
                  className="bg-gray-200 p-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
                />
              </div>
            </div>
            <button
            onClick={handleRegister}
              
              className="bg-orange-500 text-white p-2 mt-5 w-[70%] hover:bg-orange-400 transition duration-300"
            >Register</button>
            </form>
      </div>
    </>
  );
}
