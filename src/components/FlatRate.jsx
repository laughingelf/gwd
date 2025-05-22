import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FlatRateServices() {
  return (
    <section className="w-full px-4 py-12 ">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* Header Section */}
        <div className="space-y-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Practical Services for Small Business Success
          </h1>
          <p className="text-lg text-left md:text-lg leading-relaxed max-w-3xl mx-auto">
            At GhostStack Designs, our flat-rate services are designed to help you build your online presence fast and effectively. Whether you need to show up on Google, launch a simple portfolio, or get your social accounts set up right, we’ve got your back.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-10 mx-4 md:mx-24">

          <div>
            <Link to="/contact" className="text-2xl md:text-3xl font-bold justify-center flex items-center gap-2 underline hover:scale-105" style={{ color: 'rgb(13, 182, 204)' }}>
              Google Business Profile Creation <ArrowRight size={22} />
            </Link>
            <p className="text-lg text-left max-w-2xl mt-2">
              Get found on Google and Maps with a fully set up and optimized Google Business Profile. We ensure your listing is accurate, complete, and built to get local traffic.
            </p>
          </div>

          <div>
            <Link to="/contact" className="text-2xl md:text-3xl font-bold flex justify-center items-center gap-2 hover:scale-105 underline" style={{ color: 'rgb(13, 182, 204)' }}>
              Single Page Portfolio Website <ArrowRight size={22} />
            </Link>
            <p className="text-lg text-left max-w-3xl mt-2">
              Show off your work with a fast, mobile-friendly single-page portfolio that’s easy to maintain and built for performance. Perfect for freelancers, creators, and skilled trades.
            </p>
          </div>

          <div>
            <Link to="/contact" className="text-2xl md:text-3xl font-bold flex justify-center items-center gap-2 hover:scale-105 underline" style={{ color: 'rgb(13, 182, 204)' }}>
              Single Page Business Website <ArrowRight size={22} />
            </Link>
            <p className="text-lg text-left max-w-3xl mt-2">
              Get a clean, conversion-focused one-pager that covers your services, contact info, and local SEO all in one scroll. A simple, strong digital home for your business.
            </p>
          </div>

          <div>
            <Link to="/contact" className="text-2xl md:text-3xl font-bold flex justify-center items-center gap-2 hover:scale-105 underline" style={{ color: 'rgb(13, 182, 204)' }}>
              Basic SEO Setup <ArrowRight size={22} />
            </Link>
            <p className="text-lg text-left max-w-3xl mt-2">
              We set up the essentials: meta tags, alt attributes, structured data, page speed checks, and more—so your site has a strong foundation for organic search growth.
            </p>
          </div>

          <div>
            <Link to="/contact" className="text-2xl md:text-3xl font-bold flex justify-center items-center gap-2 hover:scale-105 underline" style={{ color: 'rgb(13, 182, 204)' }}>
              Social Media Account Setup <ArrowRight size={22} />
            </Link>
            <p className="text-lg text-left max-w-3xl mt-2">
              Professionally set up your business social media profiles (Facebook, Instagram, or LinkedIn) with optimized bios, branding, and contact links.
            </p>
          </div>

          <div>
            <Link to="/contact" className="text-2xl md:text-3xl font-bold flex justify-center items-center gap-2 hover:scale-105 underline" style={{ color: 'rgb(13, 182, 204)' }}>
              Domain Setup <ArrowRight size={22} />
            </Link>
            <p className="text-lg text-left max-w-3xl mt-2">
              We’ll help you purchase, configure, and connect your domain to your website and email. Includes DNS setup, SSL, and email routing to get you live smoothly.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
