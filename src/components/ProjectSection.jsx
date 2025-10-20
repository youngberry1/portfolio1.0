'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function Projects() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });
   const [hoveredIndex, setHoveredIndex] = useState(null);

   const projects = [
      {
         title: 'React Sign-Up Form',
         description:
            'A clean and modern user registration form with input validation, designed for a seamless and secure sign-up experience. Built with React, Formik, Yup, and Tailwind CSS.',
         image: '/React-Form.png',
         tags: ['React', 'Formik & Yup', 'Form Validation', 'Tailwind CSS'],
         github: 'https://youngberry1.github.io/formik-react/',
         demo: 'https://youngberry1.github.io/formik-react/',
      },
      {
         title: 'Quiz App',
         description:
            "An interactive quiz application that tests users' knowledge with multiple-choice questions, featuring a timer to track performance.",
         image: '/Quiz.png',
         tags: ['Classes', 'HTML', 'CSS', 'JavaScript'],
         github: 'https://youngberry1.github.io/Quiz-App/',
         demo: 'https://youngberry1.github.io/Quiz-App/',
      },
      {
         title: 'Currency Converter',
         description:
            'A simple and intuitive currency conversion tool that allows users to quickly check exchange rates and convert amounts between different global currencies.',
         image: '/Currency-Converter.png',
         tags: ['React', 'useCallback', 'Tailwind CSS'],
         github: 'https://youngberry1.github.io/currency-converter/',
         demo: 'https://youngberry1.github.io/currency-converter/',
      },
   ];

   return (
      <section id='projects' className='py-20 bg-slate-900' ref={ref}>
         <div className='container mx-auto px-4'>
            {/* Section Animation Wrapper */}
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8 }}
               className='max-w-6xl mx-auto'
            >
               {/* Title */}
               <motion.h2
                  className='text-center mb-4 text-white'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
               >
                  Featured Projects
               </motion.h2>

               {/* Underline */}
               <motion.div
                  className='w-20 h-1 bg-purple-600 mx-auto mb-12'
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 80 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
               />

               {/* Projects Grid */}
               <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {projects.map((project, index) => (
                     <motion.div
                        key={project.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 + index * 0.2 }}
                        onHoverStart={() => setHoveredIndex(index)}
                        onHoverEnd={() => setHoveredIndex(null)}
                     >
                        <Card className='overflow-hidden h-full flex flex-col group bg-slate-800/50 border-slate-700 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20'>
                           {/* Project Image */}
                           <div className='relative overflow-hidden aspect-video'>
                              <motion.img
                                 src={project.image}
                                 alt={project.title}
                                 className='w-full h-full object-cover'
                                 animate={{
                                    scale: hoveredIndex === index ? 1.1 : 1,
                                 }}
                                 transition={{ duration: 0.4 }}
                              />

                              {/* Overlay */}
                              <motion.div
                                 className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent'
                                 initial={{ opacity: 0 }}
                                 animate={{
                                    opacity: hoveredIndex === index ? 1 : 0,
                                 }}
                                 transition={{ duration: 0.3 }}
                              >
                                 <div className='absolute bottom-4 left-4 right-4 flex gap-2'>
                                    {/* Demo Button */}
                                    <Button
                                       size='sm'
                                       className='bg-white text-slate-900 hover:bg-slate-100 flex-1'
                                       asChild
                                    >
                                       <a
                                          href={project.demo}
                                          target='_blank'
                                          rel='noopener noreferrer'
                                       >
                                          <ExternalLink className='w-4 h-4 mr-2' />
                                          Demo
                                       </a>
                                    </Button>

                                    {/* Code Button */}
                                    <Button
                                       size='sm'
                                       variant='outline'
                                       className='bg-slate-900/50 text-white border-white/20 hover:bg-slate-900 flex-1'
                                       asChild
                                    >
                                       <a
                                          href={project.github}
                                          target='_blank'
                                          rel='noopener noreferrer'
                                       >
                                          <Github className='w-4 h-4 mr-2' />
                                          Code
                                       </a>
                                    </Button>
                                 </div>
                              </motion.div>
                           </div>

                           {/* Project Info */}
                           <div className='p-6 flex-1 flex flex-col'>
                              <h3 className='mb-3 text-white'>
                                 {project.title}
                              </h3>
                              <p className='text-slate-300 mb-4 flex-1'>
                                 {project.description}
                              </p>

                              {/* Tags */}
                              <div className='flex flex-wrap gap-2'>
                                 {project.tags.map((tag) => (
                                    <Badge
                                       key={tag}
                                       variant='secondary'
                                       className='bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 border border-purple-500/30'
                                    >
                                       {tag}
                                    </Badge>
                                 ))}
                              </div>
                           </div>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </motion.div>
         </div>
      </section>
   );
}
