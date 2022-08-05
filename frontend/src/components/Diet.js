import React from "react";
import { connect } from "react-redux";
import { GetDataFromApi, UpdateForm } from "../utils/session";
import { useState } from "react";
import { useEffect } from "react";

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

  return (
    <div className="App">
      <div className="container">
        <div className="eleContainer">
          <textarea type="textbox" className="txtAdd" placeholder="Hello" defaultValue={data?.diet} onChange={(e) => updateInput(e.target.value)}/>
          <button className="addNew" onClick={addNewText}>
            Add to Dictionary
          </button>
        </div>
      </div>
    </div>
  );
}
export default connect(mapStateToProps)(App);
