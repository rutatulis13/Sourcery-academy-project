import React from "react";
import PropTypes from "prop-types";

function GetStartedList({ instructions }) {
  return (
    <div>
      <h2>Instructions:</h2>
      <ul>
        {instructions.map((instruction) => (
          <li key={instruction.id}>{instruction.instruction}</li>
        ))}
      </ul>
    </div>
  );
}

GetStartedList.propTypes = {
  instructions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      instruction: PropTypes.string,
    })
  ),
};

export default GetStartedList;
