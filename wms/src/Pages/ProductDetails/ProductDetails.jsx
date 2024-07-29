import Header from "../../Components/Header";
import { useParams } from "react-router-dom";
import RecommendedProducts from "./Recommended";

const products = [
    { id: 1, image: '/assets/dispenser-bottles.jpg', name: 'Dispenser Bottles', price: '₵40.00', description: 'Pure, bottled water enriched with essential minerals for added health benefits. It is ideal for maintaining a balanced diet.', manufacturer: 'Verna'},
    { id: 2, image: '/assets/bottled-water1.jpg', name: 'Bottled Water (500ml)', price: '₵40.00', description: 'Fresh, natural water sourced from underground springs. It offers a clean and crisp taste.', manufacturer: 'Verna'},
    { id: 3, image: '/assets/bottled-water2.jpg', name: 'Bottled Water (700ml)', price: '₵40.00', description: 'Water purified through distillation, removing impurities and contaminants. It is perfect for medical and industrial uses.', manufacturer: 'Verna' },
    { id: 4, image: '/assets/sachet-water.png', name: 'Voltic Sachet Water', price: '₵40.00', description: 'Water with a higher pH level, believed to neutralize acidity in the body. Many claim it helps with detoxification..', manufacturer: 'Verna' },
    { id: 5, image: '/assets/dispenser-bottles.jpg', name: 'Dispenser Bottles', price: '₵40.00', description: 'Carbonated water that offers a fizzy, refreshing experience. It is a great alternative to sugary sodas.', manufacturer: 'Verna'},
    { id: 6, image: '/assets/bottled-water1.jpg', name: 'Bottled Water (500ml)', price: '₵40.00', description: 'Infused with natural flavors for a refreshing twist without added sugars. It is a tasty way to stay hydrated.', manufacturer: 'Verna' },
    { id: 7, image: '/assets/bottled-water2.jpg', name: 'Bottled Water (700ml)', price: '₵40.00', description: 'Enhanced with electrolytes to help with hydration and energy replenishment. Ideal for athletes and active individuals.', manufacturer: 'Verna' },
    { id: 8, image: '/assets/sachet-water.png', name: 'Voltic Sachet Water', price: '₵40.00', description: 'Refreshing, pure spring water in a convenient bottle. Crisp taste and essential hydration for an active lifestyle. Perfect for on-the-go, workouts, or the office.', manufacturer: 'Verna' },
];

function ProductDetails() {
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    return (
        <div className="fixed inset-0 overflow-hidden">
            <Header />
            <div className="flex h-full">
                <div className="flex w-1/2 justify-center items-center overflow-hidden">
                    <img src={product.image} className="object-contain max-w-full max-h-full" />
                </div>
                <div className="w-1/2 p-6 overflow-auto">
                    <h1 className="text-5xl font-semibold font-serif text-[#24619D] mb-3">{product.name}</h1>
                    <p className="text-lg text-[#7BA5C9] mb-2">{product.description}</p>
                    <p className="text-lg mb-4">
                        <span className="text-[#5F5F5F] font-bold">Manufacturer:</span> <span className="text-[#24619D]">{product.manufacturer}</span>
                    </p>
                    <p className="text-sm text-[#5F5F5F] font-bold mb-1">Price</p>
                    <p className="text-4xl font-medium text-[#7BA5C9] mb-4">{product.price}</p>
                    <button className="bg-[#24619D] font-semibold text-[#FFFFFF] px-6 py-3 rounded-lg shadow-lg hover:bg-[#113e6c] transition duration-300">Add To Cart</button>

                    <RecommendedProducts products={products}/>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
