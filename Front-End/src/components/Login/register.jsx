import axios from "axios";
import { useEffect, useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


export default function RegisterForm({onSuccess}) {
  const [isLoading, setIsLoading] = useState(false);
  const [registerSuccessMsg, setRegisterSuccessMsg] = useState(false);
  const [registerMessage, setRegisterMessage] = useState("");
  const [registerForm, setRegisterForm] = useState({
    username: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setRegisterMessage("");
      setRegisterSuccessMsg(false);
    }, 6000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [registerSuccessMsg, registerMessage]);

  const handleHiddenRegisterMsg = () => {
    setRegisterMessage("");
    setRegisterSuccessMsg(false);
  };

  const handleChange = (e) => {
    setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
  };
  
  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await axios.post(
        "http://localhost/hotel-website/Back-End/register.php",
        { ...registerForm },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const result = response.data;
      if (result.success) {
        setRegisterForm({
          username: "",
          email: "",
          password: "",
          confirm_password: "",
        });
        setTimeout(() => {
          console.log(result);
          setRegisterMessage(result.message);
          setRegisterSuccessMsg(true);
          setIsLoading(false);
        }, 3000);
         onSuccess()           
        navigate("/login");

       
      } else {
        setTimeout(() => {
          console.log(result);
          setRegisterMessage(result.message);
          setRegisterSuccessMsg(false);
          setIsLoading(false);
        }, 3000);
      }
    } catch (error) {
      console.error("error submitted  form", error);
    }
  };

  return (
    <>
          {registerMessage && (
            <div
              className={`  fixed w-full lg:w-1/2  mx-2   top-8 left-3 right-3 lg:left-1/4 lg:right-1/3 transform -translate-x-1/2 py-3 px-6 shadow-lg z-50 flex items-center justify-between text-white text-center p-3 rounded   animate-bounce ${
                registerSuccessMsg ? "bg-green-500" : "bg-red-500"
              }`}
            >
              {registerMessage}
              <FontAwesomeIcon
                icon={faXmark}
                onClick={handleHiddenRegisterMsg}
                className="ml-4 p-2 rounded-full bg-white text-black hover:bg-black hover:text-white transition duration-300 cursor-pointer"
              />
            </div>
          )}
    <section className="grid grid-cols-1  lg:flex items-center  p-6 m-10 ">

      
       
      <div className="   my-10 w-full  ">
        <form className="flex flex-col  items-center gap-5  lg:gap-9 p-2 my-12  w-full  bg-white shadow-xl  rounded-lg ">
         
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
            disabled={isLoading}
            className="bg-orange-500 text-white p-2 mt-5 w-[70%] hover:bg-orange-400 transition duration-300"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Registering...
              </span>
            ) : (
              "Register"
            )}
          </button>
        </form>
      </div>

      <div className=" ">
        <img src="/hotel-website/Front-End/public/hotel-carousel-1.jpg" className="w-full h-[50vh] rounded-lg"/>
      </div>
      </section>
    </>
  );
}
