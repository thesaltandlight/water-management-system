import Cart from "./Cart";
import Checkout from "./Checkout";
import { useCart } from "./CartContext";
import { NavLink } from "react-router-dom";

function ShoppingCart() {
    const { cart } = useCart();

    const calculateSubtotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    };

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal());
        const delivery = subtotal > 0 ? 20 : 0;
        return (subtotal + delivery).toFixed(2);
    };

    return (
        <div>
            <NavLink to="/home" className="text-[#1E1E1E] mb-6 flex items-center space-x-2">
                <span className="text-[16px] text-[#095EAE] font-bold">← Back To Home</span>
            </NavLink>

            <div className="w-full mx-10 my-10">
                <h1 className="text-6xl font-bold text-[#095EAE] mb-6">Shopping Cart</h1>
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-96">
                        <img src="/assets/emptyCart.png" alt="Empty Cart" className="w-auto h-96" />
                        <p className="text-3xl text-[#095EAE] font-semibold text-center">Your Cart Is Empty</p>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-10">
                        <Cart calculateTotal={calculateTotal} />
                        <Checkout />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ShoppingCart;
