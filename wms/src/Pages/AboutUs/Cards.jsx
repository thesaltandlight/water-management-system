import { motion} from 'framer-motion'

function Cards(){
    return(
        <div className="flex flex-wrap justify-center gap-20 mt-2">
            <motion.div className="max-w-sm p-6 bg-[#FFFFFF] shadow-lg rounded-lg transform transition-transform hover:scale-105 group" whileHover={{scale:1.2, backgroundColor: '#095EAE'}}>
            <h2 className="text-3xl font-semibold text-[#095EAE] mb-4 group-hover:text-[#FFFFFF] transition-colors">Our Mission</h2>
            <p className="text-[#7BA5C9] font-light group-hover:text-[#FFFFFF] transition-colors">To deliver high-quality products and water management solutions that help communities conserve water and improve their quality of life.</p>
            </motion.div>

            <motion.div className="max-w-sm p-6 bg-[#FFFFFF] shadow-lg rounded-lg transform transition-transform hover:scale-105 group" whileHover={{scale:1.2, backgroundColor: '#095EAE'}}>
            <h2 className="text-3xl font-semibold text-[#095EAE] mb-4 group-hover:text-[#FFFFFF] transition-colors">Our Vision</h2>
            <p className="text-[#7BA5C9] font-light group-hover:text-[#FFFFFF] transition-colors">A world where every drop of water is valued and efficiently managed for the benefit of all.</p>
            </motion.div>

            <motion.div className="max-w-sm p-6 bg-[#FFFFFF] shadow-lg rounded-lg transform transition-transform hover:scale-105 group" whileHover={{scale:1.2, backgroundColor: '#095EAE'}}>
            <h2 className="text-3xl font-semibold text-[#095EAE] mb-4 group-hover:text-[#FFFFFF] transition-colors">Our Values</h2>
            <p className="text-[#7BA5C9] font-light group-hover:text-[#FFFFFF] transition-colors">Innovation, Sustainability, and Community Empowerment.</p>
            </motion.div>
        </div>
    )
}

export default Cards