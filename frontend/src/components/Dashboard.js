import React, { useState } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/session";
import Header from '../components/GenericItems/PageHeaderLanding'
import MainPolaroids from '../components/MainPolaroids'
import helpers from '../components/Functions/LanguageFunctions'
import PageOverviewTextTitle from '../components/GenericItems/PageOverviewTextTitle'
// import Diet from "../components/Diet";


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

const { block } = helpers.newFunction("index");

function App() {
      const language = (JSON.parse(localStorage.getItem('isBool')));
      return(
     <div className="content">
      <Header parentToChild = {language === true ? block.titleEnglish : block.titleGerman}/>
      <MainPolaroids/>
      <PageOverviewTextTitle introText = {language === true ? block.introTextEnglish : block.introTextGerman}/>
      <PageOverviewTextTitle introText = {language === true ? block.introTextEnglish2 : block.introTextGerman2}/>
	  </div>
      );
      };
export default connect(mapDispatchToProps)(App);

