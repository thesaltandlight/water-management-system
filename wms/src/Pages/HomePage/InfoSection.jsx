function InfoSection(){
    return(
    <>
    <div className="relative -mt-28">
        <img src="/assets/recBackground.png" alt="background" className="w-full h-auto absolute top-0 left-0 z-0"></img>
    </div>

    <div className="relative z-10 bg-[#095EAE] bg-opacity-70 rounded-xl p-8 flex justify-between items center mx-4 lg:mx-14 shadow-lg mt-36 fade-in-slide-up h-[450px]">
        <div className="flex-1 text-center px-4 mt-5">
            <h1 className="text-[#FFFFFF] font-semibold text-9xl">20K+</h1>
            <h2 className="text-[#FFFFFF] font-medium text-3xl mt-5">Purchases</h2>
            <p className="text-[#FFFFFF] font-light mt-7">Your health and safety are our top priorities. Experience pure, safe, and clean water every time and Enjoy the crisp taste of our fresh filtered water, sourced from pristine locations for the purest quality.</p>
        </div>

        <div className="border-l border-[#FFFFFF] mx-8 h-full"></div>

        <div className="flex-1 text-center px-4 mt-5">
            <h1 className="text-[#FFFFFF] font-semibold text-9xl">10+</h1>
            <h2 className="text-[#FFFFFF] font-medium text-3xl mt-5">Products</h2>
            <p className="text-[#FFFFFF] font-light mt-7">From the purest, crystal-clear water to a wide range of hydration solutions and essential accessories, we ensure you have everything required for a healthier and more refreshing lifestyle. We’ve got you covered for every occasion.</p>
        </div>

        <div className="border-l border-[#FFFFFF] mx-8 h-full"></div>

        <div className="flex-1 text-center px-4 mt-5">
            <h1 className="text-[#FFFFFF] font-semibold text-9xl">100%</h1>
            <h2 className="text-[#FFFFFF] font-medium text-3xl mt-5">Trust In Us</h2>
            <p className="text-[#FFFFFF] font-light mt-7">With our commitment to quality and availability, you can trust us to provide the best for you and your family, every single day. Shop with us today, we guarantee 0% disappointment in our services and products, and 100% satisfaction</p>
        </div>
    </div>
        </>
    )
}

export default InfoSection