import React from "react";
import PropTypes from "prop-types";

import "./getStartedList.scss";
import { ReactComponent as SourceryLogo } from "assets/logo.svg";

function GetStartedList({ instructions }) {
  return (
    <div className="get-started-list">
      <SourceryLogo />
      <h2 className="get-started-list__title">Instructions:</h2>
      <ol className="get-started-list__list">
        {instructions.map((instruction) => (
          <li key={instruction.id} className="get-started-list__list-item">
            {instruction.instruction}
          </li>
        ))}
      </ol>
    </div>
  );
}

GetStartedList.propTypes = {
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      instruction: PropTypes.string,
    })
  ),
};

export default GetStartedList;
