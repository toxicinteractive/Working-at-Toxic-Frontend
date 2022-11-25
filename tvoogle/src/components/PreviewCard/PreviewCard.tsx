import './PreviewCard.scss';

const PreviewCard: React.FC = () => {
	return (
		<div className="previewCard">
			<div className="previewCard__rating">9.1</div>
			<img
				className="previewCard__cover"
				src="https://image.tmdb.org/t/p/w185/AaHQrd5Gjwqj1ZfF7Pa3hwNAT2v.jpg"
				alt="ALT TEXT HERE"
			/>
			{/* <div className="previewCard__coverAlt">No cover</div> */}
			<p className="previewCard__title">TITLE</p>
		</div>
	);
};

export default PreviewCard;
