'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
   const [isScrolled, setIsScrolled] = useState(false);
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
         setIsMobileMenuOpen(false);
      }
   };

   const navLinks = [
      { name: 'About', id: 'about' },
      { name: 'Skills', id: 'skills' },
      { name: 'Projects', id: 'projects' },
      { name: 'Contact', id: 'contact' },
   ];

   return (
      <>
         <motion.nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
               isScrolled
                  ? 'bg-slate-950/95 backdrop-blur-md shadow-lg'
                  : 'bg-transparent'
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
         >
            <div className='container mx-auto px-4'>
               <div className='flex items-center justify-between h-16 md:h-20'>
                  {/* Logo */}
                  <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                  >
                     <Link
                        href='/'
                        onClick={() =>
                           window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                        className='text-white z-50'
                     >
                        <span className='bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-semibold'>
                           {'ABDUL - WEB-DEV'}
                        </span>
                     </Link>
                  </motion.div>

                  {/* Desktop Navigation */}
                  <div className='hidden md:flex items-center gap-8'>
                     {navLinks.map((link, index) => (
                        <motion.button
                           key={link.id}
                           onClick={() => scrollToSection(link.id)}
                           className='text-slate-300 hover:text-white transition-colors relative group'
                           initial={{ opacity: 0, y: -20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ delay: 0.1 * index }}
                        >
                           {link.name}
                           <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300' />
                        </motion.button>
                     ))}
                     <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                     >
                        <Button
                           onClick={() => scrollToSection('contact')}
                           size='sm'
                           className='bg-purple-600 hover:bg-purple-700'
                        >
                           Hire Me
                        </Button>
                     </motion.div>
                  </div>

                  {/* Mobile Menu Button */}
                  <motion.button
                     className='md:hidden text-white z-50'
                     onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                     whileTap={{ scale: 0.95 }}
                  >
                     {isMobileMenuOpen ? (
                        <X className='w-6 h-6' />
                     ) : (
                        <Menu className='w-6 h-6' />
                     )}
                  </motion.button>
               </div>
            </div>
         </motion.nav>

         {/* Mobile Menu */}
         <motion.div
            className='fixed inset-0 bg-slate-950 z-40 md:hidden'
            initial={{ x: '100%' }}
            animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
         >
            <div className='flex flex-col items-center justify-center h-full gap-8'>
               {navLinks.map((link, index) => (
                  <motion.button
                     key={link.id}
                     onClick={() => scrollToSection(link.id)}
                     className='text-white text-2xl'
                     initial={{ opacity: 0, x: 50 }}
                     animate={{
                        opacity: isMobileMenuOpen ? 1 : 0,
                        x: isMobileMenuOpen ? 0 : 50,
                     }}
                     transition={{ delay: isMobileMenuOpen ? 0.1 * index : 0 }}
                  >
                     {link.name}
                  </motion.button>
               ))}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                     opacity: isMobileMenuOpen ? 1 : 0,
                     x: isMobileMenuOpen ? 0 : 50,
                  }}
                  transition={{ delay: isMobileMenuOpen ? 0.4 : 0 }}
               >
                  <Button
                     onClick={() => scrollToSection('contact')}
                     size='lg'
                     className='bg-purple-600 hover:bg-purple-700'
                  >
                     Hire Me
                  </Button>
               </motion.div>
            </div>
         </motion.div>
      </>
   );
}
