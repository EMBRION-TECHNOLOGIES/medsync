'use client';

import { motion } from 'framer-motion';
import { howItWorks } from '@/data/landing';
import { AnimatedSection } from './ui/animated-section';
import { AnimatedList } from './ui/animated-list';
import { AnimatedButton } from './ui/animated-button';
// import { staggerContainer, staggerItem } from '@/lib/animations';

export default function HowItWorks() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-ms-blue/5 to-ms-green/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tr from-ms-green/5 to-ms-yellow/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </motion.div>

      <div className="container relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">{howItWorks.title}</span>
          </h2>
          <p className="">
            Get started with MedSync in just a few simple steps
          </p>
        </AnimatedSection>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <AnimatedList 
              className="grid grid-cols-4 gap-8"
              staggerDelay={0.2}
              itemDelay={0.1}
            >
              {howItWorks.steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className="relative group"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step Circle */}
                  <motion.div 
                    className="relative z-10 mx-auto w-20 h-20 bg-white rounded-full border-4 border-ms-blue shadow-lg flex items-center justify-center mb-6"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.7 + index * 0.2, 
                      type: "spring", 
                      stiffness: 200 
                    }}
                  >
                    <span className="text-2xl font-bold text-ms-blue">{step.number}</span>
                  </motion.div>
                  
                  {/* Step Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-ms-blue transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Connecting Arrow */}
                  {index < howItWorks.steps.length - 1 && (
                    <motion.div 
                      className="absolute top-10 -right-4 text-ms-blue opacity-30 group-hover:opacity-60 transition-opacity duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 0.3, x: 0 }}
                      transition={{ delay: 1 + index * 0.2 }}
                    >
                      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </AnimatedList>
          </div>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden">
          <AnimatedList 
            className="grid gap-8 sm:grid-cols-2"
            staggerDelay={0.15}
            itemDelay={0.1}
          >
            {howItWorks.steps.map((step, index) => (
              <motion.div 
                key={index} 
                className="relative group"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card card-elevated p-8 text-center">
                  {/* Step Number */}
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-ms-blue to-ms-green rounded-full text-white text-2xl font-bold mb-6"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ 
                      delay: 0.5 + index * 0.15, 
                      type: "spring", 
                      stiffness: 200 
                    }}
                  >
                    {step.number}
                  </motion.div>
                  
                  {/* Step Content */}
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 group-hover:text-ms-blue transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatedList>
        </div>

        {/* CTA Section */}
        <AnimatedSection className="text-center mt-16" delay={0.8}>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-[48rem] mx-auto leading-relaxed">
            Ready to get started? It only takes a few minutes to set up your account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <AnimatedButton
              size="lg"
              variant="primary"
              className="shadow-lg"
              onClick={() => window.location.href = '/contact'}
            >
              Get Started Free
            </AnimatedButton>
            <AnimatedButton
              size="lg"
              variant="outline"
              onClick={() => window.location.href = '/features'}
            >
              Learn More
            </AnimatedButton>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
