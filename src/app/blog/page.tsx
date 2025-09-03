import Link from 'next/link';
import { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import Typography from '@/components/ui/Typography';
import Card from '@/components/ui/card';
import Button from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Latest insights on healthcare technology, medication adherence, and digital health solutions.',
};

const blogPosts = [
  {
    slug: 'never-miss-a-dose',
    title: '5 Ways to Never Miss a Dose Again',
    excerpt: 'Simple strategies to improve medication adherence and stay on track with your health routine.',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Health Tips'
  },
  {
    slug: 'digital-health-africa',
    title: 'The Future of Digital Health in Africa',
    excerpt: 'How mobile technology is transforming healthcare delivery across the continent.',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Technology'
  },
  {
    slug: 'clinics-improve-adherence',
    title: 'How Clinics Can Improve Patient Adherence with MedSync',
    excerpt: 'Practical strategies for healthcare providers to help patients stay compliant with their medications.',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Healthcare'
  }
];

export default function BlogPage() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tr from-ms-green/5 to-ms-yellow/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center max-w-[64rem] mx-auto">
            <Typography variant="h1" className="mb-8 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gradient block">MedSync Blog</span>
              <span className="text-slate-900 block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4">
                Healthcare Insights & Tips
              </span>
            </Typography>
            <Typography variant="bodyLarge" className="text-xl md:text-2xl text-slate-600 leading-relaxed content-narrow">
              Insights on healthcare technology, medication adherence, and digital health solutions 
              to help you and your patients stay healthy.
            </Typography>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-[72rem] mx-auto">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, index) => (
                <Card 
                  key={post.slug} 
                  className="h-full group hover:scale-105 transition-all duration-300 animate-fade-in-up relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-8 relative z-10">
                    <div className="mb-4">
                      <span className="inline-block px-4 py-2 text-sm font-semibold bg-ms-blue/10 text-ms-blue rounded-full group-hover:bg-ms-blue group-hover:text-white transition-colors duration-300">
                        {post.category}
                      </span>
                    </div>
                    
                    <Typography variant="h3" className="mb-4 text-xl font-semibold group-hover:text-ms-blue transition-colors duration-300">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="hover:text-ms-blue transition-colors"
                      >
                        {post.title}
                      </Link>
                    </Typography>
                    
                    <Typography variant="body" className="text-gray-600 mb-6 text-base leading-relaxed">
                      {post.excerpt}
                    </Typography>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                      <span className="font-medium">{post.readTime}</span>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="container">
          <div className="max-w-[56rem] mx-auto text-center">
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Stay Updated</span>
            </Typography>
            <Typography variant="bodyLarge" className="text-xl text-slate-600 mb-8 content-narrow">
              Get the latest healthcare insights, tips, and MedSync updates delivered to your inbox.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ms-blue focus:border-transparent"
              />
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="min-w-[120px] shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ms-blue to-ms-green">
        <div className="container text-center">
          <div className="max-w-[64rem] mx-auto">
            <Typography variant="h2" className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Healthcare?
            </Typography>
            <Typography variant="bodyLarge" className="text-xl text-white/90 mb-8 leading-relaxed content-narrow">
              Join thousands of patients and healthcare providers who trust MedSync 
              to manage their healthcare needs.
            </Typography>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="btn bg-white text-ms-blue hover:bg-slate-50 btn-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Get Started Free
              </a>
              <a 
                href="/features" 
                className="btn border-2 border-white text-white hover:bg-white hover:text-ms-blue btn-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
