
import {faXmark} from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
  function CloseButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        aria-label="Close modal"
        className="absolute right-1 top-1 z-50  text-white text-2xl bg-orange-500 p-2 lg:p-4 hover:bg-orange-400 transition rounded-md "
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
    );
  }
  

export default function FormModal({children ,isClose ,isOpen ,setIsSuccess}) {
  if(!isOpen) return null

  const handleSubmit = (e) =>{
    e.preventDefault();
    setIsSuccess(true);
    isClose();
  }
 
    return (
      
      <>
      {isOpen && (
      <div className="fixed inset-0  bg-black bg-opacity-40 z-40 flex justify-center items-center mx-4 ">
        <form onSubmit={handleSubmit} className="absolute bg-white flex flex-col  items-center gap-3  lg:gap-9 p-2 mt-12  w-full lg:w-1/2 shadow-xl  rounded-lg">
        <CloseButton onClick={isClose}/> 
          
          {/* Name and Email */}
          <div className=" grid grid-cols-1 lg:flex items-center gap-3 lg:gap-6  pt-1 lg:pt-4">
            <div>
              <label htmlFor="name">Your Name</label>
              <br />
              <input
                id="name"
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
                id="email"
                type="email"
                placeholder="Enter Your Email"
                aria-label="Email label"
                required
                className="bg-gray-200 p-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
              />
            </div>
          </div>
  
          {/* Dates */}
          <div className="grid grid-cols-1 lg:flex items-center gap-3 lg:gap-6 pt-0 lg:pt-4">
            <div>
              <label htmlFor="checkin">Check-in Date</label>
              <br />
              <input
                id="checkin"
                type="date"
                required
                className="bg-gray-200 p-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
              />
            </div>
            <div>
              <label htmlFor="checkout">Check-out Date</label>
              <br />
              <input
                id="checkout"
                type="date"
                required
                className="bg-gray-200 p-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
              />
            </div>
          </div>
  
          {/* Adults and Children */}
          <div className="grid grid-cols-1 lg:flex items-center justify-center gap-3 lg:gap-6 pt-0 lg:pt-4">
            <div>
              <label htmlFor="adults">Adults</label>
              <br />
              <select
                id="adults"
                required
                className="bg-gray-200 p-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
              >
                <option value="">Select Adults</option>
                <option value="1">1 Adult</option>
                <option value="2">2 Adults</option>
                <option value="3">3 Adults</option>
              </select>
            </div>
            <div>
              <label htmlFor="children">Children</label>
              <br />
              <select
                id="children"
                className="bg-gray-200 p-2 w-[250px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
              >
                <option value="">Select Children</option>
                <option value="1">1 Child</option>
                <option value="2">2 Children</option>
                <option value="3">3 Children</option>
              </select>
            </div>
          </div>
         
            <button
                  className="bg-orange-500 text-white p-2 mt-5 w-[75%] hover:bg-orange-400 transition duration-300"
                >
                  BOOK NOW
                </button>
        
      
        </form>
        {children}
      </div>
       )}
      </>
    );
  }
  