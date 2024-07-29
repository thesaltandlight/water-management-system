import { Link } from "react-router-dom";

function RecommendedProducts({ products }) {
    return (
        <div className="mt-10 mb-9">
            <h2 className="text-2xl font-bold text-[#5F5F5F] ">Recommended Products</h2>
            <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
                {products.slice(0, 5).map((product) => (
                    <Link to={`/productDetails/${product.id}`} key={product.id} className="min-w-[210px] h-[320px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center mb-9">
                        <div className="h-48 w-full flex justify-center items-center bg-[#FFFFFF]">
                            <img src={product.image} alt={product.name} className="h-40 w-auto" />
                        </div>
                        <div className="p-4 bg-[#DDE9F5] rounded-2xl rounded-b-xl flex flex-col justify-between h-[130px] w-[200px] mb-1">
                            <div className="flex-grow flex items-center justify-center">
                                <p className="text-base text-center font-extrabold text-[#24619D] mb-2">{product.name}</p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                                <p className="text-lg font-semibold text-left">{product.price}</p>
                                <img src="/assets/addToCart.png" alt="Add to Cart" className="h-8 w-8 cursor-pointer" />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default RecommendedProducts;
