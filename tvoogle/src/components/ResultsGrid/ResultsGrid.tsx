import { useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectSearchResults, selectSearchStatus } from '../../store/search/searchSlice';
import { PreviewModel } from '../../utils/types';
import PreviewCard from '../PreviewCard/PreviewCard';
import './ResultsGrid.scss';

const ResultsGrid: React.FC = () => {
	const results = useAppSelector(selectSearchResults) as PreviewModel[];
	const searchStatus = useAppSelector(selectSearchStatus);
	const [sortedResults, setSortedResults] = useState<PreviewModel[] | null>(null);

	useEffect(() => {
		if (results.length) {
			console.log(results);
			const sorted = [...results].sort((a, b) => {
				return new Date(b.firstAirDate) < new Date(a.firstAirDate) ? -1 : 1;
			});
			setSortedResults(sorted);
		}
	}, [results]);

	return (
		<div className={`resultsGrid ${searchStatus === 'load-success' ? 'show' : ''}`}>
			{sortedResults
				? sortedResults.map((result, i) => {
						return <PreviewCard preview={result} key={i} />;
				  })
				: ''}
		</div>
	);
};

export default ResultsGrid;
