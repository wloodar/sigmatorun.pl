import clsx from 'clsx'

const Button = ({
    type = 'primary',
    className,
    href,
    children,
    ...rest
}: {
    type?: string
    className?: string
    children: React.ReactNode
    href?: string
}) => {
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
        >
            {children}
        </Tag>
    )
}

export { Button }
