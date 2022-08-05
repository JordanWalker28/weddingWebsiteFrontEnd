import React from 'react';
import Header from '../components/GenericItems/PageHeader'
import WeddingDayTable from '../components/WeddingDay/WeddingDayTable'
import helpers from '../components/Functions/LanguageFunctions'

const WeddingDay = (language) => {

  const { block } = helpers.newFunction("weddingDay");
  const pageLang = language.language[0];

  return (
    <div className="content">
          <Header parentToChild = {pageLang ? block.titleEnglish : block.titleGerman}/>
          <WeddingDayTable language = {pageLang}/>
      </div>
  );
};
  
export default WeddingDay;