import React from 'react';
import WeddingTableListItem from './WeddingTableListItem'
import items from '../../Data/WeddingDayData';
import helpers from '../Functions/LanguageFunctions'
import "../../Css/WeddingDay.css";
import IndexText from '../GenericItems/IndexText'

export default function WeddingDayTable(currentLang) {

	const listItems = items.map((item) => <WeddingTableListItem time={item.time} key={item.id} name = {helpers.GetWeddingDayTableName(currentLang.language, item)}
	information = {helpers.GetWeddingDayTableInfo(currentLang.language, item)}/>);
	const date = currentLang.language ? "26 November" : "26. November";
	const schedule = currentLang.language ? "Schedule of the Day" : "Tagesablauf";
    return (
		<div className="weddingDayTable">
			<ul className="main">
				<li className="date">
					<IndexText introText = {schedule}/>
					<h2>{date}</h2>
					<h2>2022</h2>
				</li>
				<li className="events">
					<ul className="events-detail">
						{listItems}		
					</ul>
				</li>
			</ul>
		</div>
    );
  }
  