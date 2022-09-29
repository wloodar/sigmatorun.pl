import React from 'react'
import clsx from 'clsx'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useAtom } from 'jotai'
import { isMenuOpenAtom } from '../../utils/atoms'

const menuIconBaseClassname =
    'h-[2px] w-full bg-black transition ease transform duration-700'

const NavIcon = () => {
    const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom)

    React.useEffect(() => {
        console.log(isMenuOpen)
    }, [isMenuOpen])

    return (
        <button
            aria-label="Ikonka nawigacji"
            className="p-3"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
            <div className="w-[30px] ">
                <div
                    className={clsx('mb-[6px]', menuIconBaseClassname, {
                        'translate-y-[8px] rotate-45': isMenuOpen,
                        '': !isMenuOpen,
                    })}
                ></div>
                <div
                    className={clsx(
                        'mt-[3px] mb-[3px]',
                        menuIconBaseClassname,
                        {
                            'opacity-0': isMenuOpen,
                        },
                    )}
                ></div>
                <div
                    className={clsx('mt-[6px]', menuIconBaseClassname, {
                        '-translate-y-[8px] -rotate-45': isMenuOpen,
                    })}
                ></div>
            </div>
        </button>
    )
}

type BaseLink = {
    children: React.ReactNode
    className?: string
}

const ScrollTopLink = ({
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

const NavLink = ({
    className,
    activeClassName,
    children,
    to,
    duration = 800,
    ...rest
}: BaseLink & { activeClassName?: string; to: string; duration?: number }) => {
    return (
        <Link
            activeClass={activeClassName}
            href={`#${to}`}
            to={to}
            spy={true}
            smooth="easeInOutQuint"
            offset={-200}
            duration={duration}
            className={className}
            {...rest}
        >
            {children}
        </Link>
    )
}

const navList = [
    {
        title: 'Początek',
        href: 'home',
    },
    {
        title: 'Oferta',
        href: 'oferta',
    },
    {
        title: 'Marki',
        href: 'marki',
    },
    {
        title: 'Sklep',
        href: 'sklep',
    },
]

const NavItems = ({
    className,
    linkClassName,
    activeClassName,
    ...rest
}: {
    className?: string
    linkClassName?: string
    activeClassName?: string
} & JSX.IntrinsicElements['a']) => {
    return (
        <>
            {navList.map(navItem => (
                <li className={clsx(className)}>
                    <NavLink
                        to={navItem.href}
                        className={clsx(linkClassName)}
                        activeClassName={clsx(activeClassName)}
                        {...rest}
                    >
                        {navItem.title}
                    </NavLink>
                </li>
            ))}
        </>
    )
}

const responsiveModalClassname =
    'ease-[cubic-bezier(0.46, 0.5, 0, 0.94)] fixed top-0 bottom-0 left-0 right-0 z-10 bg-white/95 backdrop-blur-lg transition-transform duration-1000 lg:relative lg:top-auto lg:bottom-auto lg:left-auto lg:right-auto lg:hidden'

const NavResponsive = () => {
    const [isMenuOpen, setIsMenuOpen] = useAtom(isMenuOpenAtom)

    return (
        <div
            className={clsx(responsiveModalClassname, {
                'translate-x-full': !isMenuOpen,
            })}
        >
            <div
                className={clsx(
                    'container-padding ease-[cubic-bezier(0.46, 0.5, 0, 0.94)]` h-full translate-x-1/2 opacity-0 transition-all duration-1000',
                    {
                        '!translate-x-[10%] !opacity-100': isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            >
                <div className="relative flex h-full items-center">
                    <div className="pb-[100px]">
                        <div className="text-[.85rem] font-normal text-stone-500">
                            Menu
                        </div>
                        <ul>
                            <NavItems
                                className="my-5 text-black lg:my-2"
                                linkClassName="base border-hover text-2xl font-medium text-black transition-[color] duration-300 ease-in-out before:bg-neutral-800 lg:text-[.95rem] lg:font-normal"
                                activeClassName="before:w-full"
                                onClick={() => setIsMenuOpen(false)}
                            />
                        </ul>
                        <div className="mt-10 mb-2 text-[.85rem] font-normal text-stone-500">
                            Skontakuj się z nami
                        </div>
                        <div>
                            <a
                                href="mailto:sigmatorun@gmail.com"
                                className="border-b border-black pb-2 font-medium"
                            >
                                sigmatorun@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="absolute left-0 bottom-8">
                        <div className="text-[.65rem] font-medium text-neutral-500">
                            Design & Realization{' '}
                        </div>
                        <a
                            href="https://wlodev.com"
                            title="wlodev.com portfolio"
                            target="_blank"
                            rel="noreferrer"
                            className="text-base font-semibold hover:text-neutral-700"
                        >
                            wlodev.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { NavIcon, NavLink, ScrollTopLink, NavResponsive, NavItems }
