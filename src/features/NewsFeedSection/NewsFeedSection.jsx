import React, { useEffect, useState } from "react";
import BirthdayCard from "components/NewsFeedComponents/BirthdayCard/BirthdayCard";
import PhotoCard from "components/NewsFeedComponents/PhotoCard/PhotoCard";
import VideoCard from "components/NewsFeedComponents/VideoCard/VideoCard";

const NewsFeedSection = () => {
  const [stories, setStories] = useState([]);

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
              />
            );
          case "post":
            return <PhotoCard key={`${index}_${storie.id}`} storie={storie} />;
          case "video":
            return <VideoCard key={`${index}_${storie.id}`} storie={storie} />;
          default:
            return "";
        }
      })}
    </>
  );
};

export default NewsFeedSection;
