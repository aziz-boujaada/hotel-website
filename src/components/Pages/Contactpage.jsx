import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import HeroSection from "../Sections/HeroSection";
import Footer from "../Sections/Footer";
import AnimationY from "../Animations/AnimationY";
import AnimationX from "../Animations/AnimationX";

export default function ContactPage() {
  return (
    <>
    <HeroSection/>
    
    <div className="bg-gray-50 p-8 min-h-screen mt-10">
      <AnimationX>
      <h1 className="text-4xl font-bold text-center mb-12">
        <span className="text-orange-500">CONTACT</span> For Any Query
      </h1>
      </AnimationX>
      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* contact info and map*/}
        <div className="space-y-8">
          
     <AnimationY>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <h2 className="text-lg font-bold text-orange-500 mb-2">BOOKING</h2>
              <p className="flex flex-col items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-orange-400 mb-2" />
                book@example.com
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-orange-500 mb-2">GENERAL</h2>
              <p className="flex flex-col items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-orange-400 mb-2" />
                info@example.com
              </p>
            </div>

            <div>
              <h2 className="text-lg font-bold text-orange-500 mb-2">TECHNICAL</h2>
              <p className="flex flex-col items-center">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl text-orange-400 mb-2" />
                tech@example.com
              </p>
            </div>
          </div>
         </AnimationY>
          {/* Google Map */}
          <AnimationY>
          <div className="h-64">
            <iframe
              title="Location Map"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2826.017410892949!2d-8.07041622531297!3d31.646772240887742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafeb561919ba65%3A0x3186cec6e6548a77!2sGuiliz!5e1!3m2!1sfr!2sma!4v1745760917384!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          </AnimationY>
        </div>

        {/* form*/}
        <AnimationY>
        <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
          />

          <textarea
            placeholder="Message"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
            rows="5"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-lg font-semibold text-lg transition"
          >
            SEND MESSAGE
          </button>
        </div>
        </AnimationY>
      </div>
    </div>
    
   <Footer/>
    </>
   
  );
}
