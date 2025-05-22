import { Link } from "react-router-dom";

const Website = () => {
    return (

        <div id="lighting-border" className="mt-16 sm:mt-32 relative overflow-hidden rounded-xl">
                    <video
                        id="background-video"
                        loop
                        autoPlay
                        muted
                        playsInline
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    >
                        <source src="/img/get-website-bg2.mp4" type="video/mp4" />
                    </video>
                    <div className="flex flex-col sm:flex-row items-center justify-between border p-8 sm:p-16 rounded-xl relative z-10">
                        <div className="text-left sm:max-w-md">
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
                                Isn’t It Time You Had the
                            </h1>
                            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold leading-tight">
                                Website You Deserve?
                            </h1>
                        </div>
                        <div className="mt-4 sm:mt-0">
                            <Link
                                
                                id="get-started-button-bigger"
                                to="/contact"
                                className="text-lg sm:text-xl bg-blue-500 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-600"
                            >
                                Get Started Today
                            </Link>
                        </div>
                    </div>
                </div>
        
    )
}

export default Website