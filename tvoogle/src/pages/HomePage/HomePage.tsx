import PaginationButton from '../../components/PaginationButton/PaginationButton';
import PaginationIndicator from '../../components/PaginationIndicator/PaginationIndicator';
import ResultsGrid from '../../components/ResultsGrid/ResultsGrid';
import SearchForm from '../../components/SearchForm/SearchForm';
import './HomePage.scss';

const HomePage: React.FC = () => {
	return (
		<main className="homePage">
			<h1 className="homePage__header">Tvoogle</h1>
			<SearchForm />
			<ResultsGrid />
			<PaginationIndicator />
			<PaginationButton direction="left" />
			<PaginationButton direction="right" />
		</main>
	);
};

export default HomePage;
