import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";


const Pricing = () => {

    return (
        <>
        <Navbar/>
        <div>
            <div id="about-us-head" className="relative min-h-[20vh] mx-4 flex items-center rounded-lg justify-center mb-24 text-6xl">
                        <video
                            id="background-video"
                            loop
                            autoPlay
                            muted
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        >
                            <source alt="Wed Design Header" src="/img/about-us-bg.mp4" type="video/mp4" />
                        </video>
                    <h1 className="relative z-10 text-white">Pricing</h1>
            </div>
            <section className="max-w-5xl mx-auto px-6 py-16 text-white text-center md:text-left">
                <h2 className="text-4xl text-[#0DB6CC] md:text-5xl font-bold mb-8 text-center underline">Flexible Website Pricing Options</h2>
                
                <p className="text-xl mb-6">
                    At <span className="text-[#0DB6CC] text-2xl">GhostStack Designs</span>, we know that no two businesses are the same — and your website should reflect that. 
                    That's why we offer flexible pricing models tailored to fit your goals, your timeline, and your budget. 
                    Whether you're looking for a simple launch or full-service support, we have a solution that works for you.
                </p>

                <p className="text-xl mb-6">
                    Our lump sum package is perfect for businesses that prefer a one-time investment, covering development, deployment, and reliable hosting. 
                    Monthly updates are available at a flat, affordable rate to keep your site current and running smoothly.
                </p>

                <p className="text-xl mb-6">
                    If you prefer a predictable monthly plan, our subscription option bundles everything you need — from development to hosting to ongoing updates — 
                    into one simple package, designed to give you peace of mind without surprise costs.
                </p>

                <p className="text-xl">
                    Need something outside the box? <span className="text-[#0DB6CC]">GhostStack Designs</span> proudly offers custom plans to meet your unique needs. 
                    Whether you require more pages, e-commerce functionality, or specialized integrations, we’ll work with you to build a tailored solution that fits your vision and budget.
                </p>
            </section>

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
                                <h5>$50/Month Flat Rate Content Edits</h5>
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
                                <h1 className="mr-2 text-4xl sm:text-5xl">$900</h1>
                                <h3 className="text-sm sm:text-lg">+$25/mo Hosting-taxes included</h3>
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
                                <h1 className="mr-2 text-4xl sm:text-5xl">$175</h1>
                                <h3 className="text-sm sm:text-lg">Per Month-taxes included</h3>
                            </div>
                            <Link onClick={() => window.scrollTo(0, 0)} id="get-started-button-glow" to='/contact' className="block text-center mt-4">Get Started</Link>
                        </div>
                    </div>
                    {/* Ecommerce */}
                    <div id="price-card" className="w-full sm:w-80 mt-8 sm:mx-4 border p-4 rounded-xl mb-8 sm:mb-0">
                        <h1 id="bluetext" className="text-3xl sm:text-4xl mb-4 font-semibold underline text-center">E-Commerce</h1>
                        <div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Custom E-commerce Store Design</h5>
                                <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                            </div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Customizable E-commerce Solutions</h5>
                                <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                            </div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>$25/mo Hosting</h5>
                                <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                            </div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Easy Product Management</h5>
                                <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" />
                            </div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Secure Payment Integration</h5>
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
                                <h1 className="mr-2 text-4xl sm:text-5xl">$2500</h1>
                                <h3 className="text-sm sm:text-lg"><span className="underline">starting</span>-taxes included</h3>
                            </div>
                            <Link onClick={() => window.scrollTo(0, 0)} id="get-started-button-glow" to='/contact' className="block text-center mt-4">Get Started</Link>
                        </div>
                    </div>
                    {/* flat Rate  */}
                    <div id="price-card" className="w-full sm:w-80 mt-8 sm:mx-4 border p-4 rounded-xl mb-8 sm:mb-0">
                        <h1 id="bluetext" className="text-3xl sm:text-4xl mb-4 font-semibold underline text-center">Flat Rate Services</h1>
                        <div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Google My Business Creation</h5>
                                {/* <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" /> */}
                                <p className="text-xl">$50</p>
                            </div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Single Page Portfolio-$10/mo Hosting</h5>
                                {/* <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" /> */}
                                <p className="text-xl">$150</p>
                            </div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Single Page Website-$10/mo Hosting</h5>
                                {/* <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" /> */}
                                <p className="text-xl">$150</p>
                            </div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Basic SEO Setup</h5>
                                {/* <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" /> */}
                                <p className="text-xl">$50</p>
                            </div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Social Media Account Setup</h5>
                                {/* <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" /> */}
                                <p className="text-xl">$50</p>
                            </div>
                            <div id="pricing-card" className="flex items-center justify-between mb-2 text-sm sm:text-lg">
                                <h5>Domain Setup</h5>
                                {/* <img alt="white check mark" className="h-6 sm:h-7" src="/img/icons/checkmark-white.svg" /> */}
                                <p className="text-xl">$50</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            {/* <div className="mb-4 flex justify-center items-end">
                                <h1 className="mr-2 text-4xl sm:text-5xl">$50</h1>
                                <h3 className="text-sm sm:text-lg">each-taxes included</h3>
                            </div> */}
                            <Link onClick={() => window.scrollTo(0, 0)} id="get-started-button-glow" to='/contact' className="block text-center mt-4">Get Started</Link>
                        </div>
                    </div>
                </div>
        </div>
        <Footer/>
        </>
    )
}

export default Pricing;