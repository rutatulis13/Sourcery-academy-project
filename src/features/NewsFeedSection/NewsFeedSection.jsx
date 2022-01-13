import React, { useEffect, useState } from "react";
import BirthdayCard from "components/NewsFeedComponents/BirthdayCard/BirthdayCard";
import PhotoCard from "components/NewsFeedComponents/PhotoCard/PhotoCard";
import VideoCard from "components/NewsFeedComponents/VideoCard/VideoCard";
import Modal from "components/Modal/Modal";

const NewsFeedSection = () => {
  const [stories, setStories] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalStorie, setModalStorie] = useState();

  const toggleModal = (storie) => {
    setShowModal(!showModal);
    setModalStorie(storie);
  };

  // const onSubmit = (comment) => {
  //   onStorieChange({
  //     ...modalStorie,
  //     comments: [...modalStorie.comments, comment],
  //   });
  // };

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
    };
  };

  return (
    <>
      {stories.map((storie, index) => {
        switch (storie.type) {
          case "birthday":
            return (
              <BirthdayCard
                onStorieChange={UpdateStorie(storie.id)}
                key={`${index}_${storie.id}`}
                storie={storie}
                toggleModal={toggleModal}
              />
            );
          case "post":
            return (
              <PhotoCard
                key={`${index}_${storie.id}`}
                storie={storie}
                toggleModal={toggleModal}
              />
            );
          case "video":
            return (
              <VideoCard
                key={`${index}_${storie.id}`}
                storie={storie}
                toggleModal={toggleModal}
              />
            );
          default:
            return "";
        }
      })}
      {showModal ? (
        <Modal setShowModal={setShowModal}>
          {modalStorie.type === "birthday" && (
            <BirthdayCard
              onStorieChange={UpdateStorie(modalStorie.id)}
              key={modalStorie.id}
              storie={modalStorie}
              toggleModal={toggleModal}
            >
              {/* <Comments comments={modalStorie.comments} onSubmit={onSubmit} /> */}
            </BirthdayCard>
          )}
          {modalStorie.type === "post" && (
            <PhotoCard
              key={modalStorie.id}
              storie={modalStorie}
              toggleModal={toggleModal}
            />
          )}
          {modalStorie.type === "video" && (
            <VideoCard
              key={modalStorie.id}
              storie={modalStorie}
              toggleModal={toggleModal}
            />
          )}
        </Modal>
      ) : null}
    </>
  );
};

export default NewsFeedSection;
