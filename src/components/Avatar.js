import React from "react";
import {
  makeStyles,
  Avatar as AvatarCore,
  Typography,
} from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  username: {
    maxWidth: theme.spacing(7),
    paddingTop: theme.spacing(),
    fontSize: `0.65rem`,
  },
  circularAvatar: {
    borderRadius: "100%",
  },
}));

const Avatar = (props) => {
  const style = useStyle();

  return (
    <div className={style.root}>
      <AvatarCore
        classes={{ img: style.circularAvatar }}
        src={props.avatar}
        {...props}
      ></AvatarCore>
      <Typography noWrap className={style.username}>
        {props.username}
      </Typography>
    </div>
  );
};

export default Avatar;
