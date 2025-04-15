import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Contact = () => {

    return (

        <>
        <Navbar/>
            <div className="mx-4">
                <div>
                    <div id="about-us-head" className="relative min-h-[20vh] flex items-center rounded-lg justify-center mb-24 text-6xl">
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
                    </div>
                </div>
                <div id="contact-page">
                    <div id="contact-info">
                        <div className="w-full text-left lg:w-1/2 space-y-6">
                                <h3 id="bluetext" className="text-xl font-semibold">Contact Us</h3>
                                <h1 className="text-6xl md:text-5xl font-bold">
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
                        <form method="POST" data-netlify="true" id="contact-form" name="contact">
                        <input type="hidden" name="form-name" value="contact" />
                            <div class='form-group'>
                                <label for='name'>Name: </label>
                                <input onChange={(e) => setName(e.target.value)} type='text' id='name' name='name' reqired/><br/><br/>
                            </div>
                            <div class='form-group'>
                                <label for='email'>Email:</label><br/>
                                <input onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' required/><br/><br/>
                            </div>
                            <div class='form-group'>
                                <label for='phone'>Phone:</label><br/>
                                <input onChange={(e) => setPhone(e.target.value)} type='tel' id='phone' name='phone' required/><br/><br/>
                            </div>
                            <div class='form-group'>
                                <label for='message'>Message:</label><br/>
                                <textarea onChange={(e) => setMessage(e.target.value)} id='message' name='message' rows='5' required/><br/>
                            </div>


                            <button class='form-button' type="submit" >Submit</button>
                        </form>
                    </div>
                </div>

            </div>
            <Footer/>
        
        </>
    );
};

export default Contact