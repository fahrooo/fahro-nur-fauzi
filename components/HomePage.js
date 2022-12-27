import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import people from "../public/people.png";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Typewriter from "typewriter-effect";
import { Element } from "react-scroll";
import Link from "next/link";

const HomePage = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <Element className="element min-h-screen px-10" id="home">
      <div className="text-center p-7" data-aos="fade-down">
        <h2 className="text-4xl md:text-7xl py-3 text-teal-600 font-semibold mt-14 text-primary">
          Fahro Nur Fauzi
        </h2>
        <h3 className="text-[17px] py-3 md:text-3xl font-semibold text-black dark:text-white text-secondary">
          <Typewriter
            options={{
              strings: ["Fullstack Web Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
        <p className="text-sm py-3 md:text-xl leading-8 text-gray-800 dark:text-gray-400">
          Freelancer providing service for programming website. Join me down
          below and let`s get cracking!
        </p>
      </div>
      <div
        className="text-3xl flex justify-center gap-10 text-black dark:text-white"
        data-aos="flip-down"
      >
      <Link href="https://www.instagram.com/invites/contact/?i=1h1y9frxfd2zv&utm_content=pp6lry" target="_blank">
        <AiFillInstagram className="cursor-pointer hover:text-cyan-700" />
      </Link>
      <Link href="https://www.linkedin.com/in/fahro-nur-fauzi-a330381b6/" target="_blank">
        <AiFillLinkedin className="cursor-pointer hover:text-cyan-700" />
      </Link>
      <Link href="https://github.com/fahrooo" target="_blank">
        <AiFillGithub className="cursor-pointer hover:text-cyan-700" />
      </Link>
      </div>
      <div
        className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 lg:w-1/4 lg:h-1/4 md:w-1/3 md:h-1/w-1/3 mt-10 mx-auto"
        data-aos="fade-up"
      >
        <Image src={people} alt="Foto-Programmer" priority />
      </div>
    </Element>
  );
};

export default HomePage;
