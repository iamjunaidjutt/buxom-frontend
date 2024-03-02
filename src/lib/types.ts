
export interface products {
	id: number;
	name: string;
	description: string;
	price: number;
	imageUrl: string;
	tags: string[];
	badges: string[];
	shades: { name: string; code: string; color: string }[];
}

export interface ModalProps {
	show: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

export interface CategoriesProps {
	id: number;
	name: string;
	description: string;
	imageUrl: string;
}

export interface ProductsHeaderProps {
	category: CategoriesProps;
	titleLine?: string;
}