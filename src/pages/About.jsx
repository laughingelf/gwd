import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Website from "../components/Website";
import { Link } from "react-router-dom";

const About = () => {

    return(
        <>
        <Navbar/>
            <div className="mx-4">

                <div id="about-us-head" className="relative min-h-[20vh] flex items-center rounded-lg justify-center mb-24 text-6xl">
                    <video
                        id="background-video"
                        loop
                        autoPlay
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover z-0"
                    >
                        <source alt="about us heading" src="/img/about-us-bg.mp4" type="video/mp4" />
                    </video>
                    <h1 className="relative z-10 text-white">About Us</h1>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto px-4 py-12 gap-10">
                    <div className="w-full lg:w-1/2 relative">
                        <img
                        src="/img/web-work.webp"
                        alt="GhostStack owner working"
                        className="w-full h-auto rounded-xl shadow-md"
                        />
                        <div className="absolute bottom-4 right-2 text-white p-4 rounded-md">
                            <p className="text-2xl">Justin Gery</p>
                            <p className="text-2xl">Owner/Developer</p>
                        </div>
                    </div>

                    <div className="w-full text-left lg:w-1/2 space-y-6">
                        <h3 id="bluetext" className="text-3xl font-semibold">GhostStack Designs</h3>
                        <h1 className="text-6xl md:text-5xl font-bold">
                        We Build for the Underdogs of the Online Age
                        </h1>
                        <p className="text-lg leading-relaxed">
                        I've been working in the tech industry since 2014, starting at the ground level in a help desk role and gradually progressing to a 
                        software developer position. I got into coding by writing backend scripts to make my job easier, and it quickly became something I loved.
                        Working remotely was a huge bonus—my daughter had just turned one, and being home meant I didn’t miss a second of her growing up.
                        But in 2022, I was laid off and had to pivot careers to keep food on the table. That season pulled me away from what mattered most,
                        and after applying to over 400 tech jobs and only getting two callbacks, I decided to stop waiting for a door to open—and build one
                        myself. That’s when GhostStack Designs was born.
                        </p>
                        <p className="text-lg leading-relaxed">
                        My drive to support small businesses runs deep. I grew up just outside a small country town on a ranch, where we depended on mom-and-pop
                        shops for everything from feed to groceries. In recent years, I’ve watched those types of businesses fade out, unable to keep up with the
                        fast-moving online world. I knew I wanted to help, but until recently, I didn’t have the right approach. After seeing how another freelance
                        developer was lifting up small businesses with affordable, purpose-built websites, it all clicked. So I went all in. <span className="text-[#0DB6CC]">GhostStack</span> is more than
                        a web design company—it’s a way to give the little guy a fighting chance in a world built for big players. Let’s build something that works
                        just as hard as you do.
                        </p>
                        <Link onClick={() => window.scrollTo(0, 0)} id="get-started-button-bigger" to='/contact'>Call Us Today</Link>
                    </div>
                </div>

                <div className="flex flex-col  items-center justify-center px-4 sm:px-8 lg:px-16 py-8 w-fit">
                    <div className="text-left mb-8 md:mb-8 md:w-full text-center flex flex-col justify-center md:items-center">
                        <h3 id="bluetext" className="text-2xl font-semibold">The Working Process</h3>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            From Start to Finish, We’ve Got You
                        </h1>
                    </div>
                    <div className="md:w-2/3 text-left">
                        <p className="text-lg sm:text-xl md:text-lg lg:text-xl">
                            Once the contract is signed, we'll either meet in person (if you're local) or send you a short questionnaire to understand your business and what you offer. 
                            Using this information, we’ll create content for your site and design an initial theme. After we get your approval on the design, we’ll move forward with building the site. 
                            Depending on the complexity of the site, the entire process typically takes around 2 to 3 weeks from start to finish.
                        </p>
                    </div>
                </div>

                
                <Website />


            </div>
            <Footer/>
        </>
    );
};

export default About