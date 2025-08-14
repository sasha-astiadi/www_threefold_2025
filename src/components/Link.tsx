import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  'aria-label'?: string
}

export default function Link({ href, children, ...props }: LinkProps) {
  // Handle external links
  if (href.startsWith('http') || href.startsWith('mailto:')) {
    return <a href={href} {...props}>{children}</a>
  }
  
  // Internal links
  return <RouterLink to={href} {...props}>{children}</RouterLink>
}