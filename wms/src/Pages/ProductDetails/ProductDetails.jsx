import Header from "../../Components/Header";
import { useParams } from "react-router-dom";


const products =[
    { id: 1, image: '/assets/dispenser-bottles.jpg', name: 'Dispenser Bottles', price: '₵40.00', description: 'Description for Dispenser Bottles', manufacturer: 'Verna'},
    { id: 2, image: '/assets/bottled-water1.jpg', name: 'Bottled Water (500ml)', price: '₵40.00', description: 'Description for Bottled Water (500ml)', manufacturer: 'Verna'},
    { id: 3, image: '/assets/bottled-water2.jpg', name: 'Bottled Water (700ml)', price: '₵40.00', description: 'Description for Bottled Water (750ml)', manufacturer: 'Verna' },
    { id: 4, image: '/assets/sachet-water.png', name: 'Voltic Sachet Water', price: '₵40.00', description: 'Voltic Sachet Water offers pure, refreshing hydration in a convenient, easy-to-carry package. Known for its quality and taste, it’s a trusted choice for clean, safe drinking water on the go.', manufacturer: 'Verna' },
    { id: 5, image: '/assets/dispenser-bottles.jpg', name: 'Dispenser Bottles', price: '₵40.00', description: 'Description for Dispenser Bottles', manufacturer: 'Verna'},
    { id: 6, image: '/assets/bottled-water1.jpg', name: 'Bottled Water (500ml)', price: '₵40.00', description: 'Description for Bottled Water (500ml)', manufacturer: 'Verna' },
    { id: 7, image: '/assets/bottled-water2.jpg', name: 'Bottled Water (700ml)', price: '₵40.00', description: 'Description for Bottled Water (700ml)', manufacturer: 'Verna' },
    { id: 8, image: '/assets/sachet-water.png', name: 'Voltic Sachet Water', price: '₵40.00', description: 'Description for Voltic Sachet Water', manufacturer: 'Verna' },
];

function ProductDetails(){
    const {id} = useParams()
    const product = products.find(p=> p.id === parseInt(id))
    
    return(
        <div>
            <Header/>
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center">
                        <div className="w-1/2 h-screen">
                            <img src={product.image}/>
                        </div>
                    </div>

                    <div> 
                        <div>
                            <h1 className="text-5xl font-semibold font-serif text-[#24619D] mb-4">{product.name}</h1>
                            <p className="text-xl text-[#7BA5C9] mb-8">{product.description}</p>
                            <p className="text-sm text-[#5F5F5F] font-bold mb-1">Price</p>
                            <p className="text-4xl font-medium text-[#7BA5C9] mb-4">{product.price}</p>
                            <button className="bg-[#24619D] font-semibold text-[#FFFFFF] px-6 py-3 rounded-lg shadow-lg hover:bg-[#113e6c] transition duration-300">Add To Cart</button>
                        </div>

                        <div className="mt-12">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recommended Products</h2>
                    <div className="flex space-x-4 overflow-x-scroll scrollbar-hide">
                        {products.slice(0, 5).map((product) => (
                            <div key={product.id} className="min-w-[150px] bg-white rounded-lg shadow-lg overflow-hidden">
                                <img src={product.image} alt={product.name} className="h-32 w-full object-cover" />
                                <div className="p-4">
                                    <p className="font-semibold">{product.name}</p>
                                    <p>{product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                        
                    </div>

                    
                </div>
            </div>
        </div>

    )
}

export default ProductDetails