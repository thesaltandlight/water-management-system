import Header from "../../Components/Header";
import { Link } from "react-router-dom";
import { useCart } from "../Cart/CartContext";

const products = [
    {id: 1, image:'/assets/dispenser-bottles.jpg', name:'Dispenser Bottles', price:'₵40.00', addToCart:'/assets/addToCart.png'},
    {id: 2, image:'/assets/bottled-water1.jpg', name:'Bottled Water (500ml)', price:'₵40.00', addToCart:'/assets/addToCart.png'},
    {id: 3, image:'/assets/bottled-water2.jpg', name:'Bottled Water (700ml)', price:'₵40.00', addToCart:'/assets/addToCart.png'},
    {id: 4, image:'/assets/sachet-water.png', name:'Voltic Sachet Water', price:'₵40.00', addToCart:'/assets/addToCart.png'},
    {id: 5, image:'/assets/dispenser-bottles.jpg', name:'Dispenser Bottles', price:'₵40.00', addToCart:'/assets/addToCart.png'},
    {id: 6, image:'/assets/bottled-water1.jpg', name:'Dispenser Bottles', price:'₵40.00', addToCart:'/assets/addToCart.png'},
    {id: 7, image:'/assets/bottled-water2.jpg', name:'Dispenser Bottles', price:'₵40.00', addToCart:'/assets/addToCart.png'},
    {id: 8, image:'/assets/sachet-water.png', name:'Dispenser Bottles', price:'₵40.00', addToCart:'/assets/addToCart.png'},
];


function OurProducts(){
    const {addToCart} = useCart();

    return(
        <div>
            <Header />
            <main>
                <div className="flex h-3/4 items-center justify-between p-6 bg-white">
                    <div className="flex-1 max-w-1/4 flex justify-center">
                        <img src="/assets/OurProducts.png" className="w-3/4 h-auto max-w-md mr-24 fade-in-slide-up"></img>
                    </div>

                    <div className="flex-1 max w-w-3/4 pr-6">
                    <h1 className="text-[80px] font-extrabold font-serif text-[#24619D] fade-in-slide-up">
                        <span className="wave">OUR</span> <span className="wave" style={{animationDelay: '0.1s'}}>PRODUCTS</span>
                    </h1>
                    <h2 className="text-3xl font-semibold font-serif mt-2  text-[#7BA5C9] fade-in-slide-up">Refresh Your Life One Sip At A Time</h2>
                    </div>
                </div>
                

                <div className="w-11/12 mx-auto mb-10 mt-20">
                    <h2 className="text-center text-6xl ml-20 font-extrabold text-[#24619D] my-9">Dispenser Bottles</h2>
                        <div className="overflow-x-scroll flex space-x-4 mb-4 scrollbar-hide">
                        {products.map((product) => (
                            <Link to={`/productDetails/${product.id}`} key={[product.id]} className="min-w-[250px] h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center">
                            <div className="h-56 w-full flex justify-center items-center bg-[#FFFFFF]">
                                <img src={product.image} alt="product" className="h-44 w-auto" />
                            </div>
                            <div className="p-4 bg-[#DDE9F5] rounded-2xl rounded-b-xl flex flex-col justify-between h-[144px] w-56">
                                <div className="flex-grow flex items-center justify-center">
                                    <p className="text-xl text-center font-extrabold text-[#24619D] mb-2">{product.name}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-lg font-semibold text-left">{product.price}</p>
                                    <img src={product.addToCart} alt="Add to Cart" className="h-10 w-10 cursor-pointer" onClick={() => addToCart({id:product.id, name: product.name, price: parseFloat(product.price.replace('₵', '')), image: product.image})}/>
                                </div>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>

                <div className="w-11/12 mx-auto mb-10 mt-20">
                    <h2 className="text-center text-6xl ml-20 font-extrabold text-[#24619D] my-9">1L Bottles</h2>
                        <div className="overflow-x-scroll flex space-x-4 mb-4 scrollbar-hide">
                        {products.map((product) => (
                        <Link to={`/productDetails/${product.id}`} key={[product.id]} className="min-w-[250px] h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center">
                            <div className="h-56 w-full flex justify-center items-center bg-[#FFFFFF]">
                                <img src={product.image} alt="product" className="h-44 w-auto" />
                            </div>
                            <div className="p-4 bg-[#DDE9F5] rounded-2xl rounded-b-xl flex flex-col justify-between h-[144px] w-56">
                                <div className="flex-grow flex items-center justify-center">
                                    <p className="text-xl text-center font-extrabold text-[#24619D] mb-2">{product.name}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-lg font-semibold text-left">{product.price}</p>
                                    <img src={product.addToCart} alt="Add to Cart" className="h-10 w-10 cursor-pointer" onClick={() => addToCart({id:product.id, name: product.name, price: parseFloat(product.price.replace('₵', '')), image: product.image})}/>
                                </div>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>

                <div className="w-11/12 mx-auto mb-10 mt-20">
                    <h2 className="text-center text-6xl ml-20 font-extrabold text-[#24619D] my-9">750ml Bottles</h2>
                        <div className="overflow-x-scroll flex space-x-4 mb-4 scrollbar-hide">
                        {products.map((product) => (
                        <Link to={`/productDetails/${product.id}`} key={[product.id]} className="min-w-[250px] h-[400px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center justify-center">
                            <div className="h-56 w-full flex justify-center items-center bg-[#FFFFFF]">
                                <img src={product.image} alt="product" className="h-44 w-auto" />
                            </div>
                            <div className="p-4 bg-[#DDE9F5] rounded-2xl rounded-b-xl flex flex-col justify-between h-[144px] w-56">
                                <div className="flex-grow flex items-center justify-center">
                                    <p className="text-xl text-center font-extrabold text-[#24619D] mb-2">{product.name}</p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-lg font-semibold text-left">{product.price}</p>
                                    <img src={product.addToCart} alt="Add to Cart" className="h-10 w-10 cursor-pointer" onClick={() => addToCart({id:product.id, name: product.name, price: parseFloat(product.price.replace('₵', '')), image: product.image})}/>
                                </div>
                            </div>
                        </Link>
                    ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default OurProducts;