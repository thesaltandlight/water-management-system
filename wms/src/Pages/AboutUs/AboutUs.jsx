import Header from "../../Components/Header"
import OurHistory from "./OurHistory"
import ChooseUs from "../HomePage/Reviews"
import Cards from "./Cards"
import WhatWeOffer from "./WhatWeOffer"
import MeetTheTeam from "./MeetTheTeam"

function AboutUs(){
    return(
        <div>
            <Header/>
            <main>
                <div className="flex h-3/4 items-center justify-between p-6 bg-white">
                    {/* image */}
                    <div className="flex-1 max-w-1/4 flex justify-center">
                        <img src="/assets/AboutUsMain.png" className="w-3/4 h-auto max-w-md mr-24 fade-in-slide-up"></img>
                    </div>

                    {/* text */}
                    <div className="flex-1 max w-w-3/4 pr-6">
                        <h1 className="text-8xl font-bold -ml-20 text-[#095EAE] fade-in-slide-up">
                            <span className="wave">ABOUT</span> <span className="wave" style={{animationDelay: '0.1s'}}>US</span>
                        </h1>
                        <h2 className="text-xl font-normal mt-2 -ml-20 text-[#7BA5C9] fade-in-slide-up">Providing clean, mineral-rich water that promotes health, sustainability, and purity for a better tomorrow.</h2>
                    </div>
                </div>
                <OurHistory/>
                <Cards/>
                <WhatWeOffer/>
                <MeetTheTeam/>
                <ChooseUs/>
            </main>
        </div>
    )
}



export default AboutUs

