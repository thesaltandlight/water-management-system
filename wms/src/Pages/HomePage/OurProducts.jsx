import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const productList = [
    {id: 1, image:'/assets/DispenserBottle.png', name:'19L Dispenser Bottle', price:'₵40.00'},
    {id: 2, image:'/assets/5LBottle.png', name:'5L Bottled Water', price:'₵18.00'},
    {id: 3, image:'/assets/1.5LBottle.png', name:'1.5L Bottled Water', price:'₵48.00'},
    {id: 4, image:'/assets/750mlBottle.png', name:'750ml Bottled Water', price:'₵40.00'},
    {id: 5, image:'/assets/500mlBottle.png', name:'500ml Bottled Water', price:'₵30.00'},
    {id: 6, image:'/assets/330mlBottle.png', name:'330ml Bottled Water', price:'₵19.00'},
    {id: 7, image:'/assets/500mlSachet.png', name:'500ml Sachet Water Pack', price:'₵10.00'},
];

function Products() {
    const [popUp, setPopUp] = useState(false);
    const [quantity, setQuantity] = useState(productList.map(() => 1))

    const handleAddToCart = (index) => {
        setPopUp(true)
        setQuantity((previousQuantity) =>
        previousQuantity.map((item, i) => (i === index ? 1 : item)))
        setTimeout(() => {
            setPopUp(false)
        }, 1700)
    }

    const increaseQuantity = (index) => {
        setQuantity((previousQuantity) => 
        previousQuantity.map((item, i) => (i === index ? item + 1 : item)))
    }

    const decreaseQuantity = (index) => {
        setQuantity((previousQuantity) => 
        previousQuantity.map((item, i) => (i === index && item > 1 ? item - 1 : item)))
    }

    return (
        <div className="w-11/12 mx-auto mb-10 -mt-20">
            {/* card section header */}
            <img src="/assets/OurProducts.png" className="mt-28 mx-auto w-[600px] h-auto"></img>

            {/* product cards */}
            <div className="overflow-x-scroll flex space-x-4 mt-5 mb-4 scrollbar-hide">
                {productList.map((product, index) => (
                    <div className="min-w-[250px] h-[400px] bg-[#FFFFFF] rounded-2xl border-2 border-[#095EAE] overflow-hidden flex flex-col items-center justify-center" key={product.id}>
                        <Link to={`/productDetails/${product.id}`}>
                            {/* product image */}
                            <div className="h-56 w-full flex justify-center items-center bg-[#FFFFFF]">
                                <img src={product.image} alt={product.name} className="h-44 w-auto" />
                            </div>

                            {/* product name and price */}
                            <div className="p-4 flex flex-col justify-between items-center">
                                <p className="text-xl text-center font-semibold text-[#095EAE] mb-2 truncate w-full">{product.name}</p>
                                <p className="text-2xl text-center font-medium">{product.price}</p>
                            </div>
                        </Link>
                        
                        
                        <div className="flex justify-between items-center p-6 w-full">
                            <div className="flex items-center space-x-2">
                                {/* quantity */}
                                <button onClick={() => decreaseQuantity(index)} className="bg-[#095EAE] text-[#FFFFFF] font-bold py-2 px-3 rounded-lg">-</button>
                                <span className="text-lg font-medium">{quantity[index]}</span>
                                <button onClick={() => increaseQuantity(index)} className="bg-[#095EAE] text-[#FFFFFF] font-bold py-2 px-3 rounded-lg">+</button>
                            </div>

                            {/* cart */}
                            <button onClick={() => handleAddToCart(index)} className="bg-[#FFFFFF] border-2 border-[#095EAE] py-3 px-3 rounded-xl hover:bg-opacity-80 ml-auto"><FiShoppingCart className=" text-[#095EAE] " /></button>
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
