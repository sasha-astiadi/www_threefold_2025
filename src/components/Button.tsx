import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold transition-colors',
  glass:
    'rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-white/15',
  outline:
    'inline-flex justify-center rounded-lg border py-[calc(--spacing(2)-1px)] px-[calc(--spacing(3)-1px)] text-sm transition-colors',
}

const variantStyles = {
  solid: {
    gradient:
      'btn-new-gradient',
    cyan: 'relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors',
    white:
      'bg-white text-black hover:bg-white/90 active:bg-white/90 active:text-gray-400',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-700 hover:border-gray-600 hover:text-white active:bg-gray-100 active:text-gray-600/80',
  },
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'glass'
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
) &
  (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, ...props }: ButtonProps) {
  props.variant ??= 'solid'

  if (props.variant !== 'glass') {
    props.color ??= 'gray'
  }

  let variantClass: string | undefined = undefined

  if (props.variant === 'outline' && props.color) {
    variantClass = variantStyles.outline[props.color]
  } else if (props.variant === 'solid' && props.color) {
    variantClass = variantStyles.solid[props.color]
  }

  className = clsx(
    baseStyles[props.variant],
    variantClass,
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
