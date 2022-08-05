import Header from '../components/GenericItems/PageHeader'
import IndexText from '../components/GenericItems/IndexText'
import Items from '../components/Discover/Items';
import helpers from '../components/Functions/LanguageFunctions'

const Discover = () => {
	const { block } = helpers.newFunction("discover");
	const pageLang = (JSON.parse(localStorage.getItem('isBool')));
	
	return (
		<div className="content">
			<Header parentToChild = {pageLang === true ? block.titleEnglish : block.titleGerman}/>
			<IndexText introText = {pageLang === true ? block.introTextEnglish : block.introTextGerman}/>
			<Items lang = {pageLang}/>
		</div>
	);  
};
  
export default Discover;

