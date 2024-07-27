import Header from "../../Components/Header"

function AboutUs(){
    return(
        <div>
            <Header/>
            <main>
                <div className="flex h-3/4 items-center justify-between p-6 bg-white">

                    <div className="flex-1 max w-w-3/4 pr-6">
                        <h1 className="text-[80px] font-extrabold font-serif ml-10 text-[#24619D] fade-in-slide-up">
                            <span className="wave">ABOUT</span> <span className="wave" style={{animationDelay: '0.1s'}}>US</span>
                        </h1>
                        <h2 className="text-3xl font-semibold font-serif mt-2 ml-10 text-[#7BA5C9] fade-in-slide-up">Reliable Water, Anytime, Anywhere</h2>
                    </div>

                    <div className="flex-1 max-w-1/4 flex justify-center">
                        <img src="/assets/AboutUs.png" className="w-3/4 h-auto max-w-md mr-24 fade-in-slide-up"></img>
                    </div>


                    
                </div>
            </main>
        </div>
    )
}

export default AboutUs