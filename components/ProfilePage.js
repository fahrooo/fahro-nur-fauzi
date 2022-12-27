import Image from "next/image";
import { useEffect } from "react";
import Aos from "aos";
import me from "../public/me.jpg";
import html from "../public/html.png";
import css from "../public/css.png";
import js from "../public/js.png";
import react from "../public/react.png";
import next from "../public/next.png";
import node from "../public/node.png";
import php from "../public/php.png";
import laravel from "../public/laravel.png";
import codeigniter from "../public/codeigniter.png";
import { Element } from "react-scroll";

const ProfilePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Element className="element min-h-screen md:px-10" id="about">
      <div className="p-7">
        <h1
          data-aos="fade-down"
          className="text-white text-3xl md:text-4xl bg-gradient-to-bl from-cyan-500 to-teal-700 w-max rounded-lg px-2 shadow-md shadow-cyan-900 mt-16 md:mt-24"
        >
          ABOUT
        </h1>
        <div className="mt-8 md:grid grid-cols-3 gap-10 justify-center">
          <div className="foto-me" data-aos="fade-right">
            <Image src={me} alt="me" className="w-max rounded-3xl" />
          </div>
          <div className="col-span-2 mt-5 md:mt-0">
            <div className="about-me">
              <p
                data-aos="fade-up"
                className="font-normal text-black text-justify indent-10 md:text-lg dark:text-white"
              >
                <span className="text-2xl font-semibold md:text-4xl mr-1">
                  I
                </span>
                am a Associate Degree Student of Informatics Engineering at
                Sebelas Maret University who is currently doing an internship at
                PT. Pindad (Persero). I have experience in both frontend and
                backend and has several website creation projects. I have a high
                enthusiasm for learning, trained to work in a team or
                individually and always on time.
              </p>
            </div>
            <div className="mt-7 md:grid md:mt-0 lg:grid-cols-3 md:grid-cols-2">
              <div data-aos="fade-up" className="education mb-5">
                <h1 className="text-cyan-700 text-2xl border-b-2 border-cyan-700 w-max mt-4 font-semibold">
                  INTERNSHIP
                </h1>
                <ol className="relative border-l border-cyan-700 mt-2 md:mt-5">
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-cyan-700 rounded-full mt-1.5 -left-1.5 border border-gray-400 dark:border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                      September 2022 - Now
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      PT. PINDAD (Persero)
                    </h3>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-cyan-700 rounded-full mt-1.5 -left-1.5 border border-gray-400 dark:border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                      February 2022 - July 2022
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Diskominfo Sukoharjo
                    </h3>
                  </li>
                </ol>
              </div>
              <div data-aos="fade-up" className="education mb-5">
                <h1 className="text-cyan-700 text-2xl border-b-2 border-cyan-700 w-max mt-4 font-semibold">
                  EDUCATION
                </h1>
                <ol className="relative border-l border-cyan-700 mt-2 md:mt-5">
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-cyan-700 rounded-full mt-1.5 -left-1.5 border border-gray-400 dark:border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                      2020 - Now
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Universitas Sebelas Maret
                    </h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-200">
                      D3 Informatics Engineering
                    </p>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-cyan-700 rounded-full mt-1.5 -left-1.5 border border-gray-400 dark:border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                      2017 - 2020
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                      SMA Negeri 1 Lemahabang
                    </h3>
                  </li>
                  <li className="ml-4">
                    <div className="absolute w-3 h-3 bg-cyan-700 rounded-full mt-1.5 -left-1.5 border border-gray-400 dark:border-white"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-700 dark:text-gray-400">
                      2014 - 2017
                    </time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      SMP Negeri 1 Lemahabang
                    </h3>
                  </li>
                </ol>
              </div>
              <div data-aos="fade-up" className="skill mt-3">
                <h1 className="text-cyan-700 text-2xl border-b-2 border-cyan-700 w-max mb-4 font-semibold">
                  SKILLS
                </h1>
                <div className="justify-center flex">
                  <div>
                    <div className="flex gap-5">
                      <div className="rounded-full bg-gray-200 relative h-24 w-24 hover:bg-gray-300">
                        <Image
                          src={html}
                          alt="html"
                          className="w-20 h-20 ml-2.5 my-2"
                        />
                      </div>
                      <div className="rounded-full bg-gray-200 relative h-24 w-24 hover:bg-gray-300">
                        <Image
                          src={css}
                          alt="css"
                          className="w-20 h-20 ml-2 my-2"
                        />
                      </div>
                      <div className="rounded-full bg-gray-200 relative h-24 w-24 hover:bg-gray-300">
                        <Image
                          src={js}
                          alt="js"
                          className="h-20 w-20 ml-2.5 my-2"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 mt-5">
                      <div className="rounded-full bg-gray-200 relative h-24 w-24 hover:bg-gray-300">
                        <Image
                          src={react}
                          alt="react"
                          className="w-20 h-20 ml-2 my-2"
                        />
                      </div>
                      <div className="rounded-full bg-gray-200 relative h-24 w-24 hover:bg-gray-300">
                        <Image
                          src={next}
                          alt="next"
                          className="w-20 h-20 ml-2 my-2"
                        />
                      </div>
                      <div className="rounded-full bg-gray-200 relative h-24 w-24 hover:bg-gray-300">
                        <Image
                          src={node}
                          alt="node"
                          className="h-20 w-20 ml-2 my-2"
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 mt-5">
                      <div className="rounded-full bg-gray-200 relative h-24 w-24 hover:bg-gray-300">
                        <Image
                          src={php}
                          alt="php"
                          className="w-20 h-20 ml-2 my-2"
                        />
                      </div>
                      <div className="rounded-full bg-gray-200 relative h-24 w-24 hover:bg-gray-300">
                        <Image
                          src={laravel}
                          alt="laravel"
                          className="w-16 h-16 ml-5 my-5"
                        />
                      </div>
                      <div className="rounded-full bg-gray-200 relative h-24 w-24 hover:bg-gray-300">
                        <Image
                          src={codeigniter}
                          alt="codeigniter"
                          className="h-16 w-16 ml-4 my-4"
                        />
                      </div>
                    </div>
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

export default ProfilePage;
