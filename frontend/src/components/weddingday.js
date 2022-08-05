import React from 'react';
import Header from '../components/GenericItems/PageHeader'
import WeddingDayTable from '../components/WeddingDay/WeddingDayTable'
import helpers from '../components/Functions/LanguageFunctions'

const WeddingDay = () => {

  const { block } = helpers.newFunction("weddingDay");
  const pageLang = (JSON.parse(localStorage.getItem('isBool')));

  return (
    <div className="content">
          <Header parentToChild = {pageLang ? block.titleEnglish : block.titleGerman}/>
          <WeddingDayTable language = {pageLang}/>
      </div>
  );
};
  
export default WeddingDay;