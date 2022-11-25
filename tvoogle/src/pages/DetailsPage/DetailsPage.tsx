import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import {
	loadStart,
	selectDetailsError,
	selectDetailsResult,
	selectDetailsStatus,
} from '../../store/details/detailsSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import './DetailsPage.scss';

const DetailsPage: React.FC = () => {
	const { id } = useParams();
	const dispatch = useAppDispatch();
	const detailsStatus = useAppSelector(selectDetailsStatus);
	const detailsError = useAppSelector(selectDetailsError);
	const detailsResult = useAppSelector(selectDetailsResult);
	const navigate = useNavigate();

	useEffect(() => {
		if (id) {
			dispatch(loadStart(id));
		}
	}, [id]);

	const handleGoBack = () => {
		navigate('/');
	};

	const handletryAgain = () => {
		if (id) {
			dispatch(loadStart(id));
		}
	};

	let content;
	if (detailsStatus === 'loading') {
		content = <Loader color="black" centerParent={true} />;
	}
	if (detailsError && detailsStatus !== 'loading') {
		content = (
			<div className="error">
				<p className="error__text">{detailsError}</p>
				<div className="error__btns">
					<button className="error__btn" type="button" onClick={handleGoBack}>
						Go Back
					</button>
					<button className="error__btn" type="button" onClick={handletryAgain}>
						Try Again
					</button>
				</div>
			</div>
		);
	}
	if (detailsResult && detailsStatus !== 'loading') {
		content = (
			<div className="detailsCard">
				<div className="detailsCard__coverContainer">
					{detailsResult.poster_path ? (
						<img
							className="detail__cover"
							src={`https://image.tmdb.org/t/p/w500${detailsResult.poster_path}`}
							alt="Tv Show Cover"
						/>
					) : (
						<div className="detail__coverAlt">
							<span>No Cover</span>
						</div>
					)}
				</div>
				<div className="detailsCard__infoContainer">
					<div className="detailsCard__infoHeader">
						<div className="detail__genres">
							{detailsResult.genres.map((genre, i) => {
								return <span className="detail__tag">{genre.name}</span>;
							})}
						</div>
						<a href={detailsResult.homepage} className="detail__title">
							{detailsResult.name}
						</a>
					</div>
					<div className="detail__overview">{detailsResult.overview}</div>
					<div className="detail__box">
						<div className="detail__box--title">First air time</div>
						<div className="detail__box--stat">
							{detailsResult.first_air_date ? detailsResult.first_air_date : '-'}
						</div>
					</div>

					<div className="detail__box">
						<div className="detail__box--title">Last air time</div>
						<div className="detail__box--stat">
							{detailsResult.last_air_date ? detailsResult.last_air_date : '-'}
						</div>
					</div>
					<div className="detail__box">
						<div className="detail__box--title">Seasons</div>
						<div className="detail__box--stat">
							{detailsResult.number_of_seasons ? detailsResult.number_of_seasons : '-'}
						</div>
					</div>
					<div className="detail__box">
						<div className="detail__box--title">Episodes</div>
						<div className="detail__box--stat">
							{detailsResult.number_of_episodes ? detailsResult.number_of_episodes : '-'}
						</div>
					</div>
					<div className="detail__box">
						<div className="detail__box--title">Avg. Rating</div>
						<div className="detail__box--stat">
							{detailsResult.vote_average ? detailsResult.vote_average : '-'}
						</div>
					</div>
				</div>
			</div>
		);
	}
	return <main className="detailsPage">{content}</main>;
};

export default DetailsPage;
