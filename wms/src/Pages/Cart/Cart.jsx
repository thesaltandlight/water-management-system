import Header from "../../Components/Header";
import { useCart } from "./CartContext";

function Cart() {
    const { cart, removeFromCart, incrementQuantity, decrementQuantity, clearCart } = useCart();

    const handleCheckout = () => {
        alert('Checkout successful!');
        clearCart();
    };

    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <Header/>
            <div className="w-11/12 mx-auto my-10">
                <h1 className="text-6xl font-bold font-serif text-[#24619D] mb-6">Shopping Cart</h1>
                {cart.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-96">
                        <img src="/assets/emptyCart.png" alt='Empty cart' className="w-auto h-96"/>
                        <p className="text-3xl text-[#5F5F5F] font-semibold text-center">Your cart is empty.</p>
                    </div>
                ) : (
                    <div>
                        <div className="grid grid-cols-5 gap-4 mb-4 p-4 bg-gray-200 rounded">
                            <div className="col-span-2 font-bold text-lg">Product Name</div>
                            <div className="font-bold text-lg">Quantity</div>
                            <div className="font-bold text-lg">Price</div>
                            <div className="font-bold text-lg">Total</div>
                        </div>
                        {cart.map(product => (
                            <div key={product.id} className="grid grid-cols-5 gap-4 mb-4 p-4 bg-white rounded shadow">
                                <div className="col-span-2 flex items-center">
                                    <img src={product.image} alt={product.name} className="h-20 w-auto mr-4" />
                                    <div>
                                        <h2 className="text-xl font-bold">{product.name}</h2>
                                    </div>
                                </div>
                                <div className="flex items-center">
                                    <button onClick={() => decrementQuantity(product.id)} className="w-8 h-8 text-white font-extrabold rounded bg-[#7BA5C9] hover:text-[#4b86ba]">-</button>
                                    <span className="mx-3 font-semibold">{product.quantity}</span>
                                    <button onClick={() => incrementQuantity(product.id)} className="w-8 h-8 text-white font-extrabold rounded bg-[#7BA5C9]">+</button>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-lg font-medium">${product.price.toFixed(2)}</p>
                                </div>
                                <div className="flex items-center">
                                    <p className="text-lg font-medium">${(product.price * product.quantity).toFixed(2)}</p>
                                </div>
                                <button onClick={() => removeFromCart(product.id)} className="flex items-center justify-center"><img src="/assets/remove.png" className="w-8 h-8"/></button>
                            </div>
                        ))}
                        <div className="flex justify-between items-center mt-6">
                            <div className="text-xl font-bold">Grand Total: ${calculateTotal()}</div>
                            <div>
                                <button onClick={handleCheckout} className="px-6 py-3 bg-[#24619D] text-white font-bold rounded">Checkout</button>
                                <button onClick={clearCart} className="px-6 py-3 bg-[#7BA5C9] text-white font-bold rounded ml-4">Clear Cart</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Cart;
