import { Link, animateScroll as scroll } from 'react-scroll'

type BaseLink = {
    children: React.ReactNode
    className?: string
}

export const ScrollTopLink = ({
    children,
    className,
    ...rest
}: BaseLink & JSX.IntrinsicElements['button']) => {
    return (
        <button
            className={className}
            {...rest}
            onClick={() => scroll.scrollToTop()}
        >
            {children}
        </button>
    )
}

export const NavLink = ({
    className,
    activeClassName,
    children,
    to,
    duration = 800,
}: BaseLink & { activeClassName: string; to: string; duration?: number }) => {
    return (
        <Link
            activeClass={activeClassName}
            to={to}
            spy={true}
            smooth="easeInOutQuint"
            offset={-200}
            duration={duration}
            className={className}
        >
            {children}
        </Link>
    )
}
