import React from "react";
import { connect } from "react-redux";
import { GetDataFromApi, UpdateForm } from "../utils/session";
import { useState } from "react";
import { useEffect } from "react";
import helpers from '../components/Functions/LanguageFunctions'

import "../Css/Form.css";

const mapStateToProps = ({ session }) => ({
  session,
});


function App({ session }) {
  const [textAddValue, updateInput] = useState();
  const addNewText = () => {
    if (!textAddValue) {
      return;
    } else {
      UpdateForm(session.username, textAddValue);
    }
  };

  const [data, setData] = useState([]);
  useEffect(() => {
    GetDataFromApi(session.username)
      .then((response) => setData(response))
      .then(updateInput(data?.name));
  }, []);

  const pageLang = (JSON.parse(localStorage.getItem('isBool')));
  const { block } = helpers.newFunction("music");
  const text = pageLang ? block.formTextEnglish : block.formTextGerman;
  
  return (
    <div id="form-main">
        <form className="form" id="form1">
          <p className="Diet">
            <textarea type="textbox" className="txtAdd" placeholder={text} defaultValue={data?.diet} onChange={(e) => updateInput(e.target.value)}/>
          </p>
          <div className="submit">
            <input type="submit" onClick={addNewText} value="Submit" id="button-blue"/>
            <div className="ease"></div>
          </div>
        </form>
      </div>
  );
}
export default connect(mapStateToProps)(App);

