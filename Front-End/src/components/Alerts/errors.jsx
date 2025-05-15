export default function ErrorsMessages({ children, message }) {
  return (
    <div className="fixed max-w-[90%] md:max-w-md text-center  p-2 mx-6 top-6 left-3 right-3 lg:left-1/3 lg:right-1/3 transform -translate-x-1/2 bg-red-600 text-white py-3 px-6 rounded shadow-lg z-50 transition-all duration-300 animate-bounce">
      {message || "check your information something wrong !"}
      {children}
    </div>
  );
}
