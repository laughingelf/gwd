import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Website from "../components/Website";
import HeroServices from "../components/HeroServices";
import FlatRateServices from "../components/FlatRate";

const Services = () => {

    return(

        <>
        <Navbar/>
            <div className="">
                {/* <div id="about-us-head" className="relative min-h-[20vh] flex items-center rounded-lg justify-center mb-24 text-6xl">
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
                        <h1 className="relative z-10 text-white">Web Design</h1>
                </div> */}
                <HeroServices/>

                <div className="flex flex-col lg:flex-row">
                    {/* <div className="w-full lg:w-1/2">
                            <img
                            src="/img/web-work.jpg"
                            alt="GhostStack owner working"
                            className="w-full h-auto rounded-xl shadow-md"
                            />
                    </div> */}
                    <div className="w-full px-4 py-12">
                        <div className="max-w-4xl mx-auto space-y-12">
                            
                            {/* Top Section */}
                            <div className="space-y-6 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                                Expert Website Design & Development
                            </h1>
                            <h2 id="bluetext" className="text-2xl md:text-2xl font-semibold underline">
                                Built from Scratch – No Templates, No WordPress
                            </h2>
                            <p className="text-xl text-left leading-relaxed max-w-3xl mx-auto">
                                At GhostStack Designs, we don’t cut corners with page builders or WordPress. 
                                Every site is built from scratch with clean, custom code—no fluff, no bloat. That 
                                means lightning-fast load times, airtight security, and a design that’s 100% yours. 
                                No constant plugin updates. No cookie-cutter templates. Just a solid site that 
                                works hard for your business, day in and day out.
                            </p>
                            </div>

                            {/* Bottom Section */}
                            <div className="space-y-4 text-center">
                                <h3 className="text-2xl md:text-3xl font-bold underline text-[#0DB6CC]">WHY DOES IT MATTER</h3>
                                <ul className="list-disc list-inside space-y-2 text-xl max-w-md mx-auto text-left">
                                    <li>Loads Super Fast</li>
                                    <li>Helps Turn Visitors Into Customers</li>
                                    <li>Locked-down Security</li>
                                    <li>Better Google Rankings</li>
                                    <li>Gets You Seen More On Google Maps</li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 underline text-[#0DB6CC]">
                                    A FASTER WEBSITE KEEPS USERS ENGAGED AND DRIVES MORE CONVERSIONS
                                </h3>
                                <p className="text-xl text-left leading-relaxed max-w-3xl mx-auto">
                                The internet’s crowded—and let’s be real, you need every edge you can get. While most 
                                folks are stuck with clunky page builders that drag their site speed down, you’ve got a 
                                chance to stand out with a custom-coded site that loads almost instantly. That matters—big 
                                time. If your site takes more than 3 seconds to load, <span id="noticed" className="text-xl">half</span> your visitors are already gone. 
                                People just aren’t waiting around. Our builds are lean, lightning-fast, and built to keep 
                                people on your page—so you get more eyes, more clicks, and more leads than your old site ever could.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 underline text-[#0DB6CC]">
                                    CUSTOM-CODED SITES OFFER BETTER SECURITY
                                </h3>
                                <p className="text-xl text-left leading-relaxed max-w-3xl mx-auto mb-4">
                                WordPress and other page builders come with a lot of potential security risks, especially if you’re not 
                                regularly updating your plugins and versions. Hackers tend to target these platforms because they’re 
                                well-known and often have vulnerabilities, making them easier to compromise.
                                </p>

                                <p className="text-xl text-left leading-relaxed max-w-3xl mx-auto">
                                With our custom-coded websites, there’s nothing for hackers to exploit. We build using clean, static 
                                HTML and CSS, which means there are no databases or server-side requests that can be intercepted. This 
                                makes our sites far more secure and requires less maintenance. You don’t have to worry about constant 
                                updates or security patches, because our sites are designed to stay secure with minimal effort.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 underline text-[#0DB6CC]">
                                    BOOST YOUR SEARCH VISIBILITY
                                </h3>
                                <p className="text-xl text-left leading-relaxed max-w-3xl mx-auto mb-4">
                                Better load times can seriously boost your Google ranking. The main way this happens is by simply 
                                loading faster. If two websites have similar content and authority, Google will favor the one with 
                                better page speed and Core Web Vitals.
                                </p>

                                <p className="text-xl text-left leading-relaxed max-w-3xl mx-auto">
                                But there's another key factor to consider. A faster site attracts more visitors, and more visitors 
                                means higher chances of ranking better. When we optimize your site with Google's Core Web Vitals in 
                                mind, we’re not just speeding things up—we’re improving the overall experience. This keeps users on 
                                the site longer, encourages them to explore more pages, and leads to better engagement. With more traffic, 
                                longer visits, and improved interactions, Google will see that your site is providing valuable content 
                                that answers search queries effectively. That’s how we help elevate your ranking and get your site noticed.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl md:text-3xl mb-4 font-bold underline text-[#0DB6CC]">
                                    BOOST YOUR GOOGLE BUSINESS PROFILE VISIBILITY
                                </h3>
                                <p className="text-xl text-left leading-relaxed max-w-3xl mx-auto mb-4">
                                A faster website not only improves user experience but also helps give your Google Business Profile 
                                a serious boost, making it more visible in Maps searches. Combine that with glowing 5-star reviews, 
                                plenty of high-quality images, and a fully optimized profile, and you’ll see more leads coming in. The 
                                more we can optimize your profile, the more traffic it drives to your site, which means more opportunities 
                                to turn those visitors into real leads.
                                </p>
                            </div>
                            <div className="flex flex-row justify-center gap-6">
                                <div>
                                    <Link
                                    
                                    to="/contact"
                                    className="w-40 text-center text-2xl bg-[#0DB6CC] text-white px-8 py-2 rounded-2xl hover:bg-white hover:text-black hover:shadow-md shadow-black transition"
                                    >
                                    Get Started
                                    </Link>
                                </div>
                                <div>
                                    <Link
                                    
                                    to="/pricing"
                                    className="min-w-40 text-center text-2xl bg-[#0DB6CC] text-white px-12 py-2 rounded-2xl hover:bg-white hover:text-black hover:shadow-md shadow-black transition"
                                    >
                                    Pricing
                                    </Link>
                                </div>
                            </div>
                            <FlatRateServices/>


                        </div>
                    </div>
                </div>
                
                <Website />

            </div>
        <Footer/>
        </>
    );
};

export default Services