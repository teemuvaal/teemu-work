import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Divider from "./components/Divider";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import CopyHere from "./components/CopyHere";

export default function Home() {
  return (
  <div className='flex items-center justify-center mt-10'>
  <div className='mx-4 w-full md:w-2/3 lg:w-2/5 lg:mx-0 md:mx-10'>
    <Header />
    <Divider />
    <Profile />
    <Divider />
    <Skills />
    <Divider />
    <Experience />
    <Divider />
    <Projects />
    <Divider />
    <CopyHere />
  </div>
  </div>
  );
}
