import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharProps> = ({ char, progress, range }) => {
  // Starts at a soft readable 0.4 opacity and smoothly illuminates to 1 (pure bright white)
  const opacity = useTransform(progress, range, [0.45, 1]);
  const color = useTransform(progress, range, ['#c4c4cc', '#FFFFFF']);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none" aria-hidden="true">
        {char}
      </span>
      <motion.span
        style={{ opacity, color }}
        className="absolute left-0 top-0 transition-colors"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.95', 'start 0.35'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let globalCharIndex = 0;

  return (
    <p
      ref={containerRef}
      className={`text-white font-normal sm:font-medium text-center leading-relaxed max-w-3xl mx-auto text-[clamp(1.05rem,2.2vw,1.5rem)] ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const renderedWord = (
          <span key={`word-${wordIndex}`} className="inline-block whitespace-nowrap">
            {wordChars.map((char, charIndex) => {
              const start = globalCharIndex / totalChars;
              const end = Math.min(1, start + 1.5 / totalChars);
              globalCharIndex++;

              return (
                <Character
                  key={`char-${wordIndex}-${charIndex}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );

        if (wordIndex < words.length - 1) {
          globalCharIndex++;
          return (
            <React.Fragment key={`group-${wordIndex}`}>
              {renderedWord}
              <span className="inline-block">&nbsp;</span>
            </React.Fragment>
          );
        }

        return renderedWord;
      })}
    </p>
  );
};

export default AnimatedText;
