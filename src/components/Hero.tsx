'use client';

// import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { hero } from '@/data/landing';
import { AnimatedButton } from '@/components/ui/animated-button';
// import { MobileButton } from '@/components/ui/mobile-optimized';
// import { OptimizedImage } from '@/components/ui/optimized-image';
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden py-16 md:py-24">
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        style={{ y, opacity }}
      >
        {/* Main gradient orbs */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-ms-blue/10 to-ms-green/10 rounded-full blur-3xl"
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
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-ms-green/10 to-ms-blue/10 rounded-full blur-3xl"
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
        
        {/* Floating medical icons */}
        <motion.div 
          className="absolute top-1/4 left-1/4 text-ms-blue/20"
          animate={{
            y: [-10, 10, -10],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <div className="text-4xl">💊</div>
        </motion.div>
        <motion.div 
          className="absolute top-1/3 right-1/3 text-ms-green/20"
          animate={{
            y: [10, -10, 10],
            rotate: [5, -5, 5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
        >
          <div className="text-3xl">❤️</div>
        </motion.div>
        <motion.div 
          className="absolute bottom-1/3 left-1/3 text-ms-yellow/20"
          animate={{
            y: [-8, 8, -8],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          <div className="text-3xl">📅</div>
        </motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 text-ms-blue/20"
          animate={{
            y: [8, -8, 8],
            rotate: [3, -3, 3],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
        >
          <div className="text-2xl">🏥</div>
        </motion.div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,148,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,148,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </motion.div>
      
      <div className="container relative z-10">
        <motion.div 
          className="flex flex-col items-center justify-center text-center space-y-8 max-w-[64rem] mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Trust indicator */}
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-slate-200 shadow-sm"
            variants={fadeIn}
          >
            <motion.div 
              className="w-2 h-2 bg-ms-green rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm font-medium text-slate-600">{hero.trust}</span>
          </motion.div>
          
          {/* Main heading */}
          <motion.div className="space-y-4" variants={staggerItem}>
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
              variants={staggerContainer}
            >
              <motion.span 
                className="text-gradient block"
                variants={fadeInUp}
              >
                MedSync
              </motion.span>
              <motion.span 
                className="text-slate-900 block text-3xl md:text-4xl lg:text-5xl font-semibold mt-4"
                variants={fadeInUp}
              >
                {hero.title.replace('MedSync', '').trim()}
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl lg:text-3xl text-slate-600 max-w-7xl mx-auto leading-relaxed text-center"
              variants={fadeInUp}
            >
              {hero.subtitle}
            </motion.p>
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerItem}
          >
            {/* Desktop Buttons */}
            <div className="hidden sm:flex flex-col sm:flex-row gap-4 justify-center w-full">
              <AnimatedButton
                size="xl"
                variant="primary"
                className="shadow-lg group"
                onClick={() => window.location.href = hero.primaryCta.href}
              >
                <span>{hero.primaryCta.label}</span>
                <motion.span 
                  className="group-hover:translate-x-1 transition-transform duration-300"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.span>
              </AnimatedButton>
              <AnimatedButton
                size="xl"
                variant="outline"
                onClick={() => window.location.href = hero.secondaryCta.href}
              >
                {hero.secondaryCta.label}
              </AnimatedButton>
            </div>
            
            {/* Mobile Buttons */}
            <div className="flex sm:hidden flex-col gap-4 w-full items-center">
              <AnimatedButton
                size="lg"
                variant="primary"
                className="min-w-[280px] min-h-[52px] shadow-lg"
                onClick={() => window.location.href = hero.primaryCta.href}
              >
                {hero.primaryCta.label}
              </AnimatedButton>
              <AnimatedButton
                size="lg"
                variant="outline"
                className="min-w-[280px] min-h-[52px]"
                onClick={() => window.location.href = hero.secondaryCta.href}
              >
                {hero.secondaryCta.label}
              </AnimatedButton>
            </div>
          </motion.div>
          
          {/* Feature highlights */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-slate-200"
            variants={staggerContainer}
          >
            {[
              { value: "10K+", label: "Active Users", color: "text-ms-blue" },
              { value: "500+", label: "Partner Clinics", color: "text-ms-green" },
              { value: "99%", label: "Uptime", color: "text-ms-yellow" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center py-2 sm:py-0"
                variants={staggerItem}
              >
                <motion.div 
                  className={`text-2xl sm:text-3xl font-bold ${stat.color}`}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-xs sm:text-sm text-slate-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* App Preview - Positioned as background element */}
  
    </section>
  );
}
