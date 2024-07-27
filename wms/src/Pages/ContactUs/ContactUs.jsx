import Header from "../../Components/Header";

function ContactUs(){
    return(
        <div>
            <Header />
            <main>
                <div className="flex h-3/4 items-center justify-between p-6 bg-white">
                    <div className="flex-1 max-w-1/4 flex justify-center">
                        <img src="/assets/OurProducts.png" className="w-3/4 h-auto max-w-md mr-24 fade-in-slide-up"></img>
                    </div>

                    <div className="flex-1 max w-w-3/4 pr-6">
                    <h1 className="text-[80px] font-extrabold font-serif text-[#24619D] fade-in-slide-up">
                        <span className="wave">OUR</span> <span className="wave" style={{animationDelay: '0.1s'}}>PRODUCTS</span>
                    </h1>
                    <h2 className="text-3xl font-semibold font-serif mt-2  text-[#7BA5C9] fade-in-slide-up">Refresh Your Life One Sip At A Time</h2>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default ContactUs