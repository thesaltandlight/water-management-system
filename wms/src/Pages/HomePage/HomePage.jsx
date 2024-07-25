import Header from "../../Components/Header"
import Intro from "./Intro"
import InfoSection from "./InfoSection"
import AboutUs from "./AboutUs"
import OurProducts from "./OurProducts"

function HomePage(){
    return(
    <div>
        <Header/>
        <main>
            <Intro/>
            <InfoSection/>
            <AboutUs/>
            <OurProducts/>
        </main>
        
    </div>
    )
}

export default HomePage