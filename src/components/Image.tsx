import React from 'react'

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  unoptimized?: boolean
  priority?: boolean
  width?: number
  height?: number
}

export default function Image({ 
  src, 
  alt, 
  unoptimized, 
  priority, 
  width, 
  height, 
  className,
  ...props 
}: ImageProps) {
  return (
    <img 
      src={src} 
      alt={alt} 
      className={className}
      {...(width && { width })}
      {...(height && { height })}
      {...props}
    />
  )
}