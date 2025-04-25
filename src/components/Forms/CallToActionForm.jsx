// CALL TO ACTION FORM
import AnimationX from "../Animations/AnimationX";
export default function CallToActionForm() {
    return (
      <>
        <AnimationX>
          <section className="CTA_form absolute z-30 left-1/2 bottom-[-50px] transform -translate-x-1/2 bg-white p-8 rounded-lg shadow-2xl  md:w-auto flex justify-center">
            <form action="">
              <div className="form_inputs relative  flex justify-center gap-12">
                <input
                  type="date"
                  required
                  className="bg-gray-200 p-2 w-[180px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
                />
                <input
                  type="date"
                  required
                  className="bg-gray-200 p-2 w-[180px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
                />
                <select
                  name=""
                  id=""
                  required
                  className="bg-gray-200 p-2 w-[180px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
                >
                  <option value="">Adults</option>
                  <option value=""> 1 Adult </option>
                  <option value="">2 Adults</option>
                  <option value=""> 3 Adults </option>
                </select>
  
                <select
                  name=""
                  id=""
                  required
                  className="bg-gray-200 p-2 w-[180px] focus:outline-none focus:ring-2 focus:ring-orange-500 rounded transition duration-300"
                >
                  <option value="">Childs</option>
                  <option value=""> 1 Child </option>
                  <option value="">2 Childs </option>
                  <option value="">3 Child </option>
                </select>
                <button
                  type="submit"
                  className="bg-orange-500 p-2 w-[160px] hover:bg-orange-400 transition duration-300"
                >
                  submit
                </button>
              </div>
            </form>
          </section>
        </AnimationX>
      </>
    );
  }