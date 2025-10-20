'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';
import { Card } from './ui/card';

export function About() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });

   const features = [
      {
         icon: Code2,
         title: 'Clean Code',
         description: 'Writing maintainable, scalable, and efficient code',
      },
      {
         icon: Palette,
         title: 'Creative Design',
         description: 'Crafting beautiful and intuitive user interfaces',
      },
      {
         icon: Rocket,
         title: 'Fast Performance',
         description: 'Optimized solutions for lightning-fast experiences',
      },
      {
         icon: Users,
         title: 'Collaboration',
         description: 'Working seamlessly with teams to achieve goals',
      },
   ];

   return (
      <section id='about' className='py-20 bg-slate-900' ref={ref}>
         <div className='container mx-auto px-4'>
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8 }}
               className='max-w-6xl mx-auto'
            >
               {/* Heading */}
               <motion.h2
                  className='text-center mb-4 text-white text-3xl font-semibold'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
               >
                  About Me
               </motion.h2>

               {/* Accent line under heading */}
               <motion.div
                  className='w-20 h-1 bg-purple-600 mx-auto mb-12'
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 80 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
               />

               {/* Main content grid */}
               <div className='grid md:grid-cols-2 gap-12 items-center mb-16'>
                  {/* Left Text Section */}
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     animate={isInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ delay: 0.4 }}
                  >
                     <p className='text-slate-300 mb-6 text-lg'>
                        I'm a passionate developer with a keen eye for design
                        and a love for creating exceptional digital experiences.
                        With expertise in modern web technologies, I transform
                        ideas into elegant solutions.
                     </p>
                     <p className='text-slate-300 mb-6 text-lg'>
                        My journey in web development started with curiosity
                        about how things work on the internet, and has evolved
                        into a career dedicated to building innovative and
                        user-centric applications.
                     </p>
                     <p className='text-slate-300 text-lg'>
                        When I'm not coding, you can find me exploring new
                        technologies, contributing to open-source projects, or
                        sharing knowledge with the developer community.
                     </p>
                  </motion.div>

                  {/* Right Image Section */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     animate={isInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ delay: 0.6 }}
                     className='relative'
                  >
                     <div className='aspect-square rounded-2xl overflow-hidden relative'>
                        <div className='absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 z-10' />
                        <img
                           src='/Trend.jpeg'
                           alt='Workspace'
                           className='w-full h-full object-cover'
                        />
                     </div>

                     {/* Floating animation element */}
                     <motion.div
                        className='absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600 rounded-2xl -z-10'
                        animate={{
                           scale: [1, 1.1, 1],
                           rotate: [0, 5, 0],
                        }}
                        transition={{
                           duration: 4,
                           repeat: Infinity,
                           ease: 'easeInOut',
                        }}
                     />
                  </motion.div>
               </div>

               {/* Features Grid */}
               <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                  {features.map((feature, index) => (
                     <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.1 }}
                     >
                        <Card className='p-6 text-center hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border-slate-700 bg-slate-800/50 group'>
                           <motion.div
                              className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-500/20 text-purple-400 mb-4 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300'
                              whileHover={{ scale: 1.1, rotate: 5 }}
                           >
                              <feature.icon className='w-8 h-8' />
                           </motion.div>
                           <h3 className='mb-2 text-white text-lg font-semibold'>
                              {feature.title}
                           </h3>
                           <p className='text-slate-400 text-sm'>
                              {feature.description}
                           </p>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
}
