import React from 'react';
import { motion } from 'framer-motion';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className = '', id }: SectionProps) => {
  return (
    <section id={id} className={`py-24 relative overflow-hidden ${className}`}>
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </Container>
    </section>
  );
};