import React from "react";
import Profile from "./Profile";
import MockProfiles from "../mocks/profiles.json";

const Post = () => {
  return (
    <div>
      {MockProfiles.map((profile) => {
        return <Profile key={profile.profileId} {...profile}></Profile>;
      })}
    </div>
  );
};
export default Post;
