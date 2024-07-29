import { NavLink } from 'react-router-dom';
import {FaUserCircle, FaShoppingCart, FaBell} from 'react-icons/fa'

function Header(){
    return(
        <header className="flex items-center justify-between p-4 bg-transparent text-[#24619D]">
            <div className='flex items-center'>
                <img src='/assets/logo.png' alt='logo' className='h-12 w-auto mr-6'></img>
            </div>

            <nav className='flex space-x-10 text-lg font-semibold'>
                <NavLink to='/home' className={({isActive}) => isActive ? 'font-bold text-xl' : 'hover:text-[#24619D]'} >Home</NavLink>
                <NavLink to='/ourProducts' className={({isActive}) => isActive ? 'font-bold text-xl' : 'hover:text-[#24619D]'} >Our Products</NavLink>
                <NavLink to='/aboutUs' className={({isActive}) => isActive ? 'font-bold text-xl' : 'hover:text-[#24619D]'} >About Us</NavLink>
                <NavLink to='/delivery' className={({isActive}) => isActive ? 'font-bold text-xl' : 'hover:text-[#24619D]'} >Delivery</NavLink>
                <NavLink to='/contactUs' className={({isActive}) => isActive ? 'font-bold text-xl' : 'hover:text-[#24619D]'}>Contact Us</NavLink>
            </nav>

            <div className='flex items-center space-x-6'>
                <FaBell className='text-2xl cursor-pointer hover:text-[#24619D]'/>
                <FaUserCircle className='text-2xl hover:text-[#24619D]'/>
                <FaShoppingCart className='text-2xl hover:text-[#24619D]' />
            </div>
        </header>
    )
}
export default Header;
