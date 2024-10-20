import Cart from "./Cart";
import Checkout from "./Checkout";
import { NavLink } from "react-router-dom";

function ShoppingCart() {

    return (
        <div>
            <NavLink to="/home" className="text-[#1E1E1E] mb-6 flex items-center space-x-2">
                <span className="text-[16px] text-[#095EAE] font-bold">← Back</span>
            </NavLink>

            <div className="w-full mx-auto my-10 px-10">
                <div className="flex flex-col lg:flex-row lg:gap-10">
                    {/* Cart Section */}
                    <div className="lg:w-8/12">
                        <Cart />
                    </div>

                    {/* Checkout Section */}
                    <div className="lg:w-4/12">
                        <Checkout />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;
