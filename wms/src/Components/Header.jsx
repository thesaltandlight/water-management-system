import {FaUserCircle, FaShoppingCart, FaBell} from 'react-icons/fa'

function Header(){
    return(
        <header className="flex items-center justify-between p-4 bg-transparent text-[#24619D]">
            <div className='flex items-center'>
                <img src='/assets/logo.png' alt='logo' className='h-12 w-auto mr-6'></img>
            </div>

            <nav className='flex space-x-10 text-lg font-semibold'>
                <a href='/home' className='hover:text-[#24619D]'>Home</a>
                <a href='/ourProducts' className='hover:text-[#24619D]'>Our Products</a>
                <a href='/aboutUs' className='hover:text-[#24619D]'>About Us</a>
                <a href='/delivery' className='hover:text-[#24619D]'>Delivery</a>
                <a href='/contactUs' className='hover:text-[#24619D]'>Contact Us</a>
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
