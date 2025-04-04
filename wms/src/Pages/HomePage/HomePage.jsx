import Intro from "./Intro"
import InfoSection from "./InfoSection"
import AboutUs from "./AboutUs"
import OurProducts from "./OurProducts"
import Reviews from "./Reviews"
import ContactUs from "./ContactUs"
import Header from "../../Components/Header"

function HomePage(){
    return(
    <div className="overflow-x-hidden">
        <Header/>
        <main>
            <Intro/>
            <InfoSection/>
            <AboutUs/>
            <OurProducts/>
            <Reviews/>
            <ContactUs/>
        </main>
        
    </div>
    )
}

export default HomePage