'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '../components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'Revolutionary decentralized infrastructure.',
    body: 'ThreeFold enabled us to deploy our Web3 applications with true sovereignty and privacy. The peer-to-peer network is incredibly resilient.',
    author: 'Alex Chen, CTO at DecentraApps',
    rating: 5,
  },
  {
    title: 'Easy to start farming.',
    body: 'Setting up a ThreeFold node was surprisingly simple. Now I\'m earning rewards while contributing to the decentralized internet.',
    author: 'Maria Rodriguez, Independent Farmer',
    rating: 5,
  },
  {
    title: 'True internet ownership.',
    body: 'Finally, an internet infrastructure that belongs to the people, not corporations. ThreeFold is the future.',
    author: 'David Kumar, Web3 Developer',
    rating: 5,
  },
  {
    title: 'Sustainable and efficient.',
    body: 'The energy efficiency of ThreeFold nodes compared to traditional cloud infrastructure is remarkable. This is how computing should be done.',
    author: 'Sarah Thompson, Environmental Tech Advocate',
    rating: 5,
  },
  {
    title: 'Perfect for edge computing.',
    body: 'Deploying AI workloads at the edge has never been easier. ThreeFold\'s distributed architecture is exactly what we needed.',
    author: 'Dr. James Wilson, AI Research Lab',
    rating: 5,
  },
  {
    title: 'Community-driven excellence.',
    body: 'The ThreeFold community is incredibly supportive. From farmers to developers, everyone works together to build something amazing.',
    author: 'Lisa Park, Blockchain Consultant',
    rating: 5,
  },
  {
    title: 'Zero-OS is a game changer.',
    body: 'Running workloads directly on bare metal with Zero-OS eliminates so much complexity while increasing security and performance.',
    author: 'Miguel Santos, DevOps Engineer',
    rating: 5,
  },
  {
    title: 'Privacy by design.',
    body: 'In a world of surveillance capitalism, ThreeFold offers true privacy and data sovereignty. This is what the internet should have been.',
    author: 'Dr. Emma Johnson, Privacy Researcher',
    rating: 5,
  },
  {
    title: 'Scaling globally.',
    body: 'We\'ve deployed across 5 continents using ThreeFold. The global reach and local presence is unmatched.',
    author: 'Robert Kim, Global Infrastructure Lead',
    rating: 5,
  },
  {
    title: 'Building the future together.',
    body: 'ThreeFold isn\'t just technology - it\'s a movement. We\'re building the internet infrastructure that future generations deserve.',
    author: 'Priya Patel, Community Builder',
    rating: 5,
  },
]

function StarIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }: { rating: Review['rating'] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-cyan-500' : 'fill-gray-300',
          )}
        />
      ))}
    </div>
  )
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'figure'>, keyof Review> & Review) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-gray-900 p-6 opacity-0 shadow-md shadow-black/20',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-white">
        <StarRating rating={rating} />
        <p className="mt-4 lg:text-lg text-base/6 font-semibold">
          "{title}"
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-300">
        — {author}
      </figcaption>
    </figure>
  )
}

function splitArray<T>(array: Array<T>, numParts: number) {
  let result: Array<Array<T>> = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>
  className?: string
  reviewClassName?: (reviewIndex: number) => string
  msPerPixel?: number
}) {
  let columnRef = useRef<React.ElementRef<'div'>>(null)
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    if (!columnRef.current) {
      return
    }

    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef<React.ElementRef<'div'>>(null)
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  let column1 = columns[0]
  let column2 = columns[1]
  let column3 = splitArray(columns[2], 2)

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-196 max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  'md:hidden',
                reviewIndex >= column1.length && 'lg:hidden',
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? 'lg:hidden' : ''
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-950" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-950" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
      style={{ backgroundColor: '#121212' }}
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-white sm:text-center"
        >
          Builders and Farmers Love ThreeFold.
        </h2>
        <p className="mt-2 lg:text-lg text-base text-gray-300 sm:text-center">
          Join thousands of people building and powering the decentralized internet.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
