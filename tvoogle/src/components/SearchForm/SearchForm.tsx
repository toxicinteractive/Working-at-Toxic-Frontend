import React, { Fragment, useState } from 'react';
import './SearchForm.scss';

const SearchForm: React.FC = () => {
	const [input, setInput] = useState('');
	const [lang, setLang] = useState('');

	const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.currentTarget.value);
	};

	const handleOnLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLang(e.currentTarget.value);
	};

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('input: ', input.trim());
		console.log('lang: ', lang);
	};

	return (
		<Fragment>
			<form className="searchForm" onSubmit={handleOnSubmit}>
				<input
					className="searchForm__input"
					type="text"
					onChange={handleOnInputChange}
					placeholder="Search for TV shows"
					value={input}
				/>
				<span className="separator"></span>
				<select
					className="searchForm__select"
					name="language"
					title="language"
					defaultValue={lang}
					onChange={handleOnLanguageChange}
				>
					<option value="">--Language--</option>
					<option value="en">English</option>
					<option value="sv">Swedish</option>
					<option value="da">Danish</option>
					<option value="fi">Finnish</option>
					<option value="de">German</option>
					<option value="es">Spanish</option>
					<option value="fr">French</option>
				</select>
				<span className="separator"></span>
				<button className="searchForm__btn" type="submit">
					'Search'
				</button>
			</form>
			<div className="messageContainer">
				<p className="message">ERROR HERE</p>;
			</div>
		</Fragment>
	);
};

export default SearchForm;
