import Cart from "./Cart";
import Checkout from "./Checkout";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function ShoppingCart() {
    const navigate = useNavigate()

    return (
        <div>
            <div className="bg-[#FFFFFF]">
                <button onClick={() => navigate(-1)} className="fixed top-5 left-6 mb-6 flex items-center space-x-2 z-50">
                <FiArrowLeft className="text-[#095EAE]"/>
                <span className="text-[16px] text-[#095EAE] font-bold">Back</span>
                </button>
            </div>

            <div className="w-full mx-auto my-10 px-10 flex flex-col lg:flex-row lg:gap-10">
                {/* Cart Section */}
                <div className="lg:w-8/12">
                    <Cart />
                </div>

                {/* Checkout Section */}
                <div className="lg:w-4/12">
                    <div className="lg:fixed lg:top-10 z-40">
                        <Checkout />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
