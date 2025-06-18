'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import { useInView } from 'framer-motion'

import { Container } from '@/components/Container'

interface Review {
  title: string
  body: string
  author: string
  rating: 1 | 2 | 3 | 4 | 5
}

const reviews: Array<Review> = [
  {
    title: 'A true game-changer for nonprofits.',
    body: 'EngageOS allowed us to centralize our volunteer hub, training, and crowdfunding into one platform. We’ve seen a 3x jump in community engagement.',
    author: 'Sarah D., Program Director at WomenRise',
    rating: 5,
  },
  {
    title: 'No tech team needed.',
    body: 'Launching our own branded platform felt intimidating—until EngageOS. It’s intuitive, scalable, and beautifully designed.',
    author: 'Ahmed K., Director at The Green Schools Alliance',
    rating: 5,
  },
  {
    title: 'Empowered our youth programs.',
    body: 'Thanks to EngageOS, we built a digital home for our learning initiatives with AI-powered content in three languages.',
    author: 'Maria T., Learning Lead at Global Youth Voices',
    rating: 5,
  },
  {
    title: 'Secure and sovereign.',
    body: 'As a human rights coalition, data privacy is critical. EngageOS is the only platform that met our ethical tech standards.',
    author: 'Lukas M., CTO at Liberty Commons',
    rating: 5,
  },
  {
    title: 'Decentralized. Local-first. Exactly what we needed.',
    body: 'EngageOS helped us launch a regional platform for community-led health training across East Africa—with full offline access.',
    author: 'Grace N., Digital Programs at Umoja Health Network',
    rating: 5,
  },
  {
    title: 'The best decision we made this year.',
    body: 'Instead of duct-taping tools together, EngageOS gave us one powerful stack to engage, fundraise, and scale impact.',
    author: 'Jonas F., COO at Youth in Action Europe',
    rating: 5,
  },
  {
    title: 'Highly recommend for grassroots orgs.',
    body: 'Even with limited staff, we launched a branded hub in 10 days. It’s helping our community organize and train in ways we never imagined.',
    author: 'Tania B., Founder of SpeakUp Brazil',
    rating: 5,
  },
  {
    title: 'Our community feels seen and heard.',
    body: 'With EngageOS, we integrated storytelling, campaigns, and microdonations into a single, smooth experience.',
    author: 'Nicolas R., Communications Lead at OurStories Foundation',
    rating: 5,
  },
  {
    title: 'EngageOS scales with us.',
    body: 'We piloted in 2 cities and now run campaigns across 7 countries—all on the same platform. It grows with our ambition.',
    author: 'Delphine A., Global Lead at Future Farmers',
    rating: 5,
  },
  {
    title: 'This platform *is* our movement.',
    body: 'Before EngageOS, our digital presence was scattered. Now we have a true home where our supporters connect and take action.',
    author: 'Ravi P., Strategy Director at Clean Energy for All',
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
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className,
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 lg:text-lg text-base/6 font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
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
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Everyone is changing their life with EngageOS.
        </h2>
        <p className="mt-2 lg:text-lg text-base text-gray-600 sm:text-center">
          Thousands of people have doubled their net-worth in the last 30 days.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
