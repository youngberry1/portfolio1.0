'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
   const currentYear = new Date().getFullYear();

   return (
      <footer className='bg-slate-950 text-slate-300 py-12'>
         <div className='container mx-auto px-4'>
            <div className='max-w-6xl mx-auto'>
               <div className='flex flex-col md:flex-row justify-between items-center gap-6'>
                  {/* Brand */}
                  <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6 }}
                  >
                     <h3 className='text-white mb-2 text-xl font-semibold'>
                        Abdul Barcky Arimiyao
                     </h3>
                     <p className='text-slate-400'>Full Stack Developer</p>
                  </motion.div>

                  {/* Social Links */}
                  <motion.div
                     className='flex gap-4'
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.2 }}
                  >
                     <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Link
                           href='https://github.com/youngberry1'
                           target='_blank'
                           rel='noopener noreferrer'
                           className='p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-all flex items-center justify-center'
                        >
                           <Github className='w-5 h-5' />
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
                           className='p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-all flex items-center justify-center'
                        >
                           <Linkedin className='w-5 h-5' />
                        </Link>
                     </motion.div>

                     <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <Link
                           href='mailto:circuitlabgh@gmail.com'
                           className='p-3 bg-slate-800/50 rounded-full hover:bg-slate-700 transition-all flex items-center justify-center'
                        >
                           <Mail className='w-5 h-5' />
                        </Link>
                     </motion.div>
                  </motion.div>

                  {/* Quick Links */}
                  <motion.div
                     className='flex gap-6'
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.6, delay: 0.4 }}
                  >
                     {['About', 'Skills', 'Projects', 'Contact'].map((link) => (
                        <Link
                           key={link}
                           href={`#${link.toLowerCase()}`}
                           className='text-slate-400 hover:text-white transition-colors'
                        >
                           {link}
                        </Link>
                     ))}
                  </motion.div>
               </div>

               {/* Copyright */}
               <motion.div
                  className='mt-8 pt-8 border-t border-slate-800 text-center'
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
               >
                  <p className='text-slate-400 flex items-center justify-center gap-2'>
                     © {currentYear} Made with{' '}
                     <Heart className='w-4 h-4 text-red-500 fill-red-500' /> by{' '}
                     <span className='text-white font-medium'>
                        Abdul Barcky Arimiyao
                     </span>
                     . All rights reserved.
                  </p>
               </motion.div>
            </div>
         </div>
      </footer>
   );
}
