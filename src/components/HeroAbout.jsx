import { Link } from "react-router-dom";

export default function HeroAbout() {
    return (
      <section className="relative bg-black min-h-[40vh] md:min-h-[60vh] w-full overflow-hidden flex items-center justify-center ">
        {/* Background image */}
        <picture>
          {/* WebP for large screens */}
          <source
            srcSet="/img/heroImg.webp"
            type="image/webp"
            media="(min-width: 768px)"
          />
          {/* WebP for small screens */}
          <source
            srcSet="/img/heroImg.webp"
            type="image/webp"
            media="(max-width: 767px)"
          />
          {/* JPG fallback for large screens */}
          <source
            srcSet="/img/heroImg.png"
            type="image/png"
            media="(min-width: 768px)"
          />
          {/* JPG fallback for small screens */}
          <source
            srcSet="/img/heroImg.png"
            type="image/jpeg"
            media="(max-width: 767px)"
          />
  
          {/* Fallback <img> */}
          <img
            src="/img/heroImg.png"
            alt="GhostStack Designs background"
            className="absolute inset-0 opacity-60 w-full h-full object-cover z-0"
            loading="eager"
          />
        </picture>
  
  
        {/* CTA at bottom */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full flex flex-col items-center z-10 px-6">
            {/* Info box */}
          <div className=" text-center px-6 py-4 max-w-2xl">
            <h1 className="text-5xl md:text-6xl">
                The Story Behind GhostStack</h1>
            <p className="text-xl">
              Need help getting your business online?{" "}
              <Link
                to="/contact"
                className="underline text-green-600 font-semibold"
              >
                Let’s talk.
              </Link>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 text-center mt-6">
            <Link
              to="/contact"
              id="get-started-button-bigger"
              className="px-8 w-48 py-3 text-lg bg-orange-600 hover:bg-green-500 transition font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105 text-white"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              id="get-started-button-bigger"
              className="px-8 w-48 py-3 text-lg bg-orange-600 text-white hover:text-white hover:bg-green-500 transition font-semibold rounded-full shadow-md shadow-gray-500 hover:shadow-lg hover:scale-105"
            >
              See Pricing
            </Link>
          </div>
  
          
        </div>
      </section>
    );
  }
  