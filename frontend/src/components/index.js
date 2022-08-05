import React from 'react';
import Header from '../components/GenericItems/PageHeaderLanding'
import MainPolaroids from '../components/MainPolaroids'
import helpers from '../components/Functions/LanguageFunctions'
import PageOverviewTextTitle from '../components/GenericItems/PageOverviewTextTitle'

const Home = (language) => {
  const { block } = helpers.newFunction("index");
  const pageLang = language.language[0];
  return (
    <div className="content">
      <Header parentToChild = {pageLang === true ? block.titleEnglish : block.titleGerman}/>
      <MainPolaroids/>
      <PageOverviewTextTitle introText = {pageLang === true ? block.introTextEnglish : block.introTextGerman}/>
      <PageOverviewTextTitle introText = {pageLang === true ? block.introTextEnglish2 : block.introTextGerman2}/>
	  </div>
  );
};
  
export default Home;