

  export default function BookingSuccessMsg({children ,isSuccess}){

    return(
      
      <div className="fixed w-full md:w-auto  lg:w-auto p-3 mx3 top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white py-3 px-6 rounded shadow-lg z-50">
       Your booking is success ,Welcome to atlas view
       {children}
      </div>
   
      )
  }