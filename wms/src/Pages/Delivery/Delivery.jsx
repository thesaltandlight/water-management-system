import Header from "../../Components/Header";

function Delivery(){
    return(
        <div>
            <Header />
            <main>

                <div className="flex h-3/4 items-center justify-between p-6 bg-white">
                    <div className="flex-1 max-w-1/4 flex justify-center">
                        <img src="/assets/Delivery.png" className="w-3/4 h-auto max-w-md mr-24 fade-in-slide-up"></img>
                    </div>

                    <div className="flex-1 max w-w-3/4 pr-6">
                    <h1 className="text-[60px] font-extrabold font-serif text-[#24619D] fade-in-slide-up">
                        <span className="wave">DELIVERY</span> <span className="wave" style={{animationDelay: '0.1s'}}>SERVICES</span>
                    </h1>
                    <h2 className="text-3xl font-semibold font-serif mt-2  text-[#7BA5C9] fade-in-slide-up">Receive your water on time, every time.</h2>
                    </div>
                </div>
                

                <div className="flex flex-col items-center justify-center p-8 mt-10 bg-[#DDE9F5]">
                    <h1 className="text-4xl font-bold text-[#24619D] mb-4 text-center">Reliability • Efficiency • Time consciousness</h1>
                    <p className="text-lg text-center max-w-3xl">At Aquaverse, we pride ourselves on our reliable and efficient delivery services. We understand that timely water delivery is crucial for your daily needs, and we strive to ensure that you receive your water exactly when you need it.</p>
                </div>

                


                

                  



            </main>
        </div>

    )
}

export default Delivery