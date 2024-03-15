
export interface ModalProps {
	show: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

export interface CategoriesProps {
	id: string;
	name: string;
	description: string;
	imageUrl: string;
}

export interface ProductsHeaderProps {
	category: CategoriesProps;
	titleLine?: string;
}

export interface BadgesProps {
	id: string;
	name: string;
}

export interface TagsProps {
	id: string;
	name: string;
}

export interface ImagesProps {
	id: string;
	imageURLs: string;
}

export interface ShadesProps {
	id: string;
	name: string;
	description: string;
	code: string;
}

export interface ProductsProps {
	id: string;
	name: string;
	description: string;
	price: number;
	discount: number;
	stock: number;
	category: CategoriesProps;
	images: ImagesProps[];
	shades: ShadesProps[];
	tags: TagsProps[];
	badges: BadgesProps[];
}

export interface OrdersProps {
	id: string;
	userId: string;
	total: number;
}

export interface OrderProductProps {
	id: string;
	quantity: number;
	orderId: string;
	productId: string;
}

export interface UsersProps {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	address: string;
	role: string;
	userPreference?: UserPreferenceProps;
}

export interface UserPreferenceProps {
	id: string;
	userId: string;
	month: string;
	day: number;
	newsLetter: boolean;
	smsUpdates: boolean;
}