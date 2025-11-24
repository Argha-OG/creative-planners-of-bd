import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { blogData } from "./BlogPage";
import SEO from "../../components/SEO";

const BlogPost = () => {
    const { id } = useParams();
    const post = blogData.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold text-red-600">Post not found</h2>
                <Link to="/blog" className="btn btn-ghost mt-4">
                    <ArrowLeft className="mr-2" /> Back to Blog
                </Link>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={post.title}
                description={post.excerpt}
                keywords={post.keywords}
            />
            <div className="min-h-screen bg-base-100 py-16 px-4 sm:px-6 lg:px-8">
                <article className="max-w-4xl mx-auto">
                    <Link to="/blog" className="btn btn-ghost mb-8 hover:text-red-600">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <figure className="w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
                            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                        </figure>

                        <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
                            <span className="badge badge-error text-white p-3">{post.date}</span>
                            <span>By CPB Team</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold text-base-content mb-8 leading-tight">
                            {post.title}
                        </h1>

                        <div
                            className="prose prose-lg max-w-none prose-headings:text-base-content prose-p:text-gray-600 prose-a:text-red-600"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />
                    </motion.div>
                </article>
            </div>
        </>
    );
};

export default BlogPost;
