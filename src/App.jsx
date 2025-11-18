import LogoSection from './sections/LogoSection.jsx'
import NavBar from './components/NavBar.jsx'
import FeatureCards from './sections/FeatureCards.jsx'
import Hero from './sections/Hero.jsx'
import ShowcaseSection from './sections/ShowcaseSection.jsx'
import Techstack from './sections/Techstack.jsx'
import Contact from './sections/contact.jsx'
import Footer from './sections/Footer.jsx'

const App = () =>{
    return(
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            <LogoSection />
            <FeatureCards />
            <Techstack />
            <Contact />
            <Footer />
        </>
    )
}

export default App

