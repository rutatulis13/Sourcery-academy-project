import React from "react";
import PropTypes from "prop-types";
import BirthdayCard from "../BirthdayCard/BirthdayCard";
import PhotoCard from "../PhotoCard/PhotoCard";
import VideoCard from "../VideoCard/VideoCard";

const DynamicStoryCard = ({
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
            key={story.id}
            cardData={story}
            handleModalOpen={handleModalOpen}
            handleStoryChange={handleStoryChange}
            showComments={showComments}
          />
        );
      case "post":
        return (
          <PhotoCard
            key={story.id}
            cardData={story}
            handleModalOpen={handleModalOpen}
            handleStoryChange={handleStoryChange}
            showComments={showComments}
          />
        );
      case "video":
        return (
          <VideoCard
            key={story.id}
            cardData={story}
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
  handleStoryChange: PropTypes.func,
  handleModalOpen: PropTypes.func,
  showComments: PropTypes.bool,
  story: PropTypes.object,
};

export default DynamicStoryCard;
