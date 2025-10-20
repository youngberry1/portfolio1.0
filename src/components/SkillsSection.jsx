'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Badge } from './ui/badge';

export function Skills() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });

   const skillCategories = [
      {
         title: 'Frontend',
         skills: [
            'React',
            'Next.js',
            'TypeScript',
            'JavaScript',
            'Tailwind CSS',
            'HTML5',
            'CSS3',
            'Motion/Framer',
         ],
         color: 'from-blue-500 to-cyan-500',
      },
      {
         title: 'Backend',
         skills: [
            'Node.js',
            'Express',
            'Python',
            'Django',
            'PostgreSQL',
            'MongoDB',
            'REST APIs',
            'GraphQL',
         ],
         color: 'from-green-500 to-emerald-500',
      },
      {
         title: 'Tools & Others',
         skills: [
            'Git',
            'Docker',
            'AWS',
            'Figma',
            'Jest',
            'Webpack',
            'CI/CD',
            'Agile',
         ],
         color: 'from-purple-500 to-pink-500',
      },
   ];

   return (
      <section id='skills' className='py-20 bg-slate-950' ref={ref}>
         <div className='container mx-auto px-4'>
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8 }}
               className='max-w-6xl mx-auto'
            >
               {/* Section Title */}
               <motion.h2
                  className='text-center mb-4 text-white'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
               >
                  Skills & Technologies
               </motion.h2>

               {/* Underline Animation */}
               <motion.div
                  className='w-20 h-1 bg-purple-600 mx-auto mb-12'
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 80 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
               />

               {/* Skills Grid */}
               <div className='grid md:grid-cols-3 gap-8'>
                  {skillCategories.map((category, categoryIndex) => (
                     <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + categoryIndex * 0.2 }}
                        className='relative'
                     >
                        <div className='bg-slate-800/50 rounded-2xl p-8 h-full border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20'>
                           {/* Gradient Box */}
                           <motion.div
                              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} mb-6`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                           />

                           {/* Category Title */}
                           <h3 className='mb-6 text-white'>{category.title}</h3>

                           {/* Skill Badges */}
                           <div className='flex flex-wrap gap-2'>
                              {category.skills.map((skill, skillIndex) => (
                                 <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={
                                       isInView ? { opacity: 1, scale: 1 } : {}
                                    }
                                    transition={{
                                       delay:
                                          0.6 +
                                          categoryIndex * 0.2 +
                                          skillIndex * 0.05,
                                    }}
                                    whileHover={{ scale: 1.1 }}
                                 >
                                    <Badge
                                       variant='secondary'
                                       className='px-3 py-1 bg-slate-700 border border-slate-600 text-slate-200 hover:border-purple-400 hover:bg-slate-600 transition-all cursor-default'
                                    >
                                       {skill}
                                    </Badge>
                                 </motion.div>
                              ))}
                           </div>
                        </div>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
}
