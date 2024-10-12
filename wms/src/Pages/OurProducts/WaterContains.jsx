function WaterContains(){
    return(
        <div className="py-16 px-4 lg:px-16">
            {/* Header */}
            <h1 className="text-left font-bold text-6xl mb-6 text-[#095EAE]">What Our Water Contains</h1>
            <p className="text-left text-lg mb-12  text-[#1E1E1E]">Our water contains a balanced blend of essential minerals, including 25 mg/L of potassium, 15 mg/L of magnesium, 20 mg/L of sodium, and 35 mg/L of calcium. Additionally, it features 120 mg/L of bicarbonates for optimal alkalinity, with a pH level of 7.5, perfect for supporting your body&apos;s hydration and overall health.</p>

            {/* Bottle animations */}
            <div className="relative flex justify-center items-center">
                <img src="/assets/waterbottle.png" alt="bottle of water" className="h-2/3 w-auto relative z-10 -mt-8"></img>

                {/* bicarbonates */}
                <div className="absolute bottom-[10px] left-[330px] transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#DDE9F5] rounded-full flex items-center justify-center z-20">
                <p className="text-[40px] font-bold text-center text-[#095EAE] leading-7">120mg/L <br/> <span className="font-light text-[26px]">bicarbonates</span></p>
                </div>

                {/* magnesium */}
                <div className="absolute top-[450px] left-[40px] transform -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-[#133498] rounded-full flex items-center justify-center z-20">
                <p className="text-[28px] text-[#DDE9F5] text-center font-bold leading-5">15mg/L <br /> <span className="font-light text-[18.2px]">magnesium</span></p>
                </div>

                {/* sodium */}
                <div className="absolute bottom-[450px] left-[200px] transform -translate-x-1/2 w-[190px] h-[190px] bg-[#506EC8] rounded-full flex items-center justify-center z-20">
                <p className="text-[30px] text-[#FFFFFF] text-center font-bold leading-5">20mg/L <br /> <span className="font-light text-[19.5px]">sodium</span></p>
                </div>

                {/* potassium */}
                <div className="absolute top-[200px] right-[400px] transform translate-x-1/2 w-[220px] h-[220px] bg-[#095EAE] rounded-full flex items-center justify-center z-20">
                <p className="text-[32px] text-center text-[#FFFFFF] font-bold leading-5">25mg/L <br /> <span className="text-[20.8px] font-light">potassium</span></p>
                </div>

                {/* calcium */}
                <div className="absolute top-[100px] right-[150px] transform translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] bg-[#A5CEEE] rounded-full flex items-center justify-center z-20">
                <p className="text-[34px] text-[#133498] text-center font-bold leading-5">35mg/L <br /> <span className="text-[22.1px] font-light">calcium</span></p>
                </div>
                

                {/* pH level */}
                <div className="absolute bottom-[50px] right-[5px] transform -translate-x-1/2 w-[150px] h-[150px] bg-[#DDE9F5] rounded-full flex items-center justify-center  z-20">
                <p className="text-[26px] text-[#095EAE] text-center font-bold leading-5">7.5 <br /> <span className="font-light text-[16.9px]">pH level</span></p>
                </div>

                {/* random circles */}
                <div className="absolute top-[50px] right-[350px] transform -translate-x-1/2 w-[50px] h-[50px] bg-[#133498] rounded-full flex items-center justify-center z-20"></div>
                <div className="absolute bottom-[550px] left-[480px] transform -translate-x-1/2 w-[50px] h-[50px] bg-[#DDE9F5] rounded-full flex items-center justify-center z-20"></div>
                <div className="absolute top-[170px] left-[50px] transform -translate-x-1/2 w-[90px] h-[90px] bg-[#A5CEEE] rounded-full flex items-center justify-center z-20"></div>
                <div className="absolute bottom-[250px] right-[10px] transform -translate-x-1/2 w-[70px] h-[70px] bg-[#506EC8] rounded-full flex items-center justify-center z-20"></div>


            </div>
        </div>
    )
}

export default WaterContains