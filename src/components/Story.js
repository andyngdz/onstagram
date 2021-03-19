import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import Avatar from "./Avatar";
import MockProfiles from "../mocks/profiles.json";

const useStyle = makeStyles((theme) => ({
  listAvatar: {
    overflow: "auto",
    display: "grid",
    gridAutoFlow: "column",
    gridGap: theme.spacing(2),
    height: `100px`,
  },
  big: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    border: `2px solid ${theme.palette.secondary.main}`,
    padding: theme.spacing(0.25),
  },
}));

const Story = () => {
  const style = useStyle();

  return (
    <AppBar position="relative" variant="outlined" color="transparent">
      <Toolbar className={style.listAvatar}>
        {MockProfiles.map((profile) => {
          return (
            <Avatar
              className={style.big}
              key={profile.id}
              {...profile}
            ></Avatar>
          );
        })}
      </Toolbar>
    </AppBar>
  );
};

export default Story;
