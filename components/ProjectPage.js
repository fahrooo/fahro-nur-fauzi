import Image from "next/image";
import Aos from "aos";
import fidem from "../public/fidem.png";
import stace from "../public/stace.png";
import spbe from "../public/spbe.png";
import kpi from "../public/kpi.png";
import { Element } from "react-scroll";
import { useEffect } from "react";

const ProjectPage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <Element className="element min-h-screen md:px-10" id="projects">
      <div className="p-7">
        <div className="py-12 md:mt-16">
          <div className="mt-2">
            <h1
              data-aos="fade-down"
              className="text-white mb-7 text-3xl md:text-4xl bg-gradient-to-bl from-cyan-500 to-teal-700 w-max rounded-lg px-2 shadow-md shadow-cyan-900"
            >
              PROJECTS
            </h1>
            <div className="justify-center items-center grid lg:grid-cols-4 md:grid-cols-2 gap-6 md:gap-10 md:mt-16 mt-7">
              <div data-aos="fade-up">
                <div className="hover:-translate-y-2 hover:scale-105 duration-700 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600">
                  <Image
                    src={fidem}
                    alt="fidem"
                    className="rounded-t-lg h-44"
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-teal-700">
                      FIDEM Express
                    </h5>
                    <p className="text-gray-600 dark:text-gray-200">
                      FIDEM Express is a goods delivery service website to
                      simplify the process of sending goods.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className="hover:-translate-y-2 hover:scale-105 duration-700 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600">
                  <Image
                    src={stace}
                    alt="stace"
                    className="rounded-t-lg h-44"
                  />
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-teal-700">
                      StAce Course
                    </h5>
                    <p className="text-gray-600 dark:text-gray-200">
                      StAce Course is an online learning platform that has
                      various courses and their tutors.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className="hover:-translate-y-2 hover:scale-105 duration-700 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600">
                  <Image src={spbe} alt="spbe" className="rounded-t-lg h-44" />
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-teal-700">
                      Sistem Manajemen SPBE
                    </h5>
                    <p className="text-gray-600 dark:text-gray-200">
                      Sistem Manajemen SPBE is an information technology-based
                      system that is used to manage knowledge.
                    </p>
                  </div>
                </div>
              </div>
              <div data-aos="fade-up">
                <div className="hover:-translate-y-2 hover:scale-105 duration-700 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-600">
                  <Image src={kpi} alt="kpi" className="rounded-t-lg h-44" />
                  <div className="p-5">
                    <h5 className="mb-2 text-xl font-bold tracking-tight text-teal-700">
                      KPI Pindad
                    </h5>
                    <p className="text-gray-600 dark:text-gray-200">
                      KPI is a measuring tool that describes a company`s
                      effectiveness in achieving its business goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ProjectPage;
