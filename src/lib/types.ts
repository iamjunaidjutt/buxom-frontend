
export interface ModalProps {
	show: boolean;
	onClose: () => void;
	children?: React.ReactNode;
} 

export interface CategoriesProps {
	id?: string;
	name: string;
	titleLine?: string;
	description: string;
	imageURL: string;
}

export interface BadgesProps {
	id: string;
	name: string;
	color?: string;
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
	thumbnail: string;
	price: number;
	discount: number;
	stock: number;
	category: CategoriesProps;
	Image: ImagesProps[];
	shades: ShadesProps[];
	Tags: TagsProps[];
	Badges: BadgesProps[];
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
	password?: string;
	phone: string;
	address: string;
	role: string;
	UserPreference?: UserPreferenceProps;
}

export interface UserPreferenceProps {
	id: string;
	userId: string;
	month: string;
	day: number;
	newsLetter: boolean;
	smsUpdates: boolean;
}

export interface CartState {
	cartItems: CartItem[];
	cartTotalPrice: number;
	cartTotalQuantity: number;
}

export interface CartItem { // Define types for your item and payload
	id: string;
	// Define other properties of your cart item
	itemName: string;
	itemPrice: number;
	thumbnail: string;
	quantity: number;
	totalPrice: number;
}

export interface authProps {
	isLogin: boolean;
	user: UsersProps;
}