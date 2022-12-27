import { Element } from "react-scroll";
import {
  MdEmail,
  MdPerson,
  MdSend,
  MdOutlineLocationOn,
  MdOutlineCall,
  MdOutlineEmail,
} from "react-icons/md";
import { HiPencil } from "react-icons/hi";
import Aos from "aos";
import { useEffect } from "react";

const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Element className="element min-h-screen md:px-10" id="contact">
      <div className="p-7">
        <div className="mt-14 md:mt-32">
          <h1
            data-aos="fade-down"
            className="text-white mb-7 text-3xl md:text-4xl bg-gradient-to-bl from-cyan-500 to-teal-700 w-max rounded-lg px-2 shadow-md shadow-cyan-900"
          >
            CONTACT
          </h1>
          <div className="content mt-10 md:flex gap-4 md:mt-20 md:px-16">
            <div
              className="iformation-contact md:w-[60%] md:mt-0"
              data-aos="fade-up"
            >
              <ul className="space-y-4 md:space-y-16">
                <li className="flex">
                  <div className="bg-teal-600 text-white md:text-4xl text-2xl rounded-full md:w-16 md:h-16 w-12 h-12 flex justify-center items-center hover:bg-teal-700">
                    <MdOutlineLocationOn />
                  </div>
                  <div className="ml-4 flex flex-col justify-center">
                    <h1 className="text-black text-[16px] font-semibold md:text-2xl dark:text-white">
                      Location
                    </h1>
                    <p className="text-gray-500 text-[14px] md:text-[18px] dark:text-gray-400">
                      Cirebon, West Java, Indonesia
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-teal-600 text-white md:text-4xl text-2xl rounded-full md:w-16 md:h-16 w-12 h-12 flex justify-center items-center hover:bg-teal-700">
                    <MdOutlineEmail />
                  </div>
                  <div className="ml-4 flex flex-col justify-center">
                    <h1 className="text-black text-[16px] font-semibold md:text-2xl dark:text-white">
                      Email
                    </h1>
                    <p className="text-gray-500 text-[14px] md:text-[18px] dark:text-gray-400">
                      fahronurf@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-teal-600 text-white md:text-4xl text-2xl rounded-full md:w-16 md:h-16 w-12 h-12 flex justify-center items-center hover:bg-teal-700">
                    <MdOutlineCall />
                  </div>
                  <div className="ml-4 flex flex-col justify-center">
                    <h1 className="text-black text-[16px] font-semibold md:text-2xl dark:text-white">
                      Phone
                    </h1>
                    <p className="text-gray-500 text-[14px] md:text-[18px] dark:text-gray-400">
                      (+62) 853-2244-8008
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="form-contact md:w-full mt-10 md:mt-0"
              data-aos="fade-up"
            >
              <div className="md:grid grid-cols-2">
                <div>
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center hover:bg-teal-700 pl-3 pointer-events-none">
                      <MdPerson className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="text"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                      placeholder="Your Name"
                    />
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-4">
                  <div className="relative">
                    <div className="flex absolute inset-y-0 left-0 items-center hover:bg-teal-700 pl-3 pointer-events-none">
                      <MdEmail className="w-5 h-5 text-gray-500" />
                    </div>
                    <input
                      type="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center hover:bg-teal-700 pl-3 pointer-events-none">
                    <HiPencil className="w-5 h-5 text-gray-500" />
                  </div>
                  <input
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                    placeholder="Subject"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="relative">
                  <textarea
                    id="message"
                    rows="5"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>
              </div>
              <div className="mt-4 md:mt-10 flex justify-center">
                <button
                  type="button"
                  className="text-white bg-teal-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-teal-700"
                >
                  Send Message
                  <MdSend className="ml-2 -mr-1 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactPage;
