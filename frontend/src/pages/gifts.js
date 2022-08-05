import React from 'react';
import Header from '../components/GenericItems/PageHeader'
import IndexText from '../components/GenericItems/IndexText'
import helpers from '../components/Functions/LanguageFunctions'
import MainPolaroidsTwo from '../components/MainPolaroidsTwo'

const Gifts = (language) => {
	const { block } = helpers.newFunction("gifts");
	const pageLang = language.language[0];
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