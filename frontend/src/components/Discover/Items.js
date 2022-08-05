import { useState } from 'react';
import items from '../../Data/DiscoverData';
import Menu from './Menu';
import Button from './Button';
import "../../Css/Discover.css";

const allCategories = [...new Set(items.map(item => item.category))];
const allCategoriesGerman = [...new Set(items.map(item => item.categoryTest))];

function Items({lang}) {
  const [menuItem, setMenuItem] = useState(items);
  const [buttons] = useState(lang ? allCategories : allCategoriesGerman);

  const filter = (button) =>{
    const filteredData = items.filter(item => lang ? (item.category ===  button) : (item.categoryTest ===  button));
    setMenuItem(filteredData)
  }


  return (
    <div className="App">
      <Button button={buttons} filter={filter} />
      <Menu menuItem={menuItem} language = {lang}/>
    </div>
  );
}

export default Items;