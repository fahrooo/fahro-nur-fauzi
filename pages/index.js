import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/layout/NavBar";
import BottomNav from "../components/layout/BottomNav";
import HomePage from "../components/HomePage";
import ProfilePage from "../components/ProfilePage";
import ProjectPage from "../components/ProjectPage";
import ContactPage from "../components/ContactPage";

export default function Home() {
  return (
    <>
      <Head>
        <title>Fahro Nur Fauzi</title>
        <meta
          name="description"
          content="I am a Associate Degree Student of Informatics Engineering at
                Sebelas Maret University who is currently doing an internship at
                PT. Pindad (Persero). I have experience in both frontend and
                backend and has several website creation projects. I have a high
                enthusiasm for learning, trained to work in a team or
                individually and always on time."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-dark">
        <NavBar />
        <BottomNav />
        <HomePage />
        <ProfilePage />
        <ProjectPage />
        <ContactPage />
      </main>
    </>
  );
}
