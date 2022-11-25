import './Loader.scss';

type Props = {
	color?: 'white' | 'black';
	centerParent: boolean;
	size?: 'sm' | 'md' | 'lg';
};

const Loader: React.FC<Props> = ({ color, centerParent, size }) => {
	return (
		<div className={`loaderContainer ${centerParent ? 'center' : ''}`}>
			<div className={`loader ${size} loader--${color}`}></div>
		</div>
	);
};

export default Loader;
