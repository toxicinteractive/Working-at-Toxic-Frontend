import { useAppSelector } from '../../store/hooks';
import { selectSearchCurrentPage, selectSearchTotalPages } from '../../store/search/searchSlice';
import './PaginationIndicator.scss';

const PaginationIndicator: React.FC = () => {
	const currentPage = useAppSelector(selectSearchCurrentPage);
	const totalPages = useAppSelector(selectSearchTotalPages);

	if (totalPages !== 0) {
		return (
			<div className="pagination__currentPage">
				{currentPage}&nbsp;/&nbsp;{totalPages}
			</div>
		);
	} else {
		return <></>;
	}
};

export default PaginationIndicator;
