import { Link } from "react-router-dom";

const shuffleProducts = (array) => {
    let shuffledProducts = array.slice();
    for (let i = shuffledProducts.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledProducts[i], shuffledProducts[j]] = [shuffledProducts[j], shuffledProducts[i]]
    }
    return shuffledProducts;
}

function RecommendedProducts({ products, activeProductId }) {
    const filteredProducts = products.filter(product => product.id !== activeProductId)
    const shuffledProducts = shuffleProducts(filteredProducts)

    return (
        <div className="mt-10 mb-9">
            <h2 className="text-[20px] font-semibold text-[#1E1E1E] mb-2">More Products</h2>
            {/* product cards */}
            <div className="flex space-x-4 overflow-x-scroll scrollbar-hide mb-20">
                {shuffledProducts.slice(0, 5).map((product) => (
                    <div className="w-[125px] h-[200px] bg-[#FFF] rounded-xl border-[#095EAE] border-2 overflow-hidden flex flex-col items-center justify-center" key={product.id}>
                        <Link to={`/productDetails/${product.id}`}>
                            {/* image */}
                            <div className="h-24 w-full flex justify-center items-center bg-[#FFFFFF]">
                                <img src={product.image} alt={product.name} className="h-20 w-auto" />
                            </div>

                            {/* name and price */}
                            <div className="p-2 flex flex-col justify-between items-center">
                                <p className="text-xs text-center font-medium text-[#095EAE] mb-1 w-[100px] truncate overflow-hidden whitespace-nowrap">{product.name}</p>
                                <p className="text-sm text-center font-medium">₵{product.price.toFixed(2)}</p>
                            </div>

                            <div className="p-2 flex items-center justify-center">
                                <button className="bg-[#095EAE] py-1 px-2 text-left text-xs text-[#FFF] hover:bg-opacity-80 rounded-lg">View Product</button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecommendedProducts;
