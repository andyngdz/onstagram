import React from "react";
import Avatar from "./Avatar";
import { makeStyles } from "@material-ui/core/styles";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import { Avatar as AvatarCore } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  avatar: {
    margin: "16px",
  },
}));

const Profile = (props) => {
  const style = useStyle();
  return (
    <div className={style.root}>
      <div className={style.root}>
        <AvatarCore className={style.avatar} src={props.avatar}></AvatarCore>
        <div>{props.username}</div>
      </div>
      <div>
        <MoreHorizOutlinedIcon className={style.avatar} />
      </div>
    </div>
  );
};
export default Profile;
