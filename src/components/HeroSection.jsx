'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
   const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800'>
         {/* Animated background elements */}
         <div className='absolute inset-0 overflow-hidden'>
            <motion.div
               className='absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl'
               animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
               transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
               className='absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl'
               animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
               transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
               }}
            />
         </div>

         {/* Content */}
         <div className='relative z-10 container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center'>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
               >
                  <motion.h2
                     className='text-purple-400 mb-4'
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.2 }}
                  >
                     Hello, I'm
                  </motion.h2>
                  <motion.h1
                     className='text-white mb-6 text-5xl font-bold'
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: 0.4, duration: 0.8 }}
                  >
                     Abdul Barcky Arimiyao
                  </motion.h1>
                  <motion.div
                     className='mb-8'
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 0.6 }}
                  >
                     <div className='inline-block'>
                        <motion.p
                           className='text-slate-300 text-xl md:text-2xl'
                           animate={{ opacity: [1, 0.7, 1] }}
                           transition={{
                              duration: 3,
                              repeat: Infinity,
                              ease: 'easeInOut',
                           }}
                        >
                           Full Stack Developer | UI/UX Enthusiast | Problem
                           Solver
                        </motion.p>
                     </div>
                  </motion.div>
                  <motion.p
                     className='text-slate-400 text-lg mb-10 max-w-2xl mx-auto'
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 0.8 }}
                  >
                     I craft beautiful, functional, and user-friendly web
                     experiences. Passionate about turning ideas into reality
                     through clean code and innovative design.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                     className='flex flex-wrap gap-4 justify-center mb-12'
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ delay: 1 }}
                  >
                     <Button
                        onClick={() => scrollToSection('projects')}
                        size='lg'
                        className='bg-purple-600 hover:bg-purple-700'
                     >
                        View My Work
                     </Button>
                     <Button
                        onClick={() => scrollToSection('contact')}
                        size='lg'
                        variant='outline'
                        className='border-slate-600 text-white hover:bg-slate-800'
                     >
                        Get In Touch
                     </Button>
                  </motion.div>

                  {/* Social Links */}
                  {/* Social Links */}
                  <motion.div
                     className='flex gap-4 justify-center'
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     transition={{ delay: 1.2 }}
                  >
                     <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Link
                           href='https://github.com/youngberry1'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center backdrop-blur-sm border border-slate-700/50'
                        >
                           <Github className='w-6 h-6' />
                        </Link>
                     </motion.div>
                     <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Link
                           href='https://www.linkedin.com/in/abdul-barcky/'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center backdrop-blur-sm border border-slate-700/50'
                        >
                           <Linkedin className='w-6 h-6' />
                        </Link>
                     </motion.div>
                     <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Link
                           href='mailto:circuitlabgh@gmail.com'
                           className='p-3 bg-slate-800/50 rounded-full text-slate-300 hover:text-white hover:bg-slate-700 transition-all flex items-center justify-center backdrop-blur-sm border border-slate-700/50'
                        >
                           <Mail className='w-6 h-6' />
                        </Link>
                     </motion.div>
                  </motion.div>
               </motion.div>
            </div>
         </div>

         {/* Scroll Indicator */}
         <motion.div
            className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
         >
            <ArrowDown className='w-6 h-6 text-slate-400' />
         </motion.div>
      </section>
   );
}
