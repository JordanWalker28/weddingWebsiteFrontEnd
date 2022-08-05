import React from 'react';
import Header from '../components/GenericItems/PageHeader'
import IndexText from '../components/GenericItems/IndexText'
import helpers from '../components/Functions/LanguageFunctions'
import MainPolaroidsTwo from '../components/MainPolaroidsTwo'

const Gifts = () => {
	const { block } = helpers.newFunction("gifts");
	const pageLang = (JSON.parse(localStorage.getItem('isBool')));

	return (

		<div className="content">
			<Header parentToChild = {pageLang === true ? block.titleEnglish : block.titleGerman}/>
			<div className="gifts-text">
				<IndexText introText = {pageLang === true ? block.introTextEnglish : block.introTextGerman}/>
			</div>
			<MainPolaroidsTwo/>
		</div>
	);
};
  
export default Gifts;