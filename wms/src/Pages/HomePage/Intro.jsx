function Intro(){
    return(
        <div className="flex h-3/4 items-center justify-between p-6 bg-white">
            <div className="flex-1 max-w-3/4 pr-6">
                <h1 className="text-[70px] font-extrabold font-serif ml-10 text-[#24619D]">STAY HYDRATED, STAY HEALTHY</h1>
                <h2 className="text-3xl font-semibold mt-2 ml-10 text-[#24619D]">Your Water Journey Starts Here</h2>
            </div>

            <div className="flex-1 max-w-1/4 flex justify-center">
            <img src="/assets/Homepage.jpg" alt="Water Journey" className='w-3/4 h-auto max-w-md ml-56'></img>
            </div>
        </div>
    )
}

export default Intro;