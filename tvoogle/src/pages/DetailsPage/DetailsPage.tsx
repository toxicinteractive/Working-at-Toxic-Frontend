import { useParams } from 'react-router-dom';
import './DetailsPage.scss';

const DetailsPage: React.FC = () => {
	const { id } = useParams();

	return (
		<main className="detailsPage">
			<div className="detailsCard">
				<div className="detailsCard__coverContainer">
					<img
						className="detail__cover"
						src="https://image.tmdb.org/t/p/w500/AaHQrd5Gjwqj1ZfF7Pa3hwNAT2v.jpg"
						alt="Tv Show Cover"
					/>
					{/* <div className="detail__coverAlt">
					<span>No Cover</span>
				</div> */}
				</div>
				<div className="detailsCard__infoContainer">
					<div className="detailsCard__infoHeader">
						<div className="detail__genres">
							<span className="detail__tag">GENRE 1</span>
							<span className="detail__tag">GENRE 2</span>
							<span className="detail__tag">GENRE 3</span>
						</div>
						<h2 className="detail__title">TITLE</h2>
					</div>
					<div className="detail__overview">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex iusto laudantium, quisquam ipsum
						quibusdam accusantium expedita similique eaque doloribus quasi quod nulla repellendus itaque
						dignissimos laboriosam molestias tempora obcaecati. Accusamus.
					</div>
					<a href="/" className="detail__link">
						Home Page
					</a>
					<div className="detail__box detail__box--1">
						<div className="detail__box--title">First air time</div>
						<div className="detail__box--stat">2013-05-17</div>
					</div>

					<div className="detail__box detail__box--1">
						<div className="detail__box--title">First air time</div>
						<div className="detail__box--stat">2013-05-17</div>
					</div>
					<div className="detail__box detail__box--1">
						<div className="detail__box--title">First air time</div>
						<div className="detail__box--stat">2013-05-17</div>
					</div>
					<div className="detail__box detail__box--1">
						<div className="detail__box--title">First air time</div>
						<div className="detail__box--stat">2013-05-17</div>
					</div>
					<div className="detail__box detail__box--1">
						<div className="detail__box--title">First air time</div>
						<div className="detail__box--stat">2013-05-17</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default DetailsPage;
