import React from 'react';
import Map from '../components/Venue/Map';
import Header from '../components/GenericItems/PageHeader'
import helpers from '../components/Functions/LanguageFunctions'
import IndexText from '../components/GenericItems/IndexText'
import Address from '../components/GenericItems/Address'
import PageOverviewTextTitle from '../components/GenericItems/PageOverviewTextTitle'

const Venue = (language) => {

  const { block } = helpers.newFunction("venue");
  const pageLang = language.language[0];

  return (
    <div className="content">
          <Header parentToChild = {pageLang === true ? block.titleEnglish : block.titleGerman}/>
          <IndexText introText = {pageLang === true ? block.introTextEnglish : block.introTextGerman}/>
          <Address introText = {pageLang === true ? block.addressLineOne : block.addressLineOneGerman}/>
          <Address introText = {block.addressLineTwo}/>
          <Address introText = {block.addressLineThree}/>
          <Address introText = {block.postcode}/>
          <Map/>
    </div>
  );
};
  
export default Venue;