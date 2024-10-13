function WhatWeOffer(){
    return(
        <div className="py-16 px-4 lg:px-16">
            <h1 className="text-6xl font-bold text-center text-[#095EAE] mb-10">What We Offer</h1>

            <div className="flex flex-col space-y-8">
                {/* 01 */}
                <div className="flex items-center space-x-6">
                    <img src="/assets/01.png" alt="01" className="w-[154px] h-[150px]"></img>
                    <div className="leading-tight">
                        <h2 className="text-[40px] font-semibold text-[#095EAE]">Purified Drinking Water</h2>
                        <p className="text-[#1E1E1E] font-light text-[20px]">Sourced from the finest natural reserves and purified through a multi-stage filtration process to ensure crystal-clear, contaminant-free hydration. Perfect for daily drinking, cooking, and overall wellness.</p>
                    </div>
                </div>

                {/* 02 */}
                <div className="flex items-center justify-between space-x-6">
                    <div className="flex-grow">
                        <h2 className="text-[40px] font-semibold text-[#095EAE] text-right">Bulk Water Delivery</h2>
                        <p className="text-[#1E1E1E] text-right font-light text-[20px]">With a pH of 8.0 to 9.5, our alkaline water helps neutralize acidity in the body, supports metabolism, and boosts energy. It’s ideal for those looking for a refreshing, revitalizing drink with added wellness benefits.</p>
                    </div>
                    <img src="/assets/02.png" alt="02" className="w-[154.03px] h-[163px]"></img>
                </div>

                {/* 03 */}
                <div className="flex items-center space-x-6">
                    <img src="/assets/03.png" alt="03" className="w-[165px] h-[159.25px]"></img>
                    <div className="leading-tight">
                        <h2 className="text-[40px] font-semibold text-[#095EAE]">Sparkling Water</h2>
                        <p className="text-[#1E1E1E] font-light text-[20px]">Sourced from the finest natural reserves and purified through a multi-stage filtration process to ensure crystal-clear, contaminant-free hydration. Perfect for daily drinking, cooking, and overall wellness.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer