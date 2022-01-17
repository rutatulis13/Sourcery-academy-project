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
  const [modalStorie, setModalStorie] = useState();

  const toggleModal = (storie) => {
    setShowModal(!showModal);
    setModalStorie(storie);
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

  const UpdateStorie = (id) => {
    return (storie) => {
      const index = stories.findIndex((obj) => obj.id === id);
      const storiesCopy = [...stories];
      storiesCopy[index] = storie;
      setStories(storiesCopy);
      setModalStorie(storie);
    };
  };

  return (
    <>
      <MasonryLayout>
        {stories.map((storie, index) => {
          switch (storie.type) {
            case "birthday":
              return (
                <MasonryItem
                  key={storie.id}
                  span={storie.type !== "birthday" ? 2 : undefined}
                >
                  <BirthdayCard
                    key={`${index}_${storie.id}`}
                    storie={storie}
                    onLiked={UpdateStorie(storie.id)}
                    onDisliked={UpdateStorie(storie.id)}
                    toggleModal={toggleModal}
                  />
                </MasonryItem>
              );
            case "post":
              return (
                <MasonryItem
                  key={storie.id}
                  span={storie.type !== "birthday" ? 2 : undefined}
                >
                  <PhotoCard
                    key={`${index}_${storie.id}`}
                    storie={storie}
                    onLiked={UpdateStorie(storie.id)}
                    onDisliked={UpdateStorie(storie.id)}
                    toggleModal={toggleModal}
                  />
                </MasonryItem>
              );
            case "video":
              return (
                <MasonryItem
                  key={storie.id}
                  span={storie.type !== "birthday" ? 2 : undefined}
                >
                  <VideoCard
                    key={`${index}_${storie.id}`}
                    storie={storie}
                    onLiked={UpdateStorie(storie.id)}
                    onDisliked={UpdateStorie(storie.id)}
                    toggleModal={toggleModal}
                  />
                </MasonryItem>
              );
            default:
              return "";
          }
        })}
      </MasonryLayout>
      {showModal ? (
        <Modal setShowModal={setShowModal}>
          {modalStorie.type === "birthday" && (
            <BirthdayCard
              key={modalStorie.id}
              storie={modalStorie}
              onStorieChange={UpdateStorie(modalStorie.id)}
              onLiked={UpdateStorie(modalStorie.id)}
              onDisliked={UpdateStorie(modalStorie.id)}
              toggleModal={toggleModal}
              modalCard
            />
          )}
          {modalStorie.type === "post" && (
            <PhotoCard
              key={modalStorie.id}
              storie={modalStorie}
              onStorieChange={UpdateStorie(modalStorie.id)}
              onLiked={UpdateStorie(modalStorie.id)}
              onDisliked={UpdateStorie(modalStorie.id)}
              toggleModal={toggleModal}
              modalCard
            />
          )}
          {modalStorie.type === "video" && (
            <VideoCard
              key={modalStorie.id}
              storie={modalStorie}
              onStorieChange={UpdateStorie(modalStorie.id)}
              onLiked={UpdateStorie(modalStorie.id)}
              onDisliked={UpdateStorie(modalStorie.id)}
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
