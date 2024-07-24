import Header from "../../Components/Header"
import Intro from "./Intro"
import InfoSection from "./InfoSection"

function HomePage(){
    return(
    <div>
        <Header/>
        <main>
            <Intro/>
            <InfoSection/>
        </main>
        
    </div>
    )
}

export default HomePage