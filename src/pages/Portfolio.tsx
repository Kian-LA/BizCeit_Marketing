import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ChevronRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "FinTech Startup - Growth Study",
      category: "Strategy & Development",
      description: "Complete digital transformation for a fintech startup, including brand identity, web platform, and user acquisition strategy.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Branding", "Web Development", "Strategy"],
      results: ["300% increase in user signups", "50% reduction in bounce rate", "Award-winning design"]
    },
    {
      id: 2,
      title: "Creativity - Social Engagement",
      category: "Brand Design & Marketing",
      description: "Brand redesign and social media strategy for a creative agency, focusing on community building and engagement.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Brand Design", "Social Media", "Content Strategy"],
      results: ["500% growth in social following", "85% increase in engagement", "Featured in design publications"]
    },
    {
      id: 3,
      title: "Startup - Workflow Tracking",
      category: "Product Design",
      description: "UX/UI design for a productivity app that helps teams track workflows and improve collaboration.",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["UI/UX Design", "Mobile App", "User Research"],
      results: ["40% improvement in user retention", "4.8/5 app store rating", "10,000+ active users"]
    },
    {
      id: 4,
      title: "Quentin - No-Code SaaS and B2B SAAS",
      category: "Development & Strategy",
      description: "End-to-end development of a B2B SaaS platform using no-code tools, including user onboarding and payment integration.",
      image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["No-Code", "SaaS", "B2B"],
      results: ["$100K ARR in first year", "95% customer satisfaction", "30% month-over-month growth"]
    },
    {
      id: 5,
      title: "E-commerce Fashion Brand",
      category: "Web Development & Design",
      description: "Complete e-commerce solution for a sustainable fashion brand, including custom shopping experience and inventory management.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["E-commerce", "Fashion", "Sustainability"],
      results: ["200% increase in online sales", "60% improvement in conversion rate", "Carbon-neutral shipping integration"]
    },
    {
      id: 6,
      title: "Healthcare Platform",
      category: "UI/UX Design & Development",
      description: "Patient portal and telemedicine platform designed for accessibility and ease of use across all age groups.",
      image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      tags: ["Healthcare", "Accessibility", "Telemedicine"],
      results: ["HIPAA compliant design", "99.9% uptime achieved", "50,000+ patients served"]
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-lime-400">Portfolio</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Explore our latest projects and see how we've helped businesses transform their digital presence and achieve remarkable results.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-lime-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-lime-600 font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-lime-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-slate-900">Key Results:</h4>
                    <ul className="space-y-1">
                      {project.results.map((result, index) => (
                        <li key={index} className="text-slate-600 flex items-center">
                          <div className="w-1.5 h-1.5 bg-lime-400 rounded-full mr-3"></div>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button className="text-lime-600 hover:text-lime-700 font-medium inline-flex items-center">
                    View Case Study
                    <ExternalLink className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Portfolio Impact</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Real results from real projects that have transformed businesses and exceeded expectations.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">72+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">100+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">250%</div>
              <div className="text-slate-600">Average ROI Increase</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">15+</div>
              <div className="text-slate-600">Industry Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Create Something Amazing?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a digital experience that drives real results for your business.
            </p>
            <Link 
              to="/contact"
              className="bg-lime-400 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-lime-300 transition-colors inline-flex items-center"
            >
              Start Your Project
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;