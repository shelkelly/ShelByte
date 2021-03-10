import React from "react";

function MainContainer(props) {
  return <div className="maincontainer" id={props.id}>{props.children}</div>;
}

export default MainContainer;