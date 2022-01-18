import React, { useEffect, useState } from "react";
import BirthdayCard from "components/NewsFeedComponents/BirthdayCard/BirthdayCard";
import PhotoCard from "components/NewsFeedComponents/PhotoCard/PhotoCard";
import VideoCard from "components/NewsFeedComponents/VideoCard/VideoCard";
import Modal from "components/Modal/Modal";
import MasonryLayout, {
  MasonryItem,
} from "components/MasonryLayout/MasonryLayout";

const NewsFeedSection = () => {
  const [stories, setStories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalStory, setModalStory] = useState();

  const toggleModal = (story) => {
    setShowModal(!showModal);
    setModalStory(story);
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

  const updateStorie = (id) => {
    return (story) => {
      const index = stories.findIndex((obj) => obj.id === id);
      const storiesCopy = [...stories];
      storiesCopy[index] = story;
      setStories(storiesCopy);
      setModalStory(story);
    };
  };

  const renderCard = (story) => {
    switch (story.type) {
      case "birthday":
        return (
          <BirthdayCard
            key={story.id}
            cardData={story}
            toggleModal={toggleModal}
            handleStoryChange={updateStorie(story.id)}
            //modalStory={story.id}
          />
        );
      case "post":
        return (
          <PhotoCard
            key={story.id}
            cardData={story}
            toggleModal={toggleModal}
            handleStoryChange={updateStorie(story.id)}
            //modalStory={story.id}
          />
        );
      case "video":
        return (
          <VideoCard
            key={story.id}
            cardData={story}
            toggleModal={toggleModal}
            handleStoryChange={updateStorie(story.id)}
            //modalStory={story.id}
          />
        );
      default:
        return "";
    }
  };

  return (
    <>
      <MasonryLayout>
        {stories.map((story) => (
          <MasonryItem
            key={story.id}
            span={story.type !== "birthday" ? 2 : undefined}
          >
            {renderCard(story)}
          </MasonryItem>
        ))}
      </MasonryLayout>
      {showModal ? (
        <Modal setShowModal={setShowModal}>
          {modalStory.type === "birthday" && (
            <BirthdayCard
              key={modalStory.id}
              cardData={modalStory}
              handleStoryChange={updateStorie(modalStory.id)}
              toggleModal={toggleModal}
              modalCard
            />
          )}
          {modalStory.type === "post" && (
            <PhotoCard
              key={modalStory.id}
              cardData={modalStory}
              handleStoryChange={updateStorie(modalStory.id)}
              toggleModal={toggleModal}
              modalCard
            />
          )}
          {modalStory.type === "video" && (
            <VideoCard
              key={modalStory.id}
              cardData={modalStory}
              handleStoryChange={updateStorie(modalStory.id)}
              toggleModal={toggleModal}
              modalCard
            />
          )}
        </Modal>
      ) : null}
    </>
  );
};

export default NewsFeedSection;
