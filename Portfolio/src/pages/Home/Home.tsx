
import NavBar from "../../components/NavBar/NavBar"
import Hero from "./Hero/Hero"
import About from './About/About'
import Works from './Projects/Works'
import Skill from "./skills/Skill"
import Footer from "./Footer/Footer"
const Home = () => {


    return (
      <>
      <NavBar/>    
        <Hero/>
        <About/>
        <Skill/>
        <Works/>
        <Footer/>
      </>
    )
  }
  
  export default Home
  