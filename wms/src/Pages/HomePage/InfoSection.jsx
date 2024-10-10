import {useEffect, useState, useRef} from 'react';

function InfoSection(){
    const [startCount, setStartCount] = useState(false)
    const purchases = useRef(null)
    const customers = useRef(null)
    const trustInUs = useRef(null)

    const countUp = (start, end, duration, element, suffix = "") => {
        let startTimestamp = null
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            element.innerHTML = Math.floor(progress * (end - start) + start) + suffix
            if (progress < 1){
                window.requestAnimationFrame(step)
            }
        }
        window.requestAnimationFrame(step)
    }

    useEffect(() => {
        const handleScroll = (entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting && !startCount){
                    setStartCount(true)
                    countUp(0,20, 2000, purchases.current, "K+")
                    countUp(0, 300, 2000, customers.current, "+")
                    countUp(0,100, 2000, trustInUs.current, "%")
                }
            })
        }

        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.5,
        })

        const section = document.querySelector('.info-section')
        if(section){
            observer.observe(section)
        }

        return () => {
            if(section) observer.unobserve(section)
        }
    }, [startCount])

    return(
    <>
    <div className="relative -mt-28">
        <img src="/assets/recBackground.png" alt="background" className="w-full h-auto absolute top-0 left-0 z-0"></img>
    </div>

    <div className="info-section relative z-10 bg-[#095EAE] bg-opacity-70 rounded-xl p-8 flex justify-between items center mx-4 lg:mx-14 shadow-lg mt-36 fade-in-slide-up h-[450px]">
        <div className="flex-1 text-center px-4 mt-5">
            <h1 className="text-[#FFFFFF] font-semibold text-8xl" ref={purchases}>0</h1>
            <h2 className="text-[#FFFFFF] font-medium text-3xl mt-5">Purchases</h2>
            <p className="text-[#FFFFFF] font-light mt-7">Your health and safety are our top priorities. Experience pure, safe, and clean water with every sip, thanks to our advanced filtration process. Sourced from pristine locations, our water offers a crisp, refreshing taste. As more customers choose our products, we remain committed to delivering the highest quality to support your well-being and hydration.</p>
        </div>

        <div className="border-l border-[#FFFFFF] mx-8 h-full"></div>

        <div className="flex-1 text-center px-4 mt-5">
            <h1 className="text-[#FFFFFF] font-semibold text-8xl" ref={customers}>0</h1>
            <h2 className="text-[#FFFFFF] font-medium text-3xl mt-5">Customers</h2>
            <p className="text-[#FFFFFF] font-light mt-7">From the purest, crystal-clear water to a variety of hydration solutions and essential accessories, we ensure our customers have everything they need for a healthier, more refreshing lifestyle. With our products, you’re covered for every occasion, making hydration simple and convenient for all. As more customers turn to us for their hydration needs, we continue to expand our offerings to meet growing demands</p>
        </div>

        <div className="border-l border-[#FFFFFF] mx-8 h-full"></div>

        <div className="flex-1 text-center px-4 mt-5">
            <h1 className="text-[#FFFFFF] font-semibold text-8xl" ref={trustInUs}>0</h1>
            <h2 className="text-[#FFFFFF] font-medium text-3xl mt-5">Trust In Us</h2>
            <p className="text-[#FFFFFF] font-light mt-7">With our commitment to quality and reliability, you can trust us to deliver the best for you and your family, every single day. Shop with confidence, knowing we strive for 0% disappointment and 100% satisfaction in both our services and products. We value the trust our customers place in us, and we work hard to exceed their expectations.</p>
        </div>
    </div>
        </>
    )
}

export default InfoSection