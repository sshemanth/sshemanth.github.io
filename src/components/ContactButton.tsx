import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  label = 'Contact Me',
}) => {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className={`rounded-full text-white font-semibold uppercase tracking-wider cursor-pointer whitespace-nowrap shrink-0 select-none px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base transition-all duration-200 inline-flex items-center justify-center shadow-lg ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0 4px 16px rgba(182, 0, 168, 0.45)',
        border: '2px solid rgba(255, 255, 255, 0.9)',
      }}
    >
      {label}
    </motion.button>
  );
};

export default ContactButton;
