import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import HeroContact from "../components/HeroContact";
// import ReactDOM from 'react-dom';


const Contact = () => {

    return (

        <>
           <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
            <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
            <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
        <Navbar/>
            <div className="">
                <div>
                    {/* <div id="about-us-head" className="relative min-h-[20vh] flex items-center rounded-lg justify-center mb-24 text-6xl">
                        <video
                            id="background-video"
                            loop
                            autoPlay
                            muted
                            playsInline
                            className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        >
                            <source alt="Contact Header" src="/img/about-us-bg.mp4" type="video/mp4" />
                        </video>
                        <h1 className="relative z-10 text-white">Contact Us</h1>
                    </div> */}
                    <HeroContact/>
                </div>
                <div id="contact-page">
                    <div id="contact-info">
                        <div className="w-full text-left lg:w-1/2 space-y-6">
                                {/* <h3 id="bluetext" className="text-xl font-semibold">Contact Us</h3> */}
                                <h1 className="text-6xl md:text-5xl font-bold text-[#0DB6CC]">
                                Get In Touch
                                </h1>
                                <p className="text-lg leading-relaxed">
                                Shoot us an email and tell us what you’re looking for in a new website—we’ll 
                                get back to you within 24 hours, guaranteed. Want to talk it out right away? 
                                Give us a call. If we miss you, we’ll return it the same day or the next.
                                </p>
                        </div>
                        <div>
                            <div className="flex items-center mt-4">
                                <img className="mr-4 w-10 h-10" src="/img/icons/phone.svg" alt="Phone" />
                                <a href="tel:9723380991" className="lg:text-3xl sm:text-xl">972-338-0991</a>
                            </div>
                            <div className="flex items-center mt-4">
                                <img className=" mr-4 w-10 h-10" src="/img/icons/email.svg" alt="Email" />
                                <a href="mailto:ghoststackdesigns@gmail.com" className="lg:text-3xl sm:text-xl">ghoststackdesigns@gmail.com</a>
                            </div>  
                        </div>

                    </div>
                    <div>
                        <ContactForm />
                                
                    </div>
                </div>

            </div>
            <Footer/>
        
        </>
    );
};

export default Contact