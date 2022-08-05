import items from '../../Data/PageText';

const helpers = {
    newFunction: function newFunction(inputPage){
    let block = items.find(item => item.id === inputPage)
	return { block };
},

    GetWeddingDayTableName: function GetWeddingDayTableName(language, item) {
    const title = language === true ? item.titleEnglish : item.titleGerman;
    return title;
},
    GetWeddingDayTableInfo: function GetWeddingDayTableInfo(language, item) {
    const title = language === true ? item.informationEnglish : item.informationGerman;
    return title;
}

}

export default helpers;
