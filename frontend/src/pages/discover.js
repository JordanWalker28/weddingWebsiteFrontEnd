import Header from '../components/GenericItems/PageHeader'
import PageOVerviewText from '../components/GenericItems/PageOverviewText'
import Items from '../components/Discover/Items';
import helpers from '../components/Functions/LanguageFunctions'

const Discover = (language) => {
	const { block } = helpers.newFunction("discover");
	const pageLang = language.language[0];

	return (
		<div className="content">
			<Header parentToChild = {pageLang === true ? block.titleEnglish : block.titleGerman}/>
			<PageOVerviewText introText = {pageLang === true ? block.introTextEnglish : block.introTextGerman}/>
			<Items lang = {pageLang}/>
		</div>
	);  
};
  
export default Discover;

