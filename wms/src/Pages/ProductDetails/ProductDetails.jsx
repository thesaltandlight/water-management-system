import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import RecommendedProducts from "./Recommended";
import { useCart } from "../Cart/CartContext";
import Details from "./Details";

const products = [
    { id: 1, image: '/assets/DispenserBottle.png', name: '19L Dispenser Bottle', price: 40.00, description: 'Designed for use with water dispensers, offering 19 liters of fresh, clean drinking water. Ideal for home or office hydration needs, and ensures convenient access to large quantities of water while reducing plastic waste.'},
    { id: 2, image: '/assets/5LBottle.png', name: '5L Bottled Water', price: 18.00, description: 'Crafted for convenience and hydration, our 5L bottled water provides a perfect solution for both home and office use. This portable size ensures easy access to fresh, clean drinking water whenever you need it, making it ideal for busy lifestyles. Enjoy the benefits of ample hydration while contributing to a reduction in plastic waste with our eco-friendly packaging.'},
    { id: 3, image: '/assets/1.5LBottle.png', name: '1.5L Bottled Water', price: 48.00, description: 'Our 1.5L bottled water is the perfect companion for hydration on the go, whether at the gym or during outdoor activities. Each bottle offers crisp, refreshing water that keeps you energized throughout the day. Enjoy the convenience of eco-friendly packaging while quenching your thirst and promoting a healthy lifestyle.'},
    { id: 4, image: '/assets/750mlBottle.png', name: '750ml Bottled Water', price: 40.00, description: 'Our 750ml bottled water is ideal for those seeking a compact and convenient hydration solution. Perfect for on-the-go lifestyles, this bottle fits easily in bags, making it a great choice for work, travel, or workouts. Enjoy refreshing, pure water that supports your daily hydration needs while reducing plastic waste.'},
    { id: 5, image: '/assets/500mlBottle.png', name: '500ml Bottled Water', price: 30.00, description: 'The 500ml bottled water is designed for quick and easy hydration, making it perfect for busy individuals. Its portable size fits seamlessly into any bag, ensuring you stay refreshed wherever you go. Enjoy clean, crisp water that keeps you hydrated while contributing to a sustainable lifestyle.'},
    { id: 6, image: '/assets/330mlBottle.png', name: '330ml Bottled Water', price: 19.00, description: 'The 330ml bottled water is the ultimate choice for on-the-go hydration, perfectly sized for your purse or backpack. Each bottle delivers refreshing, clean water, ensuring you stay hydrated throughout your day. Ideal for quick refreshment, it supports a sustainable lifestyle without compromising on quality.'},
    { id: 7, image: '/assets/500mlSachet.png', name: '500ml Sachet Water Pack', price: 10.00, description: 'Our 500ml sachet water is a convenient and portable option for hydration wherever you are. Packaged for easy carry, its perfect for outdoor activities, travel, or quick refreshment at home. Enjoy pure, crisp water that meets your hydration needs while promoting a responsible choice for the environment.'},
];



function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if(!product){
        return(
            <div>
                <Header/>
                <div className="flex justify-center items-center h-screen">
                    <h2 className="text-3xl font-semibold text-red-500">Product not found!</h2>
                </div>
            </div>
        )
    }

    const {addToCart} = useCart();
    

    return (
        <div className="fixed inset-0 overflow-hidden">
            <Header />
            <div className="flex h-full">
                {/* left side */}
                <div className="w-1/2 p-6 flex flex-col">
                    <div className="flex w-full justify-center items-center overflow-hidden">
                        <img src={product.image} className="object-contain max-w-full max-h-full" />
                    </div>

                    <div className="mt-6">
                        <RecommendedProducts products={products} activeProductId={parseInt(id)}/>
                    </div>
                </div>

                {/* right side */}
                <Details product={product} addToCart={addToCart}/>
            </div>
        </div>
    );
}

export default ProductDetails;
