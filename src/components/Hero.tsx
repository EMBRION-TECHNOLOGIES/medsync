'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { hero } from '@/data/landing';
import { AnimatedButton } from '@/components/ui/animated-button';
import { fadeInUp, fadeIn, staggerContainer, staggerItem } from '@/lib/animations';
import { Bell, Calendar, MessageCircle, Stethoscope } from 'lucide-react';

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
        

        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,148,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,148,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </motion.div>
      
      <div className="container relative z-10">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column */}
          <motion.div 
            className="space-y-8"
            variants={staggerItem}
          >
            {/* Eyebrow */}
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
              <span className="font-nunito font-medium text-sm text-slate-600">{hero.eyebrow}</span>
            </motion.div>
            
            {/* Main heading */}
            <motion.h1 
              className="font-nunito font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
              variants={fadeInUp}
            >
              <span className="text-slate-900">Finally, your health—</span>
              <span className="text-gradient">synced.</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="font-nunito font-regular text-lg md:text-xl text-slate-600 leading-relaxed"
              variants={fadeInUp}
            >
              {hero.subtitle}
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={staggerItem}
            >
              <AnimatedButton
                size="lg"
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
                size="lg"
                variant="outline"
                onClick={() => {
                  if (hero.secondaryCta.action === 'scroll_to_how_it_works') {
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = hero.secondaryCta.href;
                  }
                }}
              >
                {hero.secondaryCta.label}
              </AnimatedButton>
            </motion.div>
            
            {/* Trust badges */}
            <motion.div 
              className="flex flex-wrap gap-4 pt-4"
              variants={staggerContainer}
            >
              {hero.trustBadges.map((badge, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center gap-2 text-sm text-slate-600"
                  variants={staggerItem}
                >
                  <div className="w-1.5 h-1.5 bg-ms-green rounded-full"></div>
                  <span>{badge}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - App Mockup */}
          <motion.div 
            className="relative"
            variants={staggerItem}
          >
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
              {/* Header with Reminder */}
              <div className="bg-gradient-to-r from-ms-blue to-ms-green px-4 py-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                                      <div className="font-nunito font-semibold text-sm text-white">{hero.appMockup.layout.header.brand}</div>
                  <div className="font-nunito font-regular text-xs text-white/80">{hero.appMockup.layout.header.label}</div>
                  </div>
                </div>
                <motion.div 
                  className="space-y-1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="font-nunito font-bold text-2xl text-white">
                    {hero.appMockup.layout.header.reminder.time}
                  </div>
                                      <div className="space-y-2">
                      <div className="flex items-center gap-2 text-white/90">
                        <span>{hero.appMockup.layout.header.reminder.instruction}</span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-2">
                        <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                </motion.div>
              </div>

              {/* Features Grid - 2x2 */}
              <div className="p-4">
                <div className="grid grid-cols-2 gap-3">
                  {hero.appMockup.layout.features.map((feature, index) => {
                    const icons = [
                      <Bell key="bell" className="w-5 h-5 text-slate-600" />,
                      <Calendar key="calendar" className="w-5 h-5 text-slate-600" />,
                      <MessageCircle key="chat" className="w-5 h-5 text-slate-600" />,
                      <Stethoscope key="stethoscope" className="w-5 h-5 text-slate-600" />
                    ];
                    
                    return (
                      <motion.div 
                        key={index}
                        className="bg-slate-50 rounded-lg p-3 hover:bg-slate-100 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {icons[index]}
                          <div className="font-nunito font-medium text-sm text-slate-900">
                            {feature.title}
                          </div>
                        </div>
                        <div className="font-nunito font-regular text-xs text-slate-600 leading-relaxed">
                          {feature.description}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* App Preview - Positioned as background element */}
  
    </section>
  );
}
