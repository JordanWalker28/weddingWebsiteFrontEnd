import { useEffect, useState } from "react";
import popupStyles from "../../Css/Custom-popup.module.css";
import PropTypes from "prop-types";

const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        visibility: show ? "visible" : "hidden",
        opacity: show ? "1" : "0"
      }}
      className={popupStyles.overlay}
    >
      <div className={popupStyles.popup}>
        <span className={popupStyles.close} onClick={closeHandler}>
          &times;
        </span>
        <br/>        <br/>
        <div className="card-image">
            <img src="https://www.rcpe.ac.uk/sites/default/files/pwp_3333.jpg" alt = "venuePlaceholdaer"/>
        </div>

        <div className="card-link">
          <a href="https://goo.gl/maps/rq1F9k5qjJRKAyV96" title="Read Full">
              <h1>Click here for directions</h1>
          </a>
        </div>
      </div>
    </div>
  );
};

CustomPopup.propTypes = {
  title: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};
export default CustomPopup;