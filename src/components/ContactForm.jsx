'use client';

import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';
import { toast } from 'sonner';

export function Contact() {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: '-100px' });

   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
   });

   const handleSubmit = (e) => {
      e.preventDefault();
      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });
   };

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const contactInfo = [
      {
         icon: Mail,
         title: 'Email',
         value: 'circuitlabgh@gmail.com',
         href: 'mailto:circuitlabgh@gmail.com',
      },
      {
         icon: Phone,
         title: 'Phone',
         value: '+233 557 560 911',
         href: 'tel:+233557560911',
      },
      {
         icon: MapPin,
         title: 'Location',
         value: 'Asamankese, Accra, Ghana',
         href: '#',
      },
   ];

   return (
      <section id='contact' className='py-20 bg-slate-950' ref={ref}>
         <div className='container mx-auto px-4'>
            <motion.div
               initial={{ opacity: 0, y: 50 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.8 }}
               className='max-w-6xl mx-auto'
            >
               {/* Header */}
               <motion.h2
                  className='text-center mb-4 text-white'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.2 }}
               >
                  Get In Touch
               </motion.h2>

               <motion.div
                  className='w-20 h-1 bg-purple-600 mx-auto mb-6'
                  initial={{ width: 0 }}
                  animate={isInView ? { width: 80 } : {}}
                  transition={{ delay: 0.4, duration: 0.8 }}
               />

               <motion.p
                  className='text-center text-slate-300 mb-12 text-lg max-w-2xl mx-auto'
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
               >
                  Have a project in mind or want to collaborate? I'd love to
                  hear from you. Send me a message and I'll get back to you as
                  soon as possible.
               </motion.p>

               <div className='grid lg:grid-cols-3 gap-8'>
                  {/* Contact Info Cards */}
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     animate={isInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ delay: 0.6 }}
                     className='space-y-6'
                  >
                     {contactInfo.map((info, index) => (
                        <motion.div
                           key={info.title}
                           initial={{ opacity: 0, y: 20 }}
                           animate={isInView ? { opacity: 1, y: 0 } : {}}
                           transition={{ delay: 0.8 + index * 0.1 }}
                           whileHover={{ x: 5 }}
                        >
                           <Card className='p-6 hover:shadow-lg hover:shadow-purple-500/20 transition-all border-slate-700 bg-slate-800/50'>
                              <a
                                 href={info.href}
                                 className='flex items-start gap-4 group'
                              >
                                 <motion.div
                                    className='flex-shrink-0 w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all'
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                 >
                                    <info.icon className='w-6 h-6' />
                                 </motion.div>
                                 <div>
                                    <h4 className='mb-1 text-white'>
                                       {info.title}
                                    </h4>
                                    <p className='text-slate-300'>
                                       {info.value}
                                    </p>
                                 </div>
                              </a>
                           </Card>
                        </motion.div>
                     ))}
                  </motion.div>

                  {/* Contact Form */}
                  <motion.div
                     initial={{ opacity: 0, x: 50 }}
                     animate={isInView ? { opacity: 1, x: 0 } : {}}
                     transition={{ delay: 0.8 }}
                     className='lg:col-span-2'
                  >
                     <Card className='p-8 border-slate-700 bg-slate-800/50'>
                        <form onSubmit={handleSubmit} className='space-y-6'>
                           <div>
                              <label
                                 htmlFor='name'
                                 className='block mb-2 text-slate-200'
                              >
                                 Name
                              </label>
                              <Input
                                 id='name'
                                 name='name'
                                 type='text'
                                 value={formData.name}
                                 onChange={handleChange}
                                 placeholder='Your name'
                                 required
                                 className='border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-purple-500'
                              />
                           </div>

                           <div>
                              <label
                                 htmlFor='email'
                                 className='block mb-2 text-slate-200'
                              >
                                 Email
                              </label>
                              <Input
                                 id='email'
                                 name='email'
                                 type='email'
                                 value={formData.email}
                                 onChange={handleChange}
                                 placeholder='your.email@example.com'
                                 required
                                 className='border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-purple-500'
                              />
                           </div>

                           <div>
                              <label
                                 htmlFor='message'
                                 className='block mb-2 text-slate-200'
                              >
                                 Message
                              </label>
                              <Textarea
                                 id='message'
                                 name='message'
                                 value={formData.message}
                                 onChange={handleChange}
                                 placeholder='Tell me about your project...'
                                 rows={6}
                                 required
                                 className='border-slate-600 bg-slate-700/50 text-white placeholder:text-slate-400 focus:border-purple-500 resize-none'
                              />
                           </div>

                           <motion.div
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                           >
                              <Button
                                 type='submit'
                                 size='lg'
                                 className='w-full bg-purple-600 hover:bg-purple-700'
                              >
                                 <Send className='w-5 h-5 mr-2' />
                                 Send Message
                              </Button>
                           </motion.div>
                        </form>
                     </Card>
                  </motion.div>
               </div>
            </motion.div>
         </div>
      </section>
   );
}
