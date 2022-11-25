import React, { Fragment, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	searchStart,
	selectSearchCurrentPage,
	selectSearchError,
	selectSearchStatus,
	setCurrentSearchPage,
} from '../../store/search/searchSlice';
import { ISearch } from '../../utils/types';
import Loader from '../Loader/Loader';
import './SearchForm.scss';

const SearchForm: React.FC = () => {
	const dispatch = useAppDispatch();
	const searchStatus = useAppSelector(selectSearchStatus);
	const searchError = useAppSelector(selectSearchError);
	const currentPage = useAppSelector(selectSearchCurrentPage);
	const [input, setInput] = useState('');
	const [lang, setLang] = useState('');

	useEffect(() => {
		if (searchStatus !== 'idle') {
			const searchObj = { query: input.trim(), lang: lang, page: currentPage } as ISearch;
			dispatch(searchStart(searchObj));
		}
	}, [currentPage]);

	const handleOnInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.currentTarget.value);
	};

	const handleOnLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setLang(e.currentTarget.value);
	};

	const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch(setCurrentSearchPage(1));
		const searchObj = { query: input.trim(), lang: lang, page: currentPage } as ISearch;
		dispatch(searchStart(searchObj));
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
					{searchStatus === 'loading' ? <Loader color="white" centerParent={true} size="sm" /> : 'Search'}
				</button>
			</form>
			<div className="messageContainer">
				{searchError !== '' && searchStatus !== 'loading' ? <p className="message">{searchError}</p> : ''}
			</div>
		</Fragment>
	);
};

export default SearchForm;
