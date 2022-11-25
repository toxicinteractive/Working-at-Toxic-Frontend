import { Link } from 'react-router-dom';
import { PreviewModel } from '../../utils/types';
import './PreviewCard.scss';

type Props = {
	preview: PreviewModel;
};

const PreviewCard: React.FC<Props> = ({ preview }) => {
	return (
		<Link to={`/tv/${preview.id}`} className="previewCard">
			<div className="previewCard__rating">{preview.avgRating}</div>
			{preview.cover ? (
				<img
					className="previewCard__cover"
					src={`https://image.tmdb.org/t/p/w185${preview.cover}`}
					alt={preview.title}
				/>
			) : (
				<div className="previewCard__coverAlt">No cover</div>
			)}
			<p className="previewCard__title">{preview.title}</p>
		</Link>
	);
};

export default PreviewCard;
