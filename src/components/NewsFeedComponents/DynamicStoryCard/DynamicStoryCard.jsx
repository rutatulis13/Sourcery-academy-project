import React from "react";
import PropTypes from "prop-types";
import BirthdayCard from "../BirthdayCard/BirthdayCard";
import PhotoCard from "../PhotoCard/PhotoCard";
import VideoCard from "../VideoCard/VideoCard";

const DynamicStoryCard = ({
  id,
  cardData,
  handleModalOpen,
  handleStoryChange,
  showComments,
  story,
}) => {
  const renderCard = (story) => {
    switch (story.type) {
      case "birthday":
        return (
          <BirthdayCard
            key={id}
            cardData={cardData}
            handleModalOpen={handleModalOpen}
            handleStoryChange={handleStoryChange}
            showComments={showComments}
          />
        );
      case "post":
        return (
          <PhotoCard
            key={id}
            cardData={story}
            handleModalOpen={handleModalOpen}
            handleStoryChange={handleStoryChange}
            showComments={showComments}
          />
        );
      case "video":
        return (
          <VideoCard
            key={id}
            cardData={cardData}
            handleModalOpen={handleModalOpen}
            handleStoryChange={handleStoryChange}
            showComments={showComments}
          />
        );
      default:
        return "";
    }
  };

  return <>{renderCard(story)}</>;
};

DynamicStoryCard.propTypes = {
  id: PropTypes.node,
  cardData: PropTypes.object,
  handleStoryChange: PropTypes.func,
  handleModalOpen: PropTypes.func,
  showComments: PropTypes.bool,
  story: PropTypes.object,
};

export default DynamicStoryCard;
