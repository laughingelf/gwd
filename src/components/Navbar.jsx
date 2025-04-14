import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='w-full bg-gray-500 px-4 py-3 rounded mb-8'>
            <div className='max-w-full mx-auto flex items-center justify-between'>
                {/* Logo */}
                <div>
                    <Link to='/home' id='nav-link' className='text-xl'>
                        <img className='h-12' src='/img/ghost.svg' />
                    </Link>
                </div>

                {/* Hamburger (Mobile) */}
                <div className='lg:hidden'>
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Nav Links - Desktop */}
                <div className='hidden lg:flex items-center space-x-6 text-lg'>
                    <Link to='/home' id='nav-link'>Home</Link>
                    <Link to='/about' id='nav-link'>About Us</Link>
                    <Link to='/services' id='nav-link'>Services</Link>
                    <Link to='/contact' id='nav-link'>Contact</Link>
                </div>

                {/* Get Started - Desktop */}
                <div className='hidden lg:block'>
                    <Link to='/contact' id='get-started-button'>Get Started</Link>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='lg:hidden mt-4 flex flex-col space-y-3 text-center text-base'>
                    <Link to='/home' id='nav-link' onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to='/about' id='nav-link' onClick={() => setIsOpen(false)}>About Us</Link>
                    <Link to='/services' id='nav-link' onClick={() => setIsOpen(false)}>Services</Link>
                    <Link to='/contact' id='nav-link' onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link to='/contact' id='get-started-button' onClick={() => setIsOpen(false)}>Get Started</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
