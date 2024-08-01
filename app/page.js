import Header from "./components/header";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Divider from "./components/divider";
import Skills from "./components/skills";
import Projects from "./components/projects";

export default function Home() {
  return (
  <div className='flex items-center justify-center mt-10'>
  <div className='w-2/3 md:w-1/3'>
    <Header />
    <Divider />
    <Profile />
    <Divider />
    <Skills />
    <Divider />
    <Experience />
    <Divider />
    <Projects />

  </div>
  </div>
  );
}
