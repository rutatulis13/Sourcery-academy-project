import React, { useEffect, useState } from "react";
import Modal from "components/Modal/Modal";
import MasonryLayout, {
  MasonryItem,
} from "components/MasonryLayout/MasonryLayout";

import "./NewsFeedSection.scss";
import DynamicStoryCard from "components/NewsFeedComponents/DynamicStoryCard/DynamicStoryCard";

const NewsFeedSection = () => {
  const [stories, setStories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeStory, setActiveStory] = useState(null);

  const handleModalClose = () => {
    setActiveStory(null);
    setShowModal(false);
  };

  const handleModalOpen = (storyId) => {
    setShowModal(true);
    setActiveStory(storyId);
  };

  useEffect(() => {
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/stories.json"
    )
      .then((res) => res.json())
      .then((result) => {
        if (result?.stories) {
          setStories(result.stories);
        }
      });
  }, []);

  const updateStory = (id, story) => {
    const index = stories.findIndex((obj) => obj.id === id);
    const storiesCopy = [...stories];
    storiesCopy[index] = story;
    setStories(storiesCopy);
  };

  const getStoryById = (id) => {
    return stories.find((story) => story.id === id);
  };

  return (
    <section className="news-section">
      <h2 className="news-section__title">News and Stories</h2>
      <MasonryLayout>
        {stories.map((story) => (
          <MasonryItem
            key={story.id}
            span={story.type !== "birthday" ? 2 : undefined}
          >
            <DynamicStoryCard
              id={story.id}
              cardData={story}
              handleModalOpen={handleModalOpen}
              handleStoryChange={updateStory}
              story={story}
            />
          </MasonryItem>
        ))}
      </MasonryLayout>
      {activeStory && showModal && (
        <Modal handleModalClose={handleModalClose}>
          <DynamicStoryCard
            id={getStoryById(activeStory).id}
            cardData={getStoryById(activeStory)}
            handleModalOpen={handleModalOpen}
            handleStoryChange={updateStory}
            story={getStoryById(activeStory)}
            showComments
          />
        </Modal>
      )}
    </section>
  );
};

export default NewsFeedSection;
