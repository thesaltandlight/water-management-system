import Header from "../../Components/Header";
import OurServices from "./OurServices";
import WhyChooseUs from "./WhyChooseUs";
import TrackDelivery from "./TrackDelivery";

function Delivery() {
    

    return (
        <div>
            <Header />
            <main>
                <div className="flex h-3/4 items-center justify-between p-6 bg-[#FFF]">
                    <div className="flex-1 max w-w-3/4 pr-10 ml-10">
                        <h1 className="text-8xl font-bold text-[#095EAE] fade-in-slide-up -mr-72">
                            <span className="wave">DELIVERY</span> <span className="wave" style={{animationDelay: '0.1s'}}>SERVICES</span>
                        </h1>
                        <h2 className="text-xl font-normal mt-2 text-[#7BA5C9] fade-in-slide-up -mr-10">Fast, reliable water delivery, ensuring fresh hydration is always just a doorstep away.</h2>
                    </div>

                    <div className="flex-1 max-w-1/4 flex justify-center">
                        <img src="/assets/Delivery.png" className="w-3/4 h-auto max-w-md -mr-40 fade-in-slide-up"></img>
                    </div>
                </div>

                {/* <div className="flex h-3/4 items-center justify-between p-6 bg-white">
                    <div className="flex-1 max w-w-3/4 pr-10 ml-10">
                    <h1 className="text-8xl font-bold text-[#095EAE] fade-in-slide-up -mr-10">
                        <span className="wave">OUR</span> <span className="wave" style={{animationDelay: '0.1s'}}>PRODUCTS</span>
                    </h1>
                    <h2 className="text-xl font-normal mt-2 text-[#7BA5C9] fade-in-slide-up -mr-10">Pure, refreshing water with quality you can trust for a healthier, hydrated life.</h2>
                    </div>

                    
                    <div className="flex-1 max-w-1/4 flex justify-center">
                        <img src="/assets/OurProductsMain.png" className="w-3/4 h-auto max-w-md -mr-40 fade-in-slide-up"></img>
                    </div>
                </div> */}
                <OurServices/>
                <WhyChooseUs/>
                <TrackDelivery/>
            </main>
        </div>
    );
}

export default Delivery;
