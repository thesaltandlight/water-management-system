function InfoSection(){
    return(
        <div className="bg-[#DDE9F5] rounded-xl p-8 flex justify-between items center mx-40123 lg:mx-20 shadow-lg fade-in-slide-up">
            <div className="flex-1 text-center px-4">
                <img src="/assets/waterHandshake.png" alt="Water Handshake" className="h-24 w-24 mx-auto mb-4"></img>
                <p className="text-[#393939] font-medium">Your health and safety are our top priorities. Experience pure, safe, and clean water every time.</p>
            </div>

            <div className="border-l border-[#24619D] mx-8 h-48"></div>

            <div className="flex-1 text-center px-4">
                <img src="/assets/leafdrop.png" alt="Water dripping from leaf" className="h-24 w-24 mx-auto mb-4"></img>
                <p className="text-[#393939] font-medium">Enjoy the crisp taste of our fresh filtered water, sourced from pristine locations for the purest quality.</p>
            </div>

            <div className="border-l border-[#24619D] mx-8 h-48"></div>

            <div className="flex-1 text-center px-4">
                <img src="/assets/drinkWater.png" alt="Refreshing drink of water" className="h-24 w-24 mx-auto mb-4"></img>
                <p className="text-[#393939] font-medium">Experience the cool, refreshing sensation of our premium water that quenches your thirst instantly.</p>
            </div>

        </div>
    )
}

export default InfoSection