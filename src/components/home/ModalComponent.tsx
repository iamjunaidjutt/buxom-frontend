import { closeModal } from "@/features/modalSlice";
import { useDispatch, useSelector } from "react-redux";

interface ModalProps {
	id: number;
}

const ModalComponent: React.FC<ModalProps> = ({ id }) => {
	const modal = useSelector((state) =>
		state.modal.modals.find((modal) => modal.id === id)
	);
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(closeModal(id));
	};

	return (
		<>
			{modal.isOpen && (
				<div className="modal">
					<div className="modal-content">
						<span className="close" onClick={handleClose}>
							&times;
						</span>
						<p>This is the modal content for Modal {id}.</p>
					</div>
				</div>
			)}
		</>
	);
};

export default ModalComponent;
