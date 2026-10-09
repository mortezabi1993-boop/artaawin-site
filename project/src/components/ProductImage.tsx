import { useState } from 'react';

const gradients: Record<string, { from: string; to: string; icon: string }> = {
  aluminum:          { from: '#1e3a8a', to: '#3b82f6', icon: '🏢' },
  'upvc-double':     { from: '#064e3b', to: '#10b981', icon: '🪟' },
  'aluminum-double': { from: '#0c4a6e', to: '#0ea5e9', icon: '🏗️' },
  'colored-glass':   { from: '#4a1d96', to: '#a855f7', icon: '🎨' },
  'aluminum-custom': { from: '#155e75', to: '#0891b2', icon: '✨' },
  'pleated-screen':  { from: '#374151', to: '#9ca3af', icon: '🔧' },
  smart:             { from: '#0f172a', to: '#6d28d9', icon: '💡' },
  'composite-facade':{ from: '#1f2937', to: '#6b7280', icon: '🏛️' },
  security:          { from: '#1e1b4b', to: '#4338ca', icon: '🔒' },
  'curtain-wall':    { from: '#0369a1', to: '#38bdf8', icon: '🏬' },
  'glass-types':     { from: '#0f766e', to: '#2dd4bf', icon: '🪞' },
  'security-glass':  { from: '#334155', to: '#64748b', icon: '🛡️' },
  mirror:            { from: '#475569', to: '#94a3b8', icon: '🪞' },
  'thermal-break':   { from: '#9a3412', to: '#f97316', icon: '🌡️' },
};

interface Props {
  src: string;
  alt: string;
  categorySlug?: string;
  className?: string;
}

export default function ProductImage({ src, alt, categorySlug = 'aluminum', className = '' }: Props) {
  const [failed, setFailed] = useState(false);
  const g = gradients[categorySlug] ?? gradients['aluminum'];

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center ${className}`}
        style={{ background: `linear-gradient(135deg, ${g.from}, ${g.to})` }}
      >
        <span className="text-5xl mb-3 drop-shadow-lg">{g.icon}</span>
        <p className="text-sm font-semibold text-white/90 text-center px-4 leading-5 line-clamp-2 drop-shadow">
          {alt}
        </p>
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
