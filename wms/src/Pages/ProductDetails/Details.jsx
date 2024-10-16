import { useState } from "react";
import { FaCheckCircle, FaBan, FaTruck } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";


function Details({product, addToCart}) {
    const [popUp, setPopUp] = useState(false)
    const [quantity, setQuantity] = useState(1)
    
    const handleAddToCart = () => {
        setQuantity(1)
        setPopUp(true)
        addToCart({...product, quantity})
        setTimeout(() => {
            setPopUp(false)
        }, 1700)
    };

    const increaseQuantity = () => {
        setQuantity(previousQuantity => previousQuantity + 1)
    }

    const decreaseQuantity = () => {
        setQuantity(previousQuantity => (previousQuantity > 1 ? previousQuantity - 1 : previousQuantity))
    }

    return(
        <div className="w-1/2 p-6 overflow-auto">
            <h1 className="text-6xl font-bold text-[#095EAE] mb-10">{product.name}</h1>
            <p className="text-[#1E1E1E] text-xl mb-10">{product.description}</p>
            {/* price */}
            <p className="text-5xl font-medium text-[#1E1E1E] mb-10">₵{product.price.toFixed(2)}</p>
            
            <div className="mb-10">
                {/* quantity */}
                <h3 className="text-[#757575] text-base mb-2">Quantity</h3>
                <div className="flex items-center mb-10">
                    <button onClick={decreaseQuantity} className="bg-[#095EAE] text-[#FFFFFF] font-semibold w-[45px] h-[45px] inline-flex items-center justify-center text-3xl rounded-lg hover:bg-opacity-75" style={{lineHeight: '42px'}}>-</button>
                    <span className="text-xl font-medium mx-4">{quantity}</span>
                    <button onClick={increaseQuantity} className="bg-[#095EAE] text-[#FFFFFF] font-semibold w-[45px] h-[45px] inline-flex items-center justify-center text-3xl rounded-lg hover:bg-opacity-75" style={{lineHeight: '42px'}}>+</button>
                </div>
                {/* add to cart */}
                <button className="border-[#095EAE] border-2  font-semibold bg-[#FFFFFF] text-[#095EAE] px-6 py-3 rounded-xl hover:bg-[#095EAE] hover:text-[#FFF] transition duration-300 inline-flex items-center" onClick={handleAddToCart}><FiShoppingCart className="mr-2"/>Add To Cart</button>
            </div>

            <div className="flex flex-col">
            <p className="flex text-[#757575] items-center mb-2"><FaBan className="mr-2"/>No Refunds</p>
            <p className="flex text-[#757575] items-center"><FaTruck className="mr-2"/>Delivery Estimate: 1-2 weeks</p>
            </div>
            {/* pop up */}
            {popUp && (
                <>
                {/* background */}
                <div className="fixed inset-0 bg-[#000000] opacity-50 z-40"></div>

                {/* message */}
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-[#FFFFFF] text-[#095EAE] py-16 px-24 rounded-xl text-3xl font-semibold flex flex-col items-center justify-center w-1/2 h-1/2">
                        <FaCheckCircle className="text-[#095EAE] text-9xl animate-bounce mb-8"></FaCheckCircle>
                        Successfully Added To Cart!
                    </div>
                </div>
                </>
            )}
        </div>
    )
}

export default Details