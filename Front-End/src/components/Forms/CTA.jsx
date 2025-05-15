// CTA buttons
export default function CallToActionButtons() {
  return (
    <>
      <div className="grid grid-cols-1 lg:flex items-center justify-center gap-6 my-10 mx-6 ">
        <button
          className=" w-full lg:w-1/2  bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 lg:px-4  lg:mx-2 transition duration-300"
          aria-label="View rooms button"
        >
          OUR ROOMS
        </button>
        <button
          className="w-full lg:w-1/2 bg-white hover:bg-gray-200 text-indigo-900 font-bold py-4 lg:px-4  lg:mx-2 transition duration-300"
          aria-label="Book a room button"
        >
          BOOK A ROOM
        </button>
      </div>
    </>
  );
}