import React from 'react';
import Header from '../components/GenericItems/PageHeader'
import MusicForm from '../components/MusicForm'
import helpers from '../components/Functions/LanguageFunctions'
import IndexText from '../components/GenericItems/IndexText'

const Music = (language) => {
	const { block } = helpers.newFunction("music");
	const pageLang = language.language[0];
  
  return (
	  <div className="content">
        <Header parentToChild = {pageLang ? block.titleEnglish : block.titleGerman}/>
		    <IndexText introText = {pageLang ? block.introTextEnglish : block.introTextGerman}/>
        <MusicForm text = {pageLang ? block.formTextEnglish : block.formTextGerman}/>
    </div>
  );
};
  
export default Music;