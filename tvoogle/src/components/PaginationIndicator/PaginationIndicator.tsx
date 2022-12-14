import { Fragment } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectSearchCurrentPage, selectSearchStatus, selectSearchTotalPages } from '../../store/search/searchSlice';
import './PaginationIndicator.scss';

const PaginationIndicator: React.FC = () => {
	const currentPage = useAppSelector(selectSearchCurrentPage);
	const totalPages = useAppSelector(selectSearchTotalPages);
	const searchStatus = useAppSelector(selectSearchStatus);

	if (searchStatus === 'load-failed') {
		return <Fragment></Fragment>;
	}
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
