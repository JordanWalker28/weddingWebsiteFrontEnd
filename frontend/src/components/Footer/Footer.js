import React from "react";
import image from '../img/IMG_7696.jpg';

const style = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "60px",
  width: "100%"
};

const example = "http://via.placeholder.com/150x150"

export default function Footer() {
  return (
    <div className="logo">
      <img src={example} />
    </div>
  );
}
