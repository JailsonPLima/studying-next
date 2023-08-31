const Modal = ({ children, modalOpen, setModalOpen }) => {
	return (
		<>
			{modalOpen && (
				<div className="fixed inset-0 flex h-full items-center justify-center bg-black/50">
					<div className="flex w-1/2 flex-col items-end bg-slate-300 p-5">
						<button
							onClick={() => setModalOpen(false)}
							className="mb-3 cursor-pointer text-2xl"
						>
							&times;
						</button>
						{children}
					</div>
				</div>
			)}
		</>
	);
};

export default Modal;
