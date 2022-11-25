import './PaginationButton.scss';

type Props = {
	direction: 'left' | 'right';
};

const PaginationButton: React.FC<Props> = ({ direction }) => {
	const handleOnClick = () => {
		// Add action for left
		// Add action for right
	};

	return (
		<button className={`pagination__btn pagination__btn--${direction}`} type="button" onClick={handleOnClick}>
			{direction === 'left' ? <>&larr;</> : <>&rarr;</>}
		</button>
	);
};
export default PaginationButton;
