import { useCart } from "./CartContext";
import { FiTrash } from "react-icons/fi";

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
        <div className="w-full mt-4">
            <div className="bg-[#FFFFFF] fixed top-11 left-6 w-full lg:w-8/12 z-20 p-4">
                <h1 className="text-[36px]  font-extrabold text-[#095EAE]">Shopping Cart</h1>
                {/* Categories */}
                <div className="grid grid-cols-[4fr_2fr_2fr_1fr.0.5fr] gap-6 p-4 font-semibold text-[20px] border-b border-[#757575] border-opacity-30">
                    <div>Product</div>
                    <div className="text-center ml-5">Quantity</div>
                    <div className="text-center mr-10">Price</div>
                    <div className="text-center mr-16">Total</div>
                    <div></div>
                </div>
            </div>

            <div className="pt-[140px] pb-[30px] overflow-y-auto max-h-[calc(100vh-180px)] scrollbar-hide">
            {cart.map(product => (
                <div key={product.id} className="grid grid-cols-[4fr_2fr_2fr_1fr.0.5fr] gap-6 p-4 ">
                    {/* product */}
                    <div className="flex items-center">
                        <img src={product.image} alt={product.name} className="h-20 w-auto mr-4"/>
                        <div>
                            <h2 className="text-[16px] font-medium">{product.name}</h2>
                        </div>
                    </div>

                    {/* quantity */}
                    <div className="flex items-center ml-12 justify-center">
                        <button onClick={() => decrementQuantity(product.id)} className="w-8 h-8 text-[#FFF] font-extrabold rounded bg-[#095EAE]">-</button>
                        <span className="mx-3 font-semibold">{product.quantity}</span>
                        <button onClick={() => incrementQuantity(product.id)} className="w-8 h-8 text-[#FFF] font-extrabold rounded bg-[#095EAE]">+</button>
                    </div>

                    {/* price */}
                    <div className="flex items-center  justify-center">
                        <p className="text-[16px] font-medium">¢{product.price.toFixed(2)}</p>
                    </div>

                    {/* Total */}
                    <div className="flex items-center justify-center">
                        <p className="text-[16px] font-semibold">¢{(product.price * product.quantity).toFixed(2)}</p>
                    </div>

                    {/* remove from cart */}
                    <div className="flex items-center ml-12 justify-center">
                        <button onClick={() => removeFromCart(product.id)} className="text-[#E93737] text-lg"><FiTrash/></button>
                    </div>
                </div>
            ))}

            {/* footer */}
            <div className="bg-[#FFF] h-40 fixed bottom-0 left-6 w-full lg:w-8/12 p-4 z-20">
            {/* subtotal */}
            <div className="flex justify-end items-center font-normal mb-2 text-[#757575] text-[18px]">
                <div className="flex w-full max-w-sm justify-between mr-10">
                <p className=" text-left">Subtotal</p>
                <p>¢{calculateSubtotal()}</p>
                </div>
            </div>

            {/* delivery */}
            <div className="flex justify-end items-center font-normal text-[#757575] mb-2 text-[18px]">
                <div className="flex w-full max-w-sm justify-between border-b border-[#757575] border-opacity-30 pb-2 mr-10">
                <p className=" text-left">Delivery</p>
                <p>¢{cart.length > 0 ? 20 : 0}.00</p>
                </div>
            </div>

            {/* total */}
            <div className="flex justify-end items-center text-[18px] mt-2 font-semibold text-[#1E1E1E]">
                <div className="flex w-full max-w-sm justify-between mr-10">
                <p className=" text-left">Order Total</p>
                <p>¢{calculateTotal()}</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Cart
