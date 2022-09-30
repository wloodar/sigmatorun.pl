import clsx from 'clsx'

const Button = <K extends keyof JSX.IntrinsicElements>({
    type = 'primary',
    tag,
    className,
    href,
    children,
    ...rest
}: {
    type?: string
    tag: K
    className?: string
    children: React.ReactNode
    href?: string
} & JSX.IntrinsicElements[K]): JSX.Element => {
    const Tag = href ? 'a' : 'button'

    return (
        <Tag
            className={clsx(
                'py-3 px-6 inline-block text-sm cursor-pointer font-semibold',
                {
                    'bg-black text-white hover:bg-stone-800':
                        type === 'primary',
                    'border border-stone-100 hover:bg-stone-50 hover:border-stone-200':
                        type === 'outline',
                },
                className,
            )}
            href={href && href}
            {...rest}
        >
            {children}
        </Tag>
    )
}

export { Button }
