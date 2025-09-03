'use client';

import { motion } from 'framer-motion';
import { features } from '@/data/landing';
// import Card, { CardBody } from './ui/card';
import Typography from './ui/Typography';
import { AnimatedSection } from './ui/animated-section';
import { AnimatedList } from './ui/animated-list';
import { AnimatedCard } from './ui/animated-card';
// import { fadeInUp, staggerContainer, staggerItem, hoverLift } from '@/lib/animations';

export default function FeatureGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <Typography variant="h2" className="mb-4">
            {features.title}
          </Typography>
        </AnimatedSection>
        
        <AnimatedList 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
          itemDelay={0.1}
        >
          {features.items.map((feature, index) => (
            <AnimatedCard 
              key={feature.title} 
              className="group"
              hover={true}
              delay={index * 0.1}
            >
              <div className="text-center">
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  {feature.icon}
                </motion.div>
                <Typography variant="h5" className="mb-3">
                  {feature.title}
                </Typography>
                <Typography variant="body" className="text-zinc-600">
                  {feature.description}
                </Typography>
              </div>
            </AnimatedCard>
          ))}
        </AnimatedList>
      </div>
    </section>
  );
}
