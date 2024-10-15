import { useState, useEffect } from "react";

function WhyChooseUs(){
    const [currentIndex, setCurrentIndex] = useState(0)

    const reasons = [
        {title: 'Tracking', description: 'Stay updated with live tracking of your delivery, giving you peace of mind and control.'},
        {title: 'Timeliness', description: 'We ensure your water arrives on time, every time, so you’re never left waiting.'},
        {title: 'Flexibility', description: 'Choose a delivery time that fits your routine with our customizable delivery options.'},
        {title: 'Affordability', description: 'Enjoy the best prices for water delivery, making it accessible for everyone.'},
        {title: 'Quality', description: 'We adhere to strict quality control measures to provide you with pure, safe, and clean water.'},
        {title: 'Sustainability', description: 'We adopt eco-friendly practices, from sourcing water responsibly to minimizing our environmental footprint.'},
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((previousIndex) => 
            previousIndex === reasons.length - 1 ? 0 : previousIndex + 1)
        }, 5000)

        return () => clearInterval(interval)
    }, [currentIndex, reasons.length])

    const previousIndex = currentIndex === 0 ? reasons.length - 1 : currentIndex - 1
    const nextIndex = currentIndex === reasons.length - 1 ? 0 : currentIndex + 1

    const handleDotClick = (index) => {
        setCurrentIndex(index)
    }

    return(
        <div className="flex flex-col items-center space-y-8">
            <h2 className="text-6xl font-bold text-[#095EAE]">Why Choose Us</h2>
            <div className="relative w-full max-w-4xl flex flex-col items-center space-y-8">
                {/* Circle Slider */}
                <div className="relative w-full flex items-center justify-center">
                    {/* left circle */}
                    <div className="w-[300px] h-[300px] rounded-full bg-[#DDE9F5] text-[#095EAE] flex items-center justify-center absolute left-0 transform -translate-x-1 duration-700 z-0">
                        <div className="text-center p-8">
                            <h3 className="text-[32px] font-bold">{reasons[previousIndex].title}</h3>
                            <p className="text-[14px] font-light">{reasons[previousIndex].description}</p>
                        </div>
                    </div>

                    {/* middle circle */}
                    <div className="w-[400px] h-[400px] rounded-full bg-[#095EAE] text-[#FFF] flex items-center justify-center z-10 transition-all duration-700 relative">
                        <div className="text-center p-8">
                            <h3 className="text-[48px] font-bold">{reasons[currentIndex].title}</h3>
                            <p className="text-[18px] font-light">{reasons[currentIndex].description}</p>
                        </div>
                    </div>

                    {/* right circle */}
                    <div className="w-[300px] h-[300px] rounded-full bg-[#DDE9F5] text-[#095EAE] flex items-center justify-center absolute right-0 transform -translate-x-1 duration-700 z-0">
                        <div className="text-center p-8">
                            <h3 className="text-[32px] font-bold">{reasons[nextIndex].title}</h3>
                            <p className="text-[14px] font-light">{reasons[nextIndex].description}</p>
                        </div>
                    </div>
                </div>

                {/* dots */}
                <div className="flex space-x-2">
                        {reasons.map((_, index) => (
                            <div key={index} className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? "bg-[#095EAE]" : 'bg-[#DDE9F5]'}`} onClick={() => handleDotClick(index)}></div>
                        ))}
                    </div>
            </div>
        </div>
    )


}

export default WhyChooseUs