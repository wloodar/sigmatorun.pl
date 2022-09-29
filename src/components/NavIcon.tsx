import React from 'react'
import clsx from 'clsx'

const menuIconBaseClassname =
    'h-[2px] w-full bg-black transition ease transform duration-700'

const NavIcon = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false)

    return (
        <button className="p-3" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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

export { NavIcon }
