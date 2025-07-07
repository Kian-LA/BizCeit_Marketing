import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Code, Smartphone, Zap, ChevronRight, Check } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our <span className="text-lime-400">Services</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your brand and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* UI/UX Design */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-6">
                <Palette className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">UI/UX Design</h3>
              <p className="text-slate-600 mb-6 text-lg">
                We craft intuitive and engaging user experiences that convert visitors into customers through strategic design thinking and user-centered approaches.
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  User research and persona development
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Wireframing and interactive prototyping
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Design system creation and maintenance
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Usability testing and optimization
                </li>
              </ul>
              <div className="text-slate-900 font-semibold">Starting at $5,000</div>
            </div>

            {/* Brand Design */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Brand Design</h3>
              <p className="text-slate-600 mb-6 text-lg">
                Build a memorable brand identity that resonates with your target audience and stands out in the competitive marketplace.
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Logo design and brand identity
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Brand guidelines and style guides
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Marketing collateral design
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Brand strategy and positioning
                </li>
              </ul>
              <div className="text-slate-900 font-semibold">Starting at $3,000</div>
            </div>

            {/* Web Development */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Web Development</h3>
              <p className="text-slate-600 mb-6 text-lg">
                Create responsive, fast-loading websites that perform excellently across all devices and search engines using modern technologies.
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Custom website development
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  E-commerce solutions
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  SEO optimization and performance
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Content management systems
                </li>
              </ul>
              <div className="text-slate-900 font-semibold">Starting at $8,000</div>
            </div>

            {/* No-Code Development */}
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mb-6">
                <Smartphone className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No-Code Development</h3>
              <p className="text-slate-600 mb-6 text-lg">
                Leverage powerful no-code tools to build scalable applications and websites faster and more cost-effectively than traditional development.
              </p>
              <ul className="space-y-3 text-slate-600 mb-8">
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Webflow development and design
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Bubble app development
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Zapier automation workflows
                </li>
                <li className="flex items-center">
                  <Check className="w-5 h-5 text-lime-600 mr-3" />
                  Database integration and setup
                </li>
              </ul>
              <div className="text-slate-900 font-semibold">Starting at $4,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and exceptional results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-lime-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Discovery</h3>
              <p className="text-slate-600">
                We start by understanding your business, goals, and target audience through comprehensive research.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Strategy</h3>
              <p className="text-slate-600">
                We develop a strategic plan that aligns with your objectives and creates a roadmap for success.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Design & Build</h3>
              <p className="text-slate-600">
                Our team brings the strategy to life through thoughtful design and expert development.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-lime-400 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Launch & Optimize</h3>
              <p className="text-slate-600">
                We launch your project and continue optimizing based on real user data and feedback.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives real results for your business.
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

export default Services;