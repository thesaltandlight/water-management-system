function Intro(){
    return(
        <div className="flex h-3/4 items-center justify-between p-6 bg-white">
            <div className="flex-1 max-w-3/4 pr-6">
                <h1 className="text-[70px] font-extrabold font-serif ml-10 text-[#24619D] fade-in-slide-up">
                    <span className="wave">STAY</span> <span className="wave" style={{animationDelay: '0.1s'}}>HYDRATED,</span> <span className="wave">STAY</span> <span className="wave" style={{animationDelay: '0.1'}}>HEALTHY</span>
                </h1>
                <h2 className="text-3xl font-semibold font-serif mt-2 ml-10 text-[#24619D] fade-in-slide-up">Your Water Journey Starts Here</h2>
            </div>

            <div className="flex-1 max-w-1/4 flex justify-center">
            <img src="/assets/Homepage.jpg" alt="Water Journey" className='w-3/4 h-auto max-w-md ml-56 fade-in-slide-up'></img>
            </div>
        </div>
    )
}

{/* <h1 className="text-5xl mb-1 font-serif font-black text-[#24619D] w-[700px] fade-in-slide-up">
                <span className="wave">Hi!</span> <span className="wave" style={{ animationDelay: '0.1s' }}>Welcome</span> <span className="wave" style={{ animationDelay: '0.2s' }}>Back</span>
            </h1>
            <h3 className="text-2xl font-serif font-bold text-[#7BA5C9] mb-8 fade-in-slide-up">Stay Hydrated, Stay Healthy!</h3>
            </div> */}

export default Intro;