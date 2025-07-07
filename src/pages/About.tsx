import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Award, ChevronRight } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              We're <span className="text-lime-400">High Level Scaling</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              A passionate team of designers, developers, and strategists dedicated to creating digital experiences that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white text-slate-900">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-slate-600 mb-6 text-lg">
                We believe that great design isn't just about looking good—it's about solving problems, creating connections, and driving meaningful results for businesses and their customers.
              </p>
              <p className="text-slate-600 mb-8">
                Since our founding, we've helped over 100 companies transform their digital presence through strategic design, innovative development, and data-driven optimization.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-lime-600 mr-3" />
                  <span className="text-slate-700">Results-driven approach</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-6 h-6 text-lime-600 mr-3" />
                  <span className="text-slate-700">Collaborative partnership</span>
                </div>
                <div className="flex items-center">
                  <Award className="w-6 h-6 text-lime-600 mr-3" />
                  <span className="text-slate-700">Award-winning quality</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Team collaboration"
                className="w-full h-[500px] object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we work with our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Purpose-Driven</h3>
              <p className="text-slate-600">
                Every project starts with understanding your goals and creating solutions that deliver measurable impact.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Collaborative</h3>
              <p className="text-slate-600">
                We work as an extension of your team, ensuring transparent communication and shared success.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl text-center">
              <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-lime-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Excellence</h3>
              <p className="text-slate-600">
                We're committed to delivering exceptional quality in every detail, from concept to completion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Talented professionals who bring diverse expertise and fresh perspectives to every project.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                alt="Sarah Johnson"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Sarah Johnson</h3>
              <p className="text-lime-600 font-medium mb-3">Creative Director</p>
              <p className="text-slate-600">
                10+ years crafting brand identities and user experiences that resonate with audiences.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                alt="Michael Chen"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Michael Chen</h3>
              <p className="text-lime-600 font-medium mb-3">Lead Developer</p>
              <p className="text-slate-600">
                Full-stack developer specializing in modern web technologies and performance optimization.
              </p>
            </div>

            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1" 
                alt="Emily Rodriguez"
                className="w-48 h-48 rounded-full object-cover mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-slate-900 mb-2">Emily Rodriguez</h3>
              <p className="text-lime-600 font-medium mb-3">Strategy Lead</p>
              <p className="text-slate-600">
                Digital strategist focused on data-driven insights and conversion optimization.
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
              Ready to Work Together?
            </h2>
            <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life and achieve your business goals.
            </p>
            <Link 
              to="/contact"
              className="bg-lime-400 text-slate-900 px-8 py-3 rounded-full font-medium hover:bg-lime-300 transition-colors inline-flex items-center"
            >
              Start a Project
              <ChevronRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;