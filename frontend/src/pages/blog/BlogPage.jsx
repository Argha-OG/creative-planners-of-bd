import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import SEO from "../../components/SEO";

export const blogData = [
    {
        id: 1,
        title: "The Future of AI in Marketing",
        excerpt: "Discover how Artificial Intelligence is revolutionizing the marketing landscape, from personalized content to predictive analytics.",
        date: "November 24, 2025",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
        content: `
      <p>Artificial Intelligence (AI) is no longer just a buzzword; it's a fundamental shift in how businesses approach marketing. From chatbots providing instant customer service to algorithms predicting consumer behavior, AI is enabling smarter, more efficient strategies.</p>
      <br/>
      <h3 class="text-2xl font-bold">Personalization at Scale</h3>
      <p>One of the most significant impacts of AI is the ability to personalize content for millions of users simultaneously. By analyzing user data, AI can tailor recommendations, emails, and ads to individual preferences, significantly increasing engagement rates.</p>
      <br/>
      <h3 class="text-2xl font-bold">Predictive Analytics</h3>
      <p>AI-driven predictive analytics allows marketers to forecast trends and customer needs before they happen. This proactive approach helps in optimizing ad spend and improving ROI.</p>
    `,
        keywords: "AI, Marketing, Artificial Intelligence, Digital Marketing, Tech News"
    },
    {
        id: 2,
        title: "Top Web Design Trends for 2026",
        excerpt: "Stay ahead of the curve with these emerging web design trends that are set to dominate the digital space in 2026.",
        date: "November 20, 2025",
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=2064&auto=format&fit=crop",
        content: `
      <p>As we approach 2026, web design is evolving rapidly. The focus is shifting towards immersive experiences, sustainability, and hyper-minimalism.</p>
      <br/>
      <h3 class="text-2xl font-bold">Immersive 3D Elements</h3>
      <p>With the advancement of web technologies, 3D elements are becoming more accessible and are being used to create interactive and engaging user experiences without compromising performance.</p>
      <br/>
      <h3 class="text-2xl font-bold">Dark Mode & Glassmorphism</h3>
      <p>Dark mode continues to be a favorite, often paired with glassmorphism effects to add depth and a modern touch to interfaces. This combination not only looks sleek but also reduces eye strain.</p>
    `,
        keywords: "Web Design, Trends, 2026, UX/UI, Glassmorphism"
    },
    {
        id: 3,
        title: "Why SEO is Crucial for Small Businesses",
        excerpt: "Learn why Search Engine Optimization (SEO) is a game-changer for small businesses looking to compete in the digital market.",
        date: "November 15, 2025",
        image: "https://images.unsplash.com/photo-1571721795195-a2d8d1437bb1?q=80&w=2070&auto=format&fit=crop",
        content: `
      <p>For small businesses, visibility is key. SEO provides a cost-effective way to increase organic traffic and build credibility.</p>
      <br/>
      <h3 class="text-2xl font-bold">Building Trust</h3>
      <p>Ranking high on search engines signals to customers that your business is a credible player in the industry. It builds trust and authority, which are essential for long-term success.</p>
      <br/>
      <h3 class="text-2xl font-bold">Cost-Effective Marketing</h3>
      <p>Unlike paid advertising, SEO focuses on organic growth. While it requires time and effort, the long-term benefits often outweigh the costs, providing a sustainable stream of leads.</p>
    `,
        keywords: "SEO, Small Business, Digital Marketing, Growth, Organic Traffic"
    },
    {
        id: 4,
        title: "The Rise of Voice Search",
        excerpt: "Voice search is changing how users interact with the web. Here's how you can optimize your content for voice assistants.",
        date: "November 10, 2025",
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=2070&auto=format&fit=crop",
        content: `
      <p>With the proliferation of smart speakers and voice assistants, voice search is becoming a primary mode of information retrieval.</p>
      <br/>
      <h3 class="text-2xl font-bold">Conversational Keywords</h3>
      <p>Voice searches are typically more conversational and longer than text searches. Optimizing for natural language and question-based queries is crucial for capturing this traffic.</p>
      <br/>
      <h3 class="text-2xl font-bold">Local SEO</h3>
      <p>Many voice searches are local in nature (e.g., "restaurants near me"). Ensuring your local SEO is on point is vital for leveraging the power of voice search.</p>
    `,
        keywords: "Voice Search, SEO, Technology, Smart Speakers, Digital Trends"
    }
];

const BlogPage = () => {
    return (
        <>
            <SEO
                title="Blog & Tech News"
                description="Stay updated with the latest trends in technology, marketing, and business growth strategies."
                keywords="Blog, Tech News, Marketing, Business, CPB"
            />
            <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold text-base-content sm:text-5xl">
                            Latest <span className="text-red-600">Insights</span> & News
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                            Explore the latest trends in technology and digital marketing.
                        </p>
                    </motion.div>

                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {blogData.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.1 }}
                                whileHover={{ y: -10 }}
                                className="card bg-base-100 shadow-xl border border-gray-200 hover:shadow-2xl hover:border-red-500 transition-all duration-300 overflow-hidden"
                            >
                                <figure className="h-48 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                                </figure>
                                <div className="card-body">
                                    <div className="badge badge-error text-white mb-2">{post.date}</div>
                                    <h2 className="card-title text-base-content hover:text-red-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-500 text-sm line-clamp-3">{post.excerpt}</p>
                                    <div className="card-actions justify-end mt-4">
                                        <Link to={`/blog/${post.id}`} className="btn btn-outline btn-error btn-sm rounded-full">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogPage;
