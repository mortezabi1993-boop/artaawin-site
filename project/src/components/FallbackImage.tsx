import { useState } from 'react';

interface Props {
  src: string;
  alt: string;
  className?: string;
  fallbackFrom?: string;
  fallbackTo?: string;
}

export default function FallbackImage({
  src,
  alt,
  className = '',
  fallbackFrom = '#0b875d',
  fallbackTo = '#3de9a5',
}: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center ${className}`}
        style={{ background: `linear-gradient(135deg, ${fallbackFrom}, ${fallbackTo})` }}
      >
        <p className="text-sm font-medium text-white/80 text-center px-6 leading-5">{alt}</p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
