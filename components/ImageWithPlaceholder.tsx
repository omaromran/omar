'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageWithPlaceholderProps {
  src: string;
  alt: string;
  /** Shown in placeholder when image fails or is missing */
  placeholderLabel?: string;
  /** Optional icon (e.g. company initial) */
  placeholderIcon?: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function ImageWithPlaceholder({
  src,
  alt,
  placeholderLabel = 'Image',
  placeholderIcon,
  width,
  height,
  fill = false,
  className = '',
  priority,
  sizes,
}: ImageWithPlaceholderProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-teal-tint to-teal/10 text-muted2 ${className}`}
        style={!fill && width && height ? { width, height } : undefined}
      >
        {placeholderIcon ? (
          <span className="text-3xl font-heading font-bold text-teal">{placeholderIcon}</span>
        ) : (
          <svg className="w-12 h-12 text-teal/60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
        <span className="mt-2 text-sm font-medium text-muted2">{placeholderLabel}</span>
      </div>
    );
  }

  const imageClass = fill ? `object-cover ${className}` : className;

  if (fill) {
    return (
      <div className={`relative overflow-hidden size-full ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          onError={() => setError(true)}
          priority={priority}
          sizes={sizes ?? '(max-width: 768px) 100vw, 50vw'}
        />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width ?? 400}
      height={height ?? 300}
      className={imageClass}
      onError={() => setError(true)}
      priority={priority}
      sizes={sizes}
    />
  );
}
