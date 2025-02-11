import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Category({
	value,
	label,
	linked,
}: {
	value?: Sanity.BlogCategory
	label?: string
	linked?: boolean
}) {
	const props = {
		className: cn(
			"before:text-current/50 before:content-['#'] hover:*:underline",
			!linked && 'pointer-events-none',
		),
		children: <span>{label || value?.title}</span>,
	}

	return linked ? (
		<Link
			href={{
				pathname: '/blog',
				query: { category: value?.slug.current },
			}}
			{...props}
		/>
	) : (
		<div {...props} />
	)
}
