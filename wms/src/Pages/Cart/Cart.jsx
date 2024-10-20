import { useCart } from "./CartContext";

function Cart(){
    const {cart, removeFromCart, incrementQuantity, decrementQuantity} = useCart()

    const calculateSubtotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2)
    }

    const calculateTotal = () => {
        const subtotal = parseFloat(calculateSubtotal())
        const delivery = subtotal > 0 ? 20: 0;
        return (subtotal + delivery).toFixed(2)
    }

    return(
        <div className="flex flex-col lg:flex-row gap-10">
            <div className="lg:w-8/12">
            <div className="grid grid-cols-12 gap-4 mb-4 p-4 font-semibold text-[20px]">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Total</div>
            </div>
            {cart.map(product => (
                <div key={product.id} className="grid grid-cols-12 gap-4 mb-4 p-4">
                    {/* product */}
                    <div className="col-span-6 flex items-center">
                        <img src={product.image} alt={product.name} className="h-20 w-auto mr-4"/>
                        <div>
                            <h2 className="text-[16px] font-medium">{product.name}</h2>
                        </div>
                    </div>

                    {/* quantity */}
                    <div className="col-span-2 flex items-center justify-center">
                        <button onClick={() => decrementQuantity(product.id)} className="w-8 h-8 text-[#FFF] font-extrabold rounded bg-[#095EAE]">-</button>
                        <span className="mx-3 font-semibold">{product.quantity}</span>
                        <button onClick={() => incrementQuantity(product.id)} className="w-8 h-8 text-[#FFF] font-extrabold rounded bg-[#095EAE]">+</button>
                    </div>

                    {/* price */}
                    <div  className="col-span-2 flex items-center justify-center">
                        <p className="text-[16px] font-medium">¢{product.price.toFixed(2)}</p>
                    </div>

                    {/* Total */}
                    <div className="col-span-2 flex items-center justify-center">
                        <p className="text-[16px] font-semibold">¢{(product.price * product.quantity).toFixed(2)}</p>
                    </div>

                    {/* remove from cart */}
                    <button onClick={() => removeFromCart(product.id)} className="col-span-1 text-red-500 text-lg">✕</button>
                </div>
            ))}
            {/* subtotal */}
            <div className="flex justify-between items-center mt-6 font-semibold text-xl">
                <p>Subtotal</p>
                <p>¢{calculateSubtotal()}</p>
            </div>

            {/* delivery */}
            <div className="flex justify-between items-center mt-2 font-semibold text-xl">
                <p>Delivery</p>
                <p>¢{cart.length > 0 ? 20 : 0}.00</p>
            </div>

            {/* total */}
            <div className="flex justify-between items-center mt-2 font-bold text-xl">
                <p>Total</p>
                <p>¢{calculateTotal()}</p>
            </div>
        </div>
        </div>
    )
}

export default Cart