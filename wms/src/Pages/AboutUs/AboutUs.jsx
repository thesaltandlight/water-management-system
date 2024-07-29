import Header from "../../Components/Header"
import { motion} from 'framer-motion'
import ChooseUs from "../HomePage/ChooseUs"

function AboutUs(){
    return(
        <div>
            <Header/>
            <main>
                <div className="flex h-3/4 items-center justify-between p-6 bg-white">

                    <div className="flex-1 max w-w-3/4 pr-6">
                        <h1 className="text-[80px] font-extrabold font-serif ml-10 text-[#24619D] fade-in-slide-up">
                            <span className="wave">ABOUT</span> <span className="wave" style={{animationDelay: '0.1s'}}>US</span>
                        </h1>
                        <h2 className="text-3xl font-semibold font-serif mt-2 ml-10 text-[#7BA5C9] fade-in-slide-up">Reliable Water, Anytime, Anywhere</h2>
                    </div>

                    <div className="flex-1 max-w-1/4 flex justify-center">
                        <img src="/assets/AboutUs.png" className="w-3/4 h-auto max-w-md mr-24 fade-in-slide-up"></img>
                    </div>
                </div>



                <div className="flex flex-col items-center justify-center p-4 mt-10 bg-[#DDE9F5]">
                        <h1 className="text-4xl mb-8 font-bold text-center text-[#24619D] ">We are a leading company in water management systems providing innovative solutions for water conservation and efficient usage</h1>
                        <p className="text-lg text-center max-w-8xl">Founded in 2020, AquaVerse has rapidly grown to become a trusted name in the water delivery industry. Our commitment to excellence and customer satisfaction has driven us to continually improve our services and expand our reach. We believe that access to clean and safe drinking water is a fundamental right, and we are dedicated to ensuring that our customers receive the best possible service at all times. Our team of dedicated professionals works tirelessly to ensure that every delivery is timely and every customer is satisfied. Join us on our journey to make the world a healthier place, one drop at a time.</p>
                </div>
                

                <div className="flex flex-wrap justify-center gap-20 mt-20 mb-20">
                    <motion.div className="max-w-sm p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105" whileHover={{scale:1.1, backgroundColor: '#24619D'}}>
                    <motion.div className="text-3xl font-semibold text-[#24619D] mb-4" whileHover={{color: '#FFFFFF'}}>Our Mission</motion.div>
                    <motion.div className="text-[#7BA5C9]" whileHover={{}}>To deliver high-quality products and water management solutions that help communities conserve water and improve their quality of life.</motion.div>
                    </motion.div>

                    <motion.div className="max-w-sm p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105" whileHover={{scale:1.1, backgroundColor: '#24619D'}}>
                    <h2 className="text-3xl font-semibold text-[#24619D] mb-4">Our Vision</h2>
                    <p className="text-[#7BA5C9]">A world where every drop of water is valued and efficiently managed for the benefit of all.</p>
                    </motion.div>

                    <motion.div className="max-w-sm p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105" whileHover={{scale:1.1, backgroundColor: '#24619D'}}>
                    <h2 className="text-3xl font-semibold text-[#24619D] mb-4">Our Values</h2>
                    <p className="text-[#7BA5C9]">Innovation, Sustainability, and Community Empowerment.</p>
                    </motion.div>
                </div>

                <div>
                    <ChooseUs/>
                </div>
            </main>
        </div>
    )
}



export default AboutUs

