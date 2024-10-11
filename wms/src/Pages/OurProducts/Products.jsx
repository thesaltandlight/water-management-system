import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const productList = [
    {id: 1, image:'/assets/dispenser-bottles.jpg', name:'19L Dispenser Bottle', price:'₵40.00'},
    {id: 2, image:'/assets/bottled-water1.jpg', name:'5L Bottled Water', price:'₵40.00'},
    {id: 3, image:'/assets/bottled-water2.jpg', name:'1.5L Bottled Water', price:'₵40.00'},
    {id: 4, image:'/assets/sachet-water.jpeg', name:'750ml Bottled Water', price:'₵40.00'},
    {id: 5, image:'/assets/dispenser-bottles.jpg', name:'500ml Bottled Water', price:'₵40.00'},
    {id: 6, image:'/assets/bottled-water1.jpg', name:'330ml Bottled Water', price:'₵40.00'},
];

function Products() {
    const [popUp, setPopUp] = useState(false);

    const handleAddToCart = () => {
        setPopUp(true)
        setTimeout(() => {
            setPopUp(false)
        }, 2000)
    }

    return (
        <div className="w-11/12 mx-auto mb-10 -mt-44">
            {/* card section header */}
            <img src="/assets/OurProducts.png" className="mt-28 mx-auto w-[600px] h-auto"></img>
            <p className="text-[#1E1E1E]">At Aquaverse, we offer a premium selection of pure, mineral-rich drinking water designed to keep you hydrated and healthy. Each bottle is infused with the perfect balance of essential nutrients like potassium, magnesium, and calcium, ensuring you get more than just refreshment—it&apos;s nourishment for your body. Experience clean, crisp hydration with every sip. Order now!</p>

            {/* product cards */}
            <div className="overflow-x-scroll flex space-x-4 mt-5 mb-4 scrollbar-hide">
                {productList.map((product) => (
                    <div className="min-w-[250px] h-[400px] bg-white rounded-2xl border-2 border-[#095EAE] overflow-hidden flex flex-col items-center justify-center" key={product.id}>
                        <Link to={`/productDetails/${product.id}`}>
                            {/* product image */}
                            <div className="h-56 w-full flex justify-center items-center bg-[#FFFFFF]">
                                <img src={product.image} alt={product.name} className="h-44 w-auto" />
                            </div>

                            {/* product name and price */}
                            <div className="p-4 flex flex-col justify-between items-center">
                                <p className="text-xl text-center font-semibold text-[#24619D] mb-2">{product.name}</p>
                                <p className="text-2xl text-center font-medium">{product.price}</p>
                            </div>
                        </Link>

                        {/* buttons -------------------------*/}
                        <div className="flex justify-between p-4">
                            <button className="border-2 border-[#095EAE] text-[#095EAE] hover:bg-[#095EAE] hover:text-[#FFFFFF] py-2 px-4 rounded-xl font-medium transition duration-300">Buy Now</button>
                            <button onClick={handleAddToCart} className="bg-[#095EAE] py-2 px-4 rounded-xl hover:bg-opacity-80 ml-10">
                                <FiShoppingCart className="text-[#FFFFFF]" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* PopUp */}
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
    );
}

export default Products;
