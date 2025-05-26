import { useEffect } from "react";

export const Toast = ({
	message,
	show,
	onClose,
}: { message: string; show: boolean; onClose: () => void }) => {
	useEffect(() => {
		if (show) {
			const timer = setTimeout(onClose, 3000);
			return () => clearTimeout(timer);
		}
	}, [show, onClose]);

	if (!show) return null;

	return (
		<div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 ease-in-out">
			{message}
		</div>
	);
};
