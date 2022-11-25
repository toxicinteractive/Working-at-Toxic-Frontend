import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	decrementCurrentPage,
	incrementCurrentPage,
	selectSearchCurrentPage,
	selectSearchTotalPages,
} from '../../store/search/searchSlice';
import './PaginationButton.scss';

type Props = {
	direction: 'left' | 'right';
};

const PaginationButton: React.FC<Props> = ({ direction }) => {
	const dispatch = useAppDispatch();
	const currentPage = useAppSelector(selectSearchCurrentPage);
	const totalPages = useAppSelector(selectSearchTotalPages);

	const handleOnClick = () => {
		if (direction === 'left') dispatch(decrementCurrentPage());
		else if (direction === 'right') dispatch(incrementCurrentPage());
	};

	if (direction === 'left' && totalPages !== 0 && currentPage !== 1) {
		return (
			<button className="pagination__btn pagination__btn--left" type="button" onClick={handleOnClick}>
				&larr;
			</button>
		);
	}
	if (direction === 'right' && totalPages !== 0 && currentPage !== totalPages) {
		return (
			<button className="pagination__btn pagination__btn--right" type="button" onClick={handleOnClick}>
				&rarr;
			</button>
		);
	}
	return <></>;
};
export default PaginationButton;
