function Intro(){
    return(
        <div className="flex h-3/4 -mt-20 items-center justify-between p-6 bg-white">
            <div className="flex-1 max-w-3/4 pr-6">
                <h1 className="fade-in-slide-up mt-14">
                <img src="/assets/HomepageText.png" alt="Stay Hydrated, Stay Healthy: Your Water Journey Begins Here!" className="ml-10 h-[250px] w-[1300px]" />
                </h1>
                <button className="mt-7 ml-10 bg-[#095EAE] font-medium text-white px-6 py-3 rounded-lg text-2xl hover:bg-[#7BA5C9] transition-colors duration-300 fade-in-slide-up">Explore  →</button>

            </div>
            

            <div className="flex-1 max-w-1/4 flex justify-center">
            <img src="/assets/HomepageIntro.png" alt="Water Journey" className='w-full h-auto max-w-lg ml-32 mr-10 fade-in-slide-up'></img>
            </div>


        </div>
    )
}


export default Intro;

                // <h1 className="text-[70px] font-extrabold font-serif ml-10 text-[#24619D] fade-in-slide-up">
                //     <span className="wave">STAY</span> <span className="wave" style={{animationDelay: '0.1s'}}>HYDRATED,</span> <span className="wave">STAY</span> <span className="wave" style={{animationDelay: '0.1'}}>HEALTHY</span>
                // </h1>