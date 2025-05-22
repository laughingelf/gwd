
const projects = [
  {
    title: "Lone Star Property Maintenance",
    image: "/img/lspm-laptop.png", // Replace with actual image paths
    description: "Lone Star Property Maintenance delivers reliable, high-quality exterior services for homes and businesses across Texas. Specializing in pressure washing, soft washing, fencing, property clean-up, concrete sealing, and more — their all-in-one solutions are designed to keep properties clean, safe, and looking their best. This professional single-page website showcases their services, builds trust, and makes it easy for customers to get in touch fast.",
    link: "https://lonestarpropertymaintenance.com/",
  },
  {
    title: "Reclaim Wellness Support",
    image: "/img/reclaim-laptop.png",
    description: "Reclaim Wellness Support is a veteran-owned massage therapy practice dedicated to serving fellow veterans and low-income families with accessible, healing care. This custom 5-page website was built to highlight the mission of making wellness attainable for all. Featuring a calming, user-friendly layout, service details, and a contact form for easy appointment requests — it's designed to connect and support the community with purpose and heart.",
    link: "https://reclaimwellnesssupport.org/",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="bg-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Featured Projects
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10">
          A look at a couple of recent websites I built for clients. Simple, clean, and tailored to their business goals.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-2xl overflow-hidden shadow-md transition hover:shadow-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-fit mt-2"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-medium text-white bg-black px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  Visit Site
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
