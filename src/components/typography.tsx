import type React from 'react'
import clsx from 'clsx'

type HeadingProps = {
    type?: 'primary' | 'secondary'
    className?: string
    tag?: React.ElementType
} & (
    | { children: React.ReactNode }
    | {
          dangerouslySetInnerHTML: {
              __html: string
          }
      }
)

const fontSizes = {
    h1: 'leading-none text-3xl sm:text-5xl font-bold',
    h2: 'leading-none text-2xl sm:text-4xl font-semibold',
    h3: 'leading-none text-xl sm:text-3xl font-semibold',
    h4: 'leading-none text-lg sm:text-2xl font-medium',
    h5: 'leading-none text-lg sm:text-xl font-medium',
}

const headingColors = {
    primary: 'text-black',
    secondary: 'text-gray-500',
}

function Heading({
    type = 'primary',
    size,
    tag,
    className,
    ...rest
}: HeadingProps & { size: keyof typeof fontSizes }) {
    const Tag = tag ?? size
    return (
        <Tag
            className={clsx(fontSizes[size], headingColors[type], className)}
            {...rest}
        />
    )
}

function H1(props: HeadingProps) {
    return <Heading {...props} size="h1" />
}

function H2(props: HeadingProps) {
    return <Heading {...props} size="h2" />
}

function H3(props: HeadingProps) {
    return <Heading {...props} size="h3" />
}

function H4(props: HeadingProps) {
    return <Heading {...props} size="h4" />
}

function H5(props: HeadingProps) {
    return <Heading {...props} size="h5" />
}

type ParagraphProps = {
    size?: string
    className?: string
    colorClassName?: string
} & (
    | { children: React.ReactNode }
    | { dangerouslySetInnerHTML: { __html: string } }
)

function Paragraph({
    size = 'text-base',
    className,
    colorClassName = 'text-secondary',
    ...rest
}: ParagraphProps) {
    return <p className={clsx(size, colorClassName, className)} {...rest}></p>
}

export { H1, H2, H3, H4, H5, Paragraph }
