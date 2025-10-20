'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { cn } from './utils';

// Root container
function Accordion(props) {
   return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

// Single item
function AccordionItem({ className, ...props }) {
   return (
      <AccordionPrimitive.Item
         data-slot='accordion-item'
         className={cn('border-b last:border-b-0', className)}
         {...props}
      />
   );
}

// Trigger (header button)
function AccordionTrigger({ className, children, ...props }) {
   return (
      <AccordionPrimitive.Header className='flex'>
         <AccordionPrimitive.Trigger
            data-slot='accordion-trigger'
            className={cn(
               'flex flex-1 items-start justify-between gap-4 py-4 text-left text-sm font-medium transition-all outline-none',
               'hover:underline rounded-md',
               'focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2',
               'disabled:pointer-events-none disabled:opacity-50',
               '[&[data-state=open]>svg]:rotate-180',
               className
            )}
            {...props}
         >
            {children}
            <ChevronDown className='text-slate-500 pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200' />
         </AccordionPrimitive.Trigger>
      </AccordionPrimitive.Header>
   );
}

// Content (body)
function AccordionContent({ className, children, ...props }) {
   return (
      <AccordionPrimitive.Content
         data-slot='accordion-content'
         className={cn(
            'overflow-hidden text-sm',
            'data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
            className
         )}
         {...props}
      >
         <div className='pt-0 pb-4'>{children}</div>
      </AccordionPrimitive.Content>
   );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
