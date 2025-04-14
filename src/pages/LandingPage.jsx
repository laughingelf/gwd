import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Website from "../components/Website";

const LandingPage = () => {

    return(

        <>
        <Navbar/>
        <div>
            <div className="flex justify-center ">
                <img alt="GhostStack Logo" className="h-90" src="/img/GhostStack360.svg" />
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center mt-2 p-6 lg:p-16">
                <div className="text-left lg:w-1/2">
                    <h4 id="bluetext" className="font-mono mono text-2xl sm:text-3xl mb-2">CUSTOM CODED, CUSTOM DESIGNS</h4>
                    <h1 id='big-text' className="text-4xl sm:text-5xl lg:text-6xl mb-6 sm:mb-8">AFFORDABLE WEB DESIGN FOR SMALL BUSINESS</h1>
                    <h7 className="text-lg sm:text-xl block">We don’t use WordPress or page builders — every site is custom-coded for speed, performance, and results. Plans start at $150/month.</h7>
                    <div className="mt-6 sm:mt-8">
                        <Link onClick={() => window.scrollTo(0, 0)} to='/contact' id='get-started-button'>Get Started</Link>
                        <Link onClick={() => window.scrollTo(0, 0)} id="about-us-button" className="ml-4 sm:ml-8 inline-block mt-4 sm:mt-0" to='/about'>About Us</Link>
                    </div>
                </div>
                <div className="mb-10 lg:mb-0 lg:w-1/2">
                    <img alt="computer, laptop, tablet, and phone showing beautiful websites" src="/img/landingPageTop.png" className="w-full max-w-md mx-auto"/>
                </div>
            </div>
            
            <div className="px-4 sm:px-8 md:px-16 mt-12">
                <h1 id="bluetext" className="text-3xl">WHAT WE DO</h1>
                <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 sm:px-4 md:px-16">
                    NEVER WORRY ABOUT YOUR WEBSITE AGAIN
                </h1>
                <h2 className="text-base sm:text-lg md:text-xl sm:px-4 md:px-16 sm:leading-relaxed md:leading-normal">
                    At GhostStack Designs, we focus on building high-performance, custom-coded websites for small businesses across the U.S. 
                    Our goal is to help local companies stay competitive in a world that's shifting more and more toward online shopping. 
                    Every site we create is hand-coded for speed, SEO, and long-term success—no page builders, no shortcuts. We handle updates 
                    for you, so you can focus on running your business. As a growing company ourselves, we're investing in our future by helping 
                    small businesses thrive alongside us.
                </h2>
            </div>

            <div className="mt-22 flex flex-wrap justify-center items-center gap-8 px-4 gap-y-12">
                <div id="service-cards" className="relative w-full sm:w-1/2 md:w-1/3 p-4">
                    <img alt="laptop and phone icon" className="absolute -top-12 left-4" id="service-card-icon" src="/img/icons/smart-laptop.svg" />
                    <h1>Fully Responsive</h1>
                    <h3>Your website will look sharp and work flawlessly on any device—phones, tablets, or desktops. We make sure your customers get a smooth, professional experience no matter how they find you.</h3>
                    <Link onClick={() => window.scrollTo(0, 0)} id="service-card-links" to='/contact'>Get Started</Link>
                </div>

                <div id="service-cards" className="relative w-full sm:w-1/2 md:w-1/3 p-4">
                    <img alt="speed icon" className="absolute -top-12 left-4" id="service-card-icon" src="/img/icons/speed.svg" />
                    <h1>Optimized Page Speed</h1>
                    <h3>If your website takes more than 3 seconds to load, you could be losing up to 50% of your traffic. Our sites are optimized to load in 1 second or less—making sure your visitors stay and engage, not bounce away.</h3>
                    <Link onClick={() => window.scrollTo(0, 0)} id="service-card-links" to='/services'>Why This Matters</Link>
                </div>

                <div id="service-cards" className="relative w-full sm:w-1/2 md:w-1/3 p-4">
                    <img alt="united states icon" className="absolute -top-12 left-4" id="service-card-icon" src="/img/icons/us-based.svg" />
                    <h1>Based in U.S.</h1>
                    <h3>Proudly based in Texas, we build high-quality websites right here in the U.S. We never outsource to cheap overseas developers—everything is crafted in-house to ensure top-tier quality, performance, and reliability.</h3>
                    <Link onClick={() => window.scrollTo(0, 0)} id="service-card-links" to='/contact'>Get Started</Link>
                </div>
            </div>

            <div id="get-started-button-bigger" className="mt-12 inline-block">
                <Link onClick={() => window.scrollTo(0, 0)} to='/contact'>Call Us Today</Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center px-4 max-w-full overflow-hidden">
                {/* Image Section */}
                <div className="w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0">
                    <img alt="GhostStack owner working" className="rounded-xl w-full sm:w-3/4 lg:w-full mx-auto sm:mx-0" src="/img/web-work.webp" />
                </div>

                {/* Text and Info Cards Section */}
                <div className="w-full sm:w-1/2 lg:w-2/3">
                    <div>
                        <h4 id="bluetext" className="text-3xl">WHAT WE OFFER</h4>
                        <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl mb-8 pl-4 pr-4 sm:pl-16 sm:pr-16">
                            $0 DOWN – CUSTOM WEBSITE & ONGOING SUPPORT FOR $150/mo
                        </h1>
                        <p className="text-lg sm:text-xl ml-4 mr-4 pl-4 pr-4 sm:pl-16 sm:pr-16">
                            Get a professionally built, fully responsive 5-page website with no upfront costs. For $150/month, you'll receive design, development, hosting, and 3 hours of content updates each month — all backed by a 6-month agreement. Need more than 5 pages? No problem — we’ll provide custom pricing based on your project’s size and needs. You’ll also get reliable support and ongoing updates to keep your site sharp and running smoothly.
                        </p>
                    </div>

                    {/* Info Cards - Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 text-left">
                        <div id="info-cards" className="p-4 flex flex-col items-center">
                            <div className="w-16 h-16 mb-4">
                                <img className="w-full h-full object-contain" src="/img/icons/checkmark.svg" alt="Secure" />
                            </div>
                            <div>
                                <h3 className="text-xl underline font-semibold text-center">Secure</h3>
                                <p className="text-center">Our websites are built using static HTML and CSS, which means there's no dynamic content to target, making them incredibly secure and virtually immune to hacking.</p>
                            </div>
                        </div>

                        <div id="info-cards" className="p-4 flex flex-col items-center">
                            <div className="w-16 h-16 mb-4">
                                <img className="w-full h-full object-contain" src="/img/icons/checkmark.svg" alt="Custom Coded" />
                            </div>
                            <div>
                                <h3 className="text-xl underline font-semibold text-center">Custom Coded</h3>
                                <p className="text-center">Custom coding ensures better performance, flexibility, and security. By coding in-house, we create a tailored website that’s faster, scalable, and personalized to your needs.</p>
                            </div>
                        </div>

                        <div id="info-cards" className="p-4 flex flex-col items-center">
                            <div className="w-16 h-16 mb-4">
                                <img className="w-full h-full object-contain" src="/img/icons/checkmark.svg" alt="Unrivaled Support" />
                            </div>
                            <div>
                                <h3 className="text-xl underline font-semibold text-center">Unrivaled Support</h3>
                                <p className="text-center">When you reach out, you'll speak directly with me—the owner and developer. No offshore call centers, no automated systems, just personal, direct support every time.</p>
                            </div>
                        </div>

                        <div id="info-cards" className="p-4 flex flex-col items-center">
                            <div className="w-16 h-16 mb-4">
                                <img className="w-full h-full object-contain" src="/img/icons/checkmark.svg" alt="Money Back Guarantee" />
                            </div>
                            <div>
                                <h3 className="text-xl underline font-semibold text-center">Money Back Guarantee</h3>
                                <p className="text-center">We stand behind our work with a money-back guarantee. If we can't create a website you love, we'll refund your payment and cancel the contract—no questions asked.</p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Button */}
                    <div className="mt-8 mb-8 text-center sm:text-left">
                        <Link onClick={() => window.scrollTo(0, 0)} id="get-started-button" to='/contact' className="px-4 py-2 bg-blue-500 text-white rounded">
                            Call Us Today
                        </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-between items-center px-4">
                <div className="mt-12 text-left w-full sm:w-1/2 lg:w-2/3">
                    <h1 id="bluetext" className="text-3xl text-center sm:text-left">OUR PRICING</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-center sm:text-left">PRICING PACKAGES</h1>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl mb-8 text-center sm:text-left">FOR EVERY BUDGET</h1>
                </div>
                <div className="mt-8 w-full sm:w-1/2 lg:w-1/3 flex justify-center sm:justify-start">
                    <Link onClick={() => window.scrollTo(0, 0)} id="get-started-button-bigger" to='/contact' className="px-6 py-3 bg-blue-500 text-white rounded text-xl">Get Started</Link>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center px-4">
                {/* Lump Sum Card */}
                <div id="price-card" className="w-full sm:w-80 mt-8 sm:mx-4 border p-4 rounded-xl mb-8 sm:mb-0">
                    <h1 id="bluetext" className="text-3xl sm:text-4xl mb-4 font-semibold underline text-center">LUMP SUM</h1>
                    <div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>Design And Development</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>$25/mo Hosting</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>$75 fee Per Page after 5</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>$50/mo 5 Hours Content Edits</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>$250 To Add A Blog</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>24/7 Support</h5>
                            <img alt="white no icon" className="h-6 sm:h-7" src="/img/icons/nohelp.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>Lifetime Updates</h5>
                            <img alt="white no icon" className="h-6 sm:h-7" src="/img/icons/nohelp.svg" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="mb-4 flex justify-center items-end">
                            <h1 className="mr-2 text-4xl sm:text-5xl">$600</h1>
                            <h3 className="text-sm sm:text-lg">+$25/mo Hosting</h3>
                        </div>
                        <Link onClick={() => window.scrollTo(0, 0)} id="get-started-button-glow" to='/contact' className="block text-center mt-4">Get Started</Link>
                    </div>
                </div>

                {/* Monthly Card */}
                <div id="price-card" className="w-full sm:w-80 mt-8 sm:mx-4 border p-4 rounded-xl">
                    <h1 id="bluetext" className="text-3xl sm:text-4xl mb-4 font-semibold underline text-center">MONTHLY</h1>
                    <div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>Design And Development</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>$Includes Hosting</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>$75 fee Per Page after 5</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>Unlimited Edits</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>$250 To Add A Blog</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>24/7 Support</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                        <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                            <h5>Lifetime Updates</h5>
                            <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="mb-4 flex justify-center items-end">
                            <h1 className="mr-2 text-4xl sm:text-5xl">$150</h1>
                            <h3 className="text-sm sm:text-lg">Per Month</h3>
                        </div>
                        <Link onClick={() => window.scrollTo(0, 0)} id="get-started-button-glow" to='/contact' className="block text-center mt-4">Get Started</Link>
                    </div>
                </div>
            </div>

            <Website />

        </div>
        <Footer/>
        </>
        
    );
};

export default LandingPage