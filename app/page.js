import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Divider from "./components/Divider";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import CopyHere from "./components/CopyHere";

export default function Home() {
  return (
  <div className='flex items-center justify-center mt-10'>
  <div className='w-2/3 md:w-2/3 lg:w-1/3'>
    <Header />
    <Divider />
    <Profile />
    <Divider />
    <Skills />
    <Divider />
    <Experience />
    <Divider />
    <Projects />
    <CopyHere />
  </div>
  </div>
  );
}
