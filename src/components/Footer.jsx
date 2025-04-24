import { Link } from "react-router-dom";

const Footer = () => {

    return (

        <div className="mt-16 mb-16 px-4 sm:px-8 lg:px-16">
            {/* Horizontal Line */}
            <hr className="border-t-2 border-white mb-8" />
            <div className="flex flex-wrap justify-between space-y-8 sm:space-y-0">
                {/* GhostStack Designs Section */}
                <div className="w-full sm:w-1/2 lg:w-1/3 ">
                    <div className="flex justify-center">
                        <Link onClick={() => window.scrollTo(0, 0)} to='/home'>
                            <img className="h-44" alt="GhostStack Designs Logo" src="/img/ghostStack.svg" />
                        </Link>
                    </div>
                    <h3 className="text-lg sm:text-xl mb-8">
                        We believe small businesses deserve more. You don’t have to be big to look big online. Your website should reflect the hard work you put in every day. Let’s build something great together that shows off your business in the best light.
                    </h3>
                    <Link onClick={() => window.scrollTo(0, 0)}
                        id="get-started-button-bigger" 
                        to='/contact' 
                        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                        Get Started Today
                    </Link>
                </div>

                {/* Helpful Links Section */}
                <div className="w-full sm:w-1/3 lg:w-1/4 mt-4">
                    <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Helpful Links</h1>
                    <div className="flex flex-col space-y-2">
                        <Link onClick={() => window.scrollTo(0, 0)} to='/home' className="text-lg sm:text-xl hover:underline">Home</Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to='/about' className="text-lg sm:text-xl hover:underline">About Us</Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to='/services' className="text-lg sm:text-xl hover:underline">Services</Link>
                        <Link onClick={() => window.scrollTo(0, 0)} to='/contact' className="text-lg sm:text-xl hover:underline">Contact Us</Link>
                    </div>
                </div>

                {/* Contact Information Section */}
                <div className="w-full md:mt-4 sm:w-1/3 lg:w-1/4">
                    <h1 className="text-2xl sm:text-3xl font-semibold mb-4">Contact Information</h1>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <img className="mr-4 w-6 h-6" src="/img/icons/24hour.svg" alt="24/7" />
                            <h3 className="text-lg sm:text-xl">24/7</h3>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-4 w-6 h-6" src="/img/icons/phone.svg" alt="Phone" />
                            <a href="tel:9723380991" className="text-lg sm:text-xl">972-338-0991</a>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-4 w-6 h-6" src="/img/icons/email.svg" alt="Email" />
                            <a href="mailto:ghoststackdesigns@gmail.com" className="text-lg sm:text-xl">ghoststackdesigns@gmail.com</a>
                        </div>
                        <div className="flex items-center">
                            <img className="mr-4 w-6 h-6" src="/img/icons/pin.svg" alt="Location" />
                            <h3 className="text-lg sm:text-xl">Texas, United States</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
