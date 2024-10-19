import { NavLink } from "react-router-dom";
import { FiUser, FiList, FiBell } from "react-icons/fi";

function Sidebar(){
    return(
        <aside className="w-1/5 bg-[#FFF] p-6 fixed top-0 left-0 h-full">
            <div className="absolute top-[5%] bottom-[5%] w-[1px] bg-[#757575] bg-opacity-40 right-0"></div>
            <NavLink to="/home" className="text-[#1E1E1E] mb-6 flex items-center space-x-2">
            <span className="text-[16px] text-[#095EAE] font-bold">← Back To Home</span>
            </NavLink>

            <nav>
                <ul className="space-y-4">
                    {/* profile */}
                    <li>
                        <NavLink to="/profile" className={({isActive}) => isActive ? "flex items-center space-x-2 text-[#095EAE]  text-[16px] font-bold bg-[#DDE9F5] rounded-lg px-4 py-3 w-[98%] mx-auto" : "flex items-center space-x-2 text-[16px] font-bold text-[#095EAE]  hover:text-[#A5CEEE] px-4 py-3"}><FiUser/><span>Profile</span></NavLink>
                    </li>
                    {/* order history button */}
                    <li>
                        <NavLink to="/orderHistory" className={({isActive}) => isActive ? "flex items-center space-x-2 text-[#095EAE]   text-[16px] font-bold bg-[#DDE9F5] rounded-lg px-4 py-3 w-[98%] mx-auto" : "flex items-center space-x-2 text-[16px] font-bold text-[#095EAE]  hover:text-[#A5CEEE] px-4 py-3"}><FiList/><span>Order History</span></NavLink>
                    </li>
                    {/* notifications button */}
                    <li>
                        <NavLink to="/notifications" className={({isActive}) => isActive ? "flex items-center space-x-2 text-[#095EAE]  text-[16px] font-bold bg-[#DDE9F5] rounded-lg px-4 py-3 w-[98%] mx-auto" : "flex items-center space-x-2 text-[16px] font-bold text-[#095EAE]  hover:text-[#A5CEEE] px-4 py-3"}><FiBell/><span>Notifications</span></NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar