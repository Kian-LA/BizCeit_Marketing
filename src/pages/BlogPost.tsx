import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft, Share2 } from 'lucide-react';
import BlogChart from '../components/BlogChart';
import FAQ from '../components/FAQ';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();

  // Sample blog posts data with charts and FAQ
  const blogPosts = {
    '1': {
      id: 1,
      title: "The Future of Web Design: AI-Powered Interfaces",
      excerpt: "Explore how artificial intelligence is revolutionizing web design and creating more intuitive user experiences.",
      author: "Sarah Johnson",
      date: "Dec 15, 2023",
      readTime: "8 min read",
      category: "Design",
      heroImage: "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: [
        "The intersection of artificial intelligence and web design is creating unprecedented opportunities for creating more intuitive, personalized, and efficient user experiences. As we move into 2024, AI-powered interfaces are no longer a futuristic concept—they're becoming an essential part of modern web development.",
        "Machine learning algorithms can now analyze user behavior patterns, predict user needs, and automatically adjust interface elements to optimize conversion rates. This shift represents a fundamental change in how we approach user experience design.",
        "One of the most significant developments is the emergence of adaptive interfaces that learn from user interactions. These systems can modify layouts, suggest content, and even adjust color schemes based on individual user preferences and behavior patterns."
      ],
      chartData: {
        type: 'bar' as const,
        title: 'AI Adoption in Web Design (2023)',
        description: 'Percentage of design agencies using AI tools',
        data: [
          { name: 'Automated Testing', value: 78 },
          { name: 'Content Generation', value: 65 },
          { name: 'Layout Optimization', value: 52 },
          { name: 'Color Selection', value: 43 },
          { name: 'User Personalization', value: 38 }
        ]
      },
      faq: [
        {
          question: "How can AI improve website user experience?",
          answer: "AI can analyze user behavior patterns to automatically optimize layouts, suggest relevant content, and personalize interfaces. This leads to higher engagement rates and better conversion outcomes."
        },
        {
          question: "Is AI-powered design expensive to implement?",
          answer: "While initial implementation costs can vary, many AI design tools offer affordable subscription models. The long-term benefits often outweigh the costs through improved user engagement and conversion rates."
        },
        {
          question: "Will AI replace human designers?",
          answer: "AI is a tool that enhances human creativity rather than replacing it. Designers can leverage AI for routine tasks while focusing on strategic thinking, creative problem-solving, and user empathy."
        },
        {
          question: "What are the privacy concerns with AI-powered interfaces?",
          answer: "Privacy is crucial when implementing AI features. Always ensure transparent data collection practices, obtain user consent, and comply with regulations like GDPR and CCPA."
        }
      ]
    },
    '2': {
      id: 2,
      title: "Building High-Performance React Applications",
      excerpt: "Learn advanced techniques for optimizing React applications and delivering lightning-fast user experiences.",
      author: "Michael Chen",
      date: "Dec 12, 2023",
      readTime: "12 min read",
      category: "Development",
      heroImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: [
        "Performance optimization in React applications is crucial for delivering exceptional user experiences. As applications grow in complexity, maintaining optimal performance becomes increasingly challenging, requiring strategic approaches and advanced techniques.",
        "Modern React applications face unique performance challenges, from unnecessary re-renders to inefficient state management. Understanding these bottlenecks and implementing proper optimization strategies can dramatically improve your application's speed and user satisfaction.",
        "Key performance optimization techniques include proper component memoization, efficient state management, code splitting, and lazy loading. Each technique addresses specific performance bottlenecks and contributes to a faster, more responsive application."
      ],
      chartData: {
        type: 'line' as const,
        title: 'Performance Metrics Over Time',
        description: 'Page load times before and after optimization',
        data: [
          { name: 'Week 1', value: 3.2 },
          { name: 'Week 2', value: 2.8 },
          { name: 'Week 3', value: 2.1 },
          { name: 'Week 4', value: 1.6 },
          { name: 'Week 5', value: 1.2 },
          { name: 'Week 6', value: 0.9 }
        ]
      },
      faq: [
        {
          question: "What are the most common React performance issues?",
          answer: "The most common issues include unnecessary re-renders, inefficient state updates, large bundle sizes, and blocking operations on the main thread. Identifying these early is key to maintaining good performance."
        },
        {
          question: "How do I measure React application performance?",
          answer: "Use tools like React DevTools Profiler, Chrome DevTools, Lighthouse, and Web Vitals. These tools help identify performance bottlenecks and measure improvements over time."
        },
        {
          question: "Should I use useMemo and useCallback everywhere?",
          answer: "No, overusing these hooks can actually hurt performance. Only use them when you have expensive calculations or when passing objects/functions to child components that are memoized."
        },
        {
          question: "What's the best way to handle large lists in React?",
          answer: "For large lists, consider virtualization with libraries like react-window or react-virtualized. This renders only visible items, dramatically improving performance for long lists."
        }
      ]
    },
    '3': {
      id: 3,
      title: "Brand Strategy: Creating Memorable Digital Experiences",
      excerpt: "Discover how strategic branding transforms businesses and creates lasting connections with customers in the digital age.",
      author: "Emily Rodriguez",
      date: "Dec 10, 2023",
      readTime: "10 min read",
      category: "Branding",
      heroImage: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      content: [
        "In today's digital landscape, brand strategy goes far beyond logos and color palettes. It's about creating cohesive experiences that resonate with your audience across every touchpoint, from your website to social media presence.",
        "Successful digital branding requires a deep understanding of your target audience, clear value propositions, and consistent visual and verbal communication. Every interaction should reinforce your brand's core message and values.",
        "The most memorable brands are those that tell compelling stories and create emotional connections. This involves strategic positioning, authentic messaging, and visual elements that work harmoniously to create a distinctive brand presence."
      ],
      chartData: {
        type: 'pie' as const,
        title: 'Brand Touchpoint Impact',
        description: 'How different brand elements influence customer perception',
        data: [
          { name: 'Visual Identity', value: 35 },
          { name: 'Website Experience', value: 28 },
          { name: 'Content Quality', value: 20 },
          { name: 'Customer Service', value: 12 },
          { name: 'Social Media', value: 5 }
        ]
      },
      faq: [
        {
          question: "How long does it take to build a strong brand?",
          answer: "Building a strong brand is an ongoing process, but you can establish a solid foundation in 3-6 months. Consistent execution and refinement over 1-2 years typically results in strong brand recognition."
        },
        {
          question: "What's the difference between brand identity and brand strategy?",
          answer: "Brand strategy is the overall plan and positioning, while brand identity is the visual and verbal expression of that strategy. Strategy comes first and guides all identity decisions."
        },
        {
          question: "How do I know if my brand is working?",
          answer: "Track metrics like brand awareness, customer loyalty, engagement rates, and conversion rates. Regular brand audits and customer feedback also provide valuable insights into brand effectiveness."
        },
        {
          question: "Should I rebrand if my business is evolving?",
          answer: "Not necessarily. Consider a brand refresh if your current brand no longer aligns with your values or audience. A complete rebrand is only needed if there's a fundamental shift in your business model or target market."
        }
      ]
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="pt-24 min-h-screen bg-white">
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Blog Post Not Found</h1>
          <p className="text-slate-600 mb-8">The blog post you're looking for doesn't exist.</p>
          <Link 
            to="/blog"
            className="bg-lime-400 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-lime-300 transition-colors inline-flex items-center"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img 
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
          
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="container mx-auto">
              <div className="max-w-4xl">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-lime-400 text-slate-900 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                
                <div className="flex items-center text-slate-300 text-sm">
                  <User className="w-4 h-4 mr-1" />
                  <span className="mr-6">{post.author}</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="mr-6">{post.date}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link 
              to="/blog"
              className="text-slate-600 hover:text-slate-900 inline-flex items-center transition-colors"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Blog
            </Link>
            
            <button className="text-slate-600 hover:text-slate-900 inline-flex items-center transition-colors">
              <Share2 className="mr-2" size={20} />
              Share Article
            </button>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Text */}
            <div className="prose prose-lg max-w-none mb-12">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-slate-700 mb-6 leading-relaxed text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Chart Section */}
            <BlogChart 
              type={post.chartData.type}
              data={post.chartData.data}
              title={post.chartData.title}
              description={post.chartData.description}
            />

            {/* More Content */}
            <div className="prose prose-lg max-w-none my-12">
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                The data above illustrates the growing importance of these trends in the industry. As we continue to push the boundaries of what's possible in digital design and development, staying informed about these metrics helps us make better strategic decisions.
              </p>
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                Looking ahead, the integration of these technologies will only deepen. Organizations that embrace these changes early will have a significant competitive advantage in the digital marketplace.
              </p>
            </div>

            {/* FAQ Section */}
            <FAQ items={post.faq} />

            {/* Author Bio */}
            <div className="bg-slate-50 rounded-2xl p-8 mt-12">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-lime-400 rounded-full flex items-center justify-center">
                  <User className="text-slate-900" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{post.author}</h4>
                  <p className="text-slate-600 mb-4">
                    {post.author === 'Sarah Johnson' && "Sarah is a senior UX designer with over 8 years of experience in creating digital experiences that drive results. She specializes in user research and interface design."}
                    {post.author === 'Michael Chen' && "Michael is a full-stack developer and performance optimization expert. He helps businesses build scalable, high-performance web applications."}
                    {post.author === 'Emily Rodriguez' && "Emily is a brand strategist who has worked with Fortune 500 companies and startups alike. She specializes in creating memorable brand experiences."}
                  </p>
                  <div className="flex gap-4">
                    <a href="#" className="text-lime-600 hover:text-lime-700 text-sm font-medium">
                      View Profile
                    </a>
                    <a href="#" className="text-lime-600 hover:text-lime-700 text-sm font-medium">
                      More Articles
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Sample related articles */}
                <Link to="/blog/2" className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img 
                      src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Related article"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-lime-600 transition-colors mb-2">
                    Building High-Performance React Applications
                  </h4>
                  <p className="text-slate-600 text-sm">Dec 12, 2023 • 12 min read</p>
                </Link>
                
                <Link to="/blog/3" className="group">
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img 
                      src="https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Related article"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-lime-600 transition-colors mb-2">
                    Brand Strategy: Creating Memorable Digital Experiences
                  </h4>
                  <p className="text-slate-600 text-sm">Dec 10, 2023 • 10 min read</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-slate-300 mb-8">
              Get expert tips, industry insights, and exclusive content delivered directly to your inbox.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-slate-600 bg-slate-800 text-white rounded-lg focus:ring-2 focus:ring-lime-400 focus:border-transparent outline-none placeholder-slate-400"
              />
              <button
                type="submit"
                className="bg-lime-400 text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-lime-300 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-slate-500 text-sm mt-4">
              Join 10,000+ professionals. No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;