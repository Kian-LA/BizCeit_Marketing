import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Search } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const blogPosts = [
    {
      id: 1,
      title: "Design Trends That Will Define 2024",
      excerpt: "Explore the latest design trends that are shaping the digital landscape this year, from AI-powered interfaces to sustainable design practices.",
      content: "The design world is constantly evolving, and 2024 brings exciting new trends that will reshape how we create digital experiences...",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "5 min read",
      category: "Design",
      image: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: true
    },
    {
      id: 2,
      title: "The No-Code Revolution: Building Without Coding",
      excerpt: "How no-code tools are democratizing web development and empowering businesses to create powerful applications faster than ever.",
      content: "No-code development has transformed from a niche solution to a mainstream approach that's changing how we build digital products...",
      author: "Michael Chen",
      date: "Dec 12, 2023",
      readTime: "7 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false
    },
    {
      id: 3,
      title: "Building a Brand That Resonates",
      excerpt: "Essential strategies for creating a memorable brand identity that connects with your audience and drives business growth.",
      content: "A strong brand is more than just a logo or color scheme—it's the emotional connection between your business and your customers...",
      author: "Emily Rodriguez",
      date: "Dec 10, 2023",
      readTime: "6 min read",
      category: "Branding",
      image: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false
    },
    {
      id: 4,
      title: "UX Research: Understanding Your Users",
      excerpt: "A comprehensive guide to conducting effective user research that leads to better design decisions and improved user experiences.",
      content: "User research is the foundation of great design. By understanding your users' needs, behaviors, and pain points...",
      author: "Sarah Johnson",
      date: "Dec 8, 2023",
      readTime: "8 min read",
      category: "UX Research",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false
    },
    {
      id: 5,
      title: "Performance Optimization for Modern Websites",
      excerpt: "Practical techniques to improve your website's loading speed, user experience, and search engine rankings.",
      content: "Website performance directly impacts user experience, conversion rates, and SEO rankings. Here's how to optimize...",
      author: "Michael Chen",
      date: "Dec 5, 2023",
      readTime: "10 min read",
      category: "Development",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false
    },
    {
      id: 6,
      title: "The Psychology of Color in Digital Design",
      excerpt: "How color choices influence user behavior and decision-making in digital interfaces and marketing materials.",
      content: "Color is one of the most powerful tools in a designer's arsenal. It can evoke emotions, guide attention...",
      author: "Emily Rodriguez",
      date: "Dec 3, 2023",
      readTime: "4 min read",
      category: "Design",
      image: "https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      featured: false
    }
  ];

  const categories = ['All', 'Design', 'Development', 'Branding', 'UX Research'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              The Studio <span className="text-lime-400">Journal</span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Insights, tips, and stories from our team about design, development, and digital strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-colors ${
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
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === 'All' && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-50 rounded-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="bg-lime-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                      <span className="bg-slate-200 text-slate-700 px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                      {featuredPost.title}
                    </h2>
                    
                    <p className="text-slate-600 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-500 text-sm">
                        <User className="w-4 h-4 mr-1" />
                        <span className="mr-4">{featuredPost.author}</span>
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="mr-4">{featuredPost.date}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      
                      <Link 
                        to={`/blog/${featuredPost.id}`}
                        className="text-lime-600 hover:text-lime-700 font-medium inline-flex items-center"
                      >
                        Read More
                        <ArrowRight className="ml-1" size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {regularPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Link key={post.id} to={`/blog/${post.id}`}>
                  <article className="group cursor-pointer">
                    <div className="relative overflow-hidden rounded-2xl mb-4">
                      <img 
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-lime-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-slate-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-slate-500 text-sm">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">No articles found</h3>
              <p className="text-slate-600 mb-8">
                Try adjusting your search terms or category filter.
              </p>
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="bg-lime-400 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-lime-300 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-slate-600 mb-8">
              Subscribe to our newsletter and get the latest articles, insights, and design tips delivered to your inbox.
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
    </div>
  );
};

export default Blog;