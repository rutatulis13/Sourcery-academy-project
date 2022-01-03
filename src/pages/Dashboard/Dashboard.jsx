import React, { useState, useEffect } from "react";
import EatOutSection from "features/EatOutSection/EatOutSection";
import ReservationsSection from "features/ReservationsSection/ReservationsSection";
import HelloWidget from "features/HelloWidget/HelloWidget";
import MasonryLayout, {
  MasonryItem,
} from "components/MasonryLayout/MasonryLayout";

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "http://frontendsourceryweb.s3-website.eu-central-1.amazonaws.com/stories.json"
    )
      .then((res) => {
        if (!res.ok) {
          throw Error();
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.stories);
      })
      .catch(() => {
        setError("Whoops! There was an error while trying to show feed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <HelloWidget />
      <ReservationsSection />
      <EatOutSection />
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <MasonryLayout>
        {posts.map((post) => {
          return (
            <MasonryItem
              key={post.id}
              span={post.type !== "birthday" ? 2 : undefined}
            >
              {/* This is a placeholder for Cards component */}
            </MasonryItem>
          );
        })}
      </MasonryLayout>
    </>
  );
};

export default Dashboard;
