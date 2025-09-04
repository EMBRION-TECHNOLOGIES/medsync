'use client';

import { features } from '@/data/landing';
import Typography from './ui/Typography';
import { AnimatedSection } from './ui/animated-section';
import { AnimatedList } from './ui/animated-list';
import { AnimatedCard } from './ui/animated-card';
import { Bell, Calendar, Building, ShoppingCart, Shield, Wifi } from 'lucide-react';

export default function FeatureGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container">
        <AnimatedSection className="text-center mb-16">
          <Typography variant="h2" className="mb-4 text-gradient">
            {features.title}
          </Typography>
          <Typography variant="bodyLarge" className="text-xl mx-auto">
            {features.subtitle}
          </Typography>
        </AnimatedSection>
        
        <AnimatedList 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          staggerDelay={0.1}
          itemDelay={0.1}
        >
          {features.items.map((feature, index) => {
            const icons = [
              <Bell key="bell" className="w-8 h-8 text-ms-blue" />,
              <Calendar key="calendar" className="w-8 h-8 text-ms-green" />,
              <Building key="building" className="w-8 h-8 text-ms-yellow" />,
              <ShoppingCart key="cart" className="w-8 h-8 text-ms-blue" />,
              <Shield key="shield" className="w-8 h-8 text-ms-green" />,
              <Wifi key="wifi" className="w-8 h-8 text-ms-yellow" />
            ];

            return (
              <AnimatedCard 
                key={feature.title} 
                className="group p-8"
                hover={true}
                delay={index * 0.1}
              >
                <div className="text-center">
                  <div className="mb-4">
                    {icons[index]}
                  </div>
                  <Typography variant="h5" className="mb-3 text-slate-900">
                    {feature.title}
                  </Typography>
                  <Typography variant="body" className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </Typography>
                </div>
              </AnimatedCard>
            );
          })}
        </AnimatedList>
      </div>
    </section>
  );
}
