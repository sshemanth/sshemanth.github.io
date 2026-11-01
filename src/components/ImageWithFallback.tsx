import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  caption?: string;
  containerClassName?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt = '',
  caption,
  className = '',
  containerClassName = '',
  ...props
}) => {
  const [error, setError] = useState(false);

  return (
    <div className={`relative w-full h-full ${containerClassName}`}>
      {error ? (
        <div className="w-full h-full flex flex-col items-center justify-center bg-[#14151B] text-[#D7E2EA] p-4 text-center rounded-inherit">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-2 text-[#D7E2EA]/40">
            <ImageOff className="w-5 h-5" />
          </div>
          <p className="text-xs font-medium text-[#D7E2EA]/80 max-w-[240px] leading-relaxed">
            {caption || alt || 'Image Preview'}
          </p>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          onError={() => setError(true)}
          className={className}
          loading="lazy"
          {...props}
        />
      )}
    </div>
  );
};

export default ImageWithFallback;
