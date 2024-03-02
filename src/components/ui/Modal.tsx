import { ModalProps } from "@/lib/types";

interface props extends ModalProps {}

const Modal: React.FC<props> = ({ show, onClose, children }) => {
	if (!show) return null;
	return (
		<div
			className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
			onClick={onClose}
		>
			<div
				className="bg-white p-8 rounded-lg w-1/2"
				onClick={(e) => e.stopPropagation()}
			>
				{children}
			</div>
		</div>
	);
};

export default Modal;
