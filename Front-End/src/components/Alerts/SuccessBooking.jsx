

  export default function BookingSuccessMsg({children}){

    return(
      
      <div className="fixed max-w-[80%] md:max-w-md  p-2 mx-6  text-center top-6 left-3 right-3 lg:left-1/3 lg:right-1/3 transform -translate-x-1/2 bg-green-600 text-white py-3 px-6 rounded shadow-lg z-50 animate-bounce">
       Reservation successful  ,Welcome to ATLAS VIEW
       {children}
      </div>
   
      )
  }