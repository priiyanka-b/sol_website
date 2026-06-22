const variants = {
  primary:
    'bg-dark-green text-white font-semibold hover:bg-primary-green shadow-sm hover:shadow transition-all duration-300 border border-transparent',
  secondary:
    'bg-light-green-bg text-dark-green font-semibold hover:bg-[#EDF2ED] border border-[#E2E8F0] shadow-sm',
  ghost: 'text-secondary-text hover:text-charcoal-text hover:bg-light-green-bg font-medium transition-colors',
  outline:
    'border border-dark-green/30 text-dark-green font-semibold hover:bg-light-green-bg hover:border-dark-green/60 shadow-sm',
}

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
