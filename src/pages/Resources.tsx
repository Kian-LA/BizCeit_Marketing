import React from 'react';
import { Link } from 'react-router-dom';
import { Download, BookOpen, Video, FileText, ChevronRight, ExternalLink } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      id: 1,
      title: "The Complete Guide to Modern Web Design",
      description: "A comprehensive 50-page guide covering the latest trends, best practices, and techniques in web design.",
      type: "PDF Guide",
      icon: FileText,
      downloadSize: "2.5 MB",
      category: "Design"
    },
    {
      id: 2,
      title: "Brand Identity Checklist",
      description: "Essential checklist for creating a cohesive brand identity that resonates with your target audience.",
      type: "Checklist",
      icon: BookOpen,
      downloadSize: "1.2 MB",
      category: "Branding"
    },
    {
      id: 3,
      title: "No-Code Development Masterclass",
      description: "Video series teaching you how to build powerful applications without writing a single line of code.",
      type: "Video Course",
      icon: Video,
      downloadSize: "Watch Online",
      category: "Development"
    },
    {
      id: 4,
      title: "UX Research Templates",
      description: "Ready-to-use templates for user interviews, surveys, and usability testing sessions.",
      type: "Template Pack",
      icon: FileText,
      downloadSize: "3.1 MB",
      category: "UX Research"
    },
    {
      id: 5,
      title: "Website Performance Optimization Guide",
      description: "Step-by-step guide to improving your website's speed, SEO, and user experience.",
      type: "PDF Guide",
      icon: FileText,
      downloadSize: "1.8 MB",
      category: "Development"
    },
    {
      id: 6,
      title: "Color Psychology in Design",
      description: "Understanding how colors affect user behavior and decision-making in digital interfaces.",
      type: "Infographic",
      icon: BookOpen,
      downloadSize: "800 KB",
      category: "Design"
    }
  ];

  const categories = ["All", "Design", "Branding", "Development", "UX Research"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredResources = selectedCategory === "All" 
    ? resources 
    : resources.filter(resource => resource.category === selectedCategory);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free <span className="text-lime-400">Resources</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Download our collection of guides, templates, and tools to help you create better digital experiences and grow your business.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-lime-400 text-slate-900'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => {
              const IconComponent = resource.icon;
              return (
                <div key={resource.id} className="bg-slate-50 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-lime-600" />
                    </div>
                    <span className="text-sm text-slate-500 bg-white px-3 py-1 rounded-full">
                      {resource.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {resource.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm text-slate-500">{resource.type}</span>
                    <span className="text-sm text-slate-500">{resource.downloadSize}</span>
                  </div>
                  
                  <button className="w-full bg-lime-400 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-lime-300 transition-colors inline-flex items-center justify-center">
                    <Download className="w-4 h-4 mr-2" />
                    Download Free
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Get More Resources
            </h2>
            <p className="text-slate-600 mb-8">
              Subscribe to our newsletter and get exclusive access to new resources, industry insights, and design tips delivered to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none"
              />
              <button
                type="submit"
                className="bg-lime-400 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-lime-300 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-slate-500 text-sm mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Recommended Tools
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Professional tools and platforms we use and recommend for design, development, and business growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 p-6 rounded-2xl text-center">
              <h3 className="font-bold text-slate-900 mb-2">Figma</h3>
              <p className="text-slate-600 text-sm mb-4">Design & Prototyping</p>
              <a 
                href="#" 
                className="text-lime-600 hover:text-lime-700 font-medium inline-flex items-center text-sm"
              >
                Learn More
                <ExternalLink className="ml-1" size={14} />
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl text-center">
              <h3 className="font-bold text-slate-900 mb-2">Webflow</h3>
              <p className="text-slate-600 text-sm mb-4">No-Code Development</p>
              <a 
                href="#" 
                className="text-lime-600 hover:text-lime-700 font-medium inline-flex items-center text-sm"
              >
                Learn More
                <ExternalLink className="ml-1" size={14} />
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl text-center">
              <h3 className="font-bold text-slate-900 mb-2">Notion</h3>
              <p className="text-slate-600 text-sm mb-4">Project Management</p>
              <a 
                href="#" 
                className="text-lime-600 hover:text-lime-700 font-medium inline-flex items-center text-sm"
              >
                Learn More
                <ExternalLink className="ml-1" size={14} />
              </a>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl text-center">
              <h3 className="font-bold text-slate-900 mb-2">Hotjar</h3>
              <p className="text-slate-600 text-sm mb-4">User Analytics</p>
              <a 
                href="#" 
                className="text-lime-600 hover:text-lime-700 font-medium inline-flex items-center text-sm"
              >
                Learn More
                <ExternalLink className="ml-1" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need Custom Solutions?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              While our free resources are great, sometimes you need a custom solution. Let's discuss your specific needs.
            </p>
            <Link 
              to="/contact"
              className="bg-lime-400 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-lime-300 transition-colors inline-flex items-center"
            >
              Get Custom Help
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;