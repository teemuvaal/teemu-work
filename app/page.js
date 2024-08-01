import Header from "./components/header";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Divider from "./components/divider";
import Skills from "./components/skills";

export default function Home() {
  return (
  <div className='flex items-center justify-center mt-20'>
  <div className='w-2/3'>
    <Header />
    <Divider />
    <Profile />
    <Divider />
    <Skills />
    <Divider />
    <Experience />

  </div>
  </div>
  );
}
