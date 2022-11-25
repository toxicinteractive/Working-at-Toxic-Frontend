import ResultsGrid from '../../components/ResultsGrid/ResultsGrid';
import SearchForm from '../../components/SearchForm/SearchForm';
import './HomePage.scss';

const HomePage: React.FC = () => {
	return (
		<main className="homePage">
			<h1 className="homePage__header">Tvoogle</h1>
			<SearchForm />
			<ResultsGrid />
		</main>
	);
};

export default HomePage;
