import { Link } from "react-router-dom";

const products = [
    {id: 1, image:'/assets/dispenser-bottles.jpg', name:'19L Dispenser Bottle', price:'₵40.00'},
    {id: 2, image:'/assets/bottled-water1.jpg', name:'5L Bottled Water', price:'₵40.00'},
    {id: 3, image:'/assets/bottled-water2.jpg', name:'1.5L Bottled Water', price:'₵40.00'},
    {id: 4, image:'/assets/sachet-water.png', name:'750ml Bottled Water', price:'₵40.00'},
    {id: 5, image:'/assets/dispenser-bottles.jpg', name:'500ml Bottled Water', price:'₵40.00'},
    {id: 6, image:'/assets/bottled-water1.jpg', name:'330ml Bottled Water', price:'₵40.00'},
];

function OurProducts() {
    return (
        <div className="w-11/12 mx-auto mb-10" style={{marginTop: -70}}>
            {/* card section header */}
            <img src="/assets/OurProducts.png" className="mt-28 mx-auto w-[600px] h-auto"></img>

            {/* product cards */}
            <div className="overflow-x-scroll flex space-x-4 mt-5 mb-4 scrollbar-hide">
                {products.map((product) => (
                    <Link to={`/productDetails/${product.id}`} key={product.id}>
                        <div className="min-w-[250px] h-[400px] bg-white rounded-2xl border-2 border-[#095EAE] shadow-lg overflow-hidden flex flex-col items-center justify-center">
                            {/* product image */}
                            <div className="h-56 w-full flex justify-center items-center bg-[#FFFFFF]">
                                <img src={product.image} alt="product" className="h-44 w-auto" />
                            </div>
                            {/* product name and price */}
                            <div className="p-4 rounded-2xl rounded-b-xl flex flex-col justify-between h-[144px] w-56">
                                <div className="flex-grow flex items-center justify-center">
                                    <p className="text-xl text-center font-semibold text-[#24619D] mb-2">{product.name}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-lg font-semibold text-left">{product.price}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default OurProducts;
