import PaginationButton from '../../components/PaginationButton/PaginationButton';
import PaginationIndicator from '../../components/PaginationIndicator/PaginationIndicator';
import ResultsGrid from '../../components/ResultsGrid/ResultsGrid';
import SearchForm from '../../components/SearchForm/SearchForm';
import { useAppSelector } from '../../store/hooks';
import { selectSearchResults } from '../../store/search/searchSlice';
import './HomePage.scss';

const HomePage: React.FC = () => {
	const searchResults = useAppSelector(selectSearchResults);

	return (
		<main className="homePage">
			<h1 className={`homePage__header ${searchResults.length ? 'moveUp' : ''}`}>Tvoogle</h1>
			<SearchForm />
			<ResultsGrid />
			<PaginationIndicator />
			<PaginationButton direction="left" />
			<PaginationButton direction="right" />
		</main>
	);
};

export default HomePage;
