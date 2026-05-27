export interface NavigationItem {
	title: string
	href: string
	external?: boolean
	children?: NavigationItem[]
	/** optional id used for active link matching */
	id?: string
}
