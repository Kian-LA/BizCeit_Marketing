import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lime-400 text-sm font-medium mb-4 flex items-center justify-center">
              <span className="w-2 h-2 bg-lime-400 rounded-full mr-2"></span>
              LET THE AGENCY ELEVATE YOUR BRAND
            </p>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Where Stunning Design Meets<br />
              <span className="text-lime-400">Flawless Functionality</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              We create digital experiences that captivate audiences and drive results. From stunning websites to powerful brand identities, we bring your vision to life.
            </p>
            <Link 
              to="/contact"
              className="bg-lime-400 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-lime-300 transition-colors inline-flex items-center"
            >
              Get Started
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative max-w-6xl mx-auto">
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Professional team working in modern office"
                className="w-full h-[400px] md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            <div className="text-2xl font-bold text-slate-300">bento</div>
            <div className="text-2xl font-bold text-slate-300">zerod</div>
            <div className="text-2xl font-bold text-slate-300">PUNTO</div>
            <div className="text-2xl font-bold text-slate-300">dblm</div>
            <div className="text-2xl font-bold text-slate-300">timobuz</div>
            <div className="text-2xl font-bold text-slate-300">Propel</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Unforgettable Websites,<br />
                Brands & Visuals for Bold<br />
                Visionaries
              </h2>
              <p className="text-slate-600 mb-8 text-lg">
                We partner with ambitious entrepreneurs and established businesses to create digital experiences that don't just look stunning—they convert visitors into customers and build lasting brand loyalty.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-400 rounded-full mr-3"></div>
                  <span className="text-slate-700">Strategic brand development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-400 rounded-full mr-3"></div>
                  <span className="text-slate-700">Custom web development</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-lime-400 rounded-full mr-3"></div>
                  <span className="text-slate-700">Performance optimization</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Creative workspace with design tools"
                className="w-full h-[400px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">72+</div>
              <div className="text-slate-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">100+</div>
              <div className="text-slate-600">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-slate-900 mb-2">10+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Services We Offer</h2>
            <Link 
              to="/services"
              className="text-lime-600 hover:text-lime-700 font-medium inline-flex items-center"
            >
              View All Services
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">UI/UX Design</h3>
              <p className="text-slate-600 mb-6">
                We craft intuitive and engaging user experiences that convert visitors into customers through strategic design thinking.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Brand Design</h3>
              <p className="text-slate-600 mb-6">
                Build a memorable brand identity that resonates with your target audience and stands out in the marketplace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Showcase of Selected Work</h2>
            <Link 
              to="/portfolio"
              className="text-lime-400 hover:text-lime-300 font-medium inline-flex items-center"
            >
              View Full Portfolio
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="FinTech Startup - Growth Study"
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">FinTech Startup - Growth Study</h3>
              <p className="text-slate-400">Strategy & Development</p>
            </div>

            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Creativity - Social Engagement"
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Creativity - Social Engagement</h3>
              <p className="text-slate-400">Brand Design & Marketing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Clients Say About Us</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-slate-900 mr-2">4.9</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                "Working with this team was incredible. They delivered exactly what we needed and exceeded our expectations in every way."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
                  alt="Sarah Johnson"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium text-slate-900">Sarah Johnson</div>
                  <div className="text-slate-600 text-sm">CEO, TechStart</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-slate-900 mr-2">4.7</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                "The attention to detail and professional approach made all the difference. Our website now converts 3x better than before."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
                  alt="Michael Chen"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium text-slate-900">Michael Chen</div>
                  <div className="text-slate-600 text-sm">Founder, GrowthCo</div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="text-2xl font-bold text-slate-900 mr-2">4.8</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-600 mb-6">
                "Amazing team that truly understands modern design and development. They brought our vision to life perfectly."
              </p>
              <div className="flex items-center">
                <img 
                  src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1" 
                  alt="Emily Rodriguez"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-medium text-slate-900">Emily Rodriguez</div>
                  <div className="text-slate-600 text-sm">Creative Director</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Studio Journal</h2>
            <p className="text-slate-400 max-w-2xl mx-auto mb-8">
              Insights, tips, and stories from our team about design, development, and digital strategy.
            </p>
            <Link 
              to="/blog"
              className="text-lime-400 hover:text-lime-300 font-medium inline-flex items-center"
            >
              View All Articles
              <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Design Trends 2024"
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition-colors">
                Design Trends That Will Define 2024
              </h3>
              <p className="text-slate-400 mb-4">
                Explore the latest design trends that are shaping the digital landscape this year.
              </p>
              <div className="flex items-center text-slate-500 text-sm">
                <span>Dec 15, 2023</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </article>

            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="No-Code Revolution"
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition-colors">
                The No-Code Revolution: Building Without Coding
              </h3>
              <p className="text-slate-400 mb-4">
                How no-code tools are democratizing web development and empowering businesses.
              </p>
              <div className="flex items-center text-slate-500 text-sm">
                <span>Dec 12, 2023</span>
                <span className="mx-2">•</span>
                <span>7 min read</span>
              </div>
            </article>

            <article className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <img 
                  src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Brand Strategy"
                  className="w-full h-[200px] object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-lime-400 transition-colors">
                Building a Brand That Resonates
              </h3>
              <p className="text-slate-400 mb-4">
                Essential strategies for creating a memorable brand identity that connects with your audience.
              </p>
              <div className="flex items-center text-slate-500 text-sm">
                <span>Dec 10, 2023</span>
                <span className="mx-2">•</span>
                <span>6 min read</span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;