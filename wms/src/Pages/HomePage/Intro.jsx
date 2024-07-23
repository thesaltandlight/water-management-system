function Intro(){
    return(
        <div className="flex h-3/4 items-center justify-between p-6 bg-white">
            <div className="flex-1 max-w-3/4 pr-6">
                <h1 className="text-[70px] font-extrabold font-serif ml-10 text-[#24619D] fade-in-slide-up">
                    <span className="wave">STAY</span> <span className="wave" style={{animationDelay: '0.1s'}}>HYDRATED,</span> <span className="wave">STAY</span> <span className="wave" style={{animationDelay: '0.1'}}>HEALTHY</span>
                </h1>
                <h2 className="text-3xl font-semibold font-serif mt-2 ml-10 text-[#24619D] fade-in-slide-up">Your Water Journey Starts Here</h2>
                <button className="mt-7 ml-10 bg-[#24619D] text-white px-6 py-3 rounded-lg text-xl hover:bg-[#7BA5C9] transition-colors duration-300 fade-in-slide-up">Explore</button>

            </div>
            

            <div className="flex-1 max-w-1/4 flex justify-center">
            <img src="/assets/Homepage.jpg" alt="Water Journey" className='w-3/4 h-auto max-w-md ml-56 fade-in-slide-up'></img>
            </div>


        </div>
    )
}


export default Intro;