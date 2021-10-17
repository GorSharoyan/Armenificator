import React from "react";
import { makeStyles } from "@material-ui/core/styles";

//components
// import SocialMediaBar from "../SocialMediaBar/SocialMediaBar";
// import AddressBar from "../AddressBar/AddressBar";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "50px",
    padding: "30px",
    backgroundColor: "#C0C0C0",
    display: "flex",
    borderRadius: "5px"
  },
  container: {
    display: "flex",
    flexDirection: "row"
  }
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      justify="space-between"
      alignItems="flex-end"
    >
      <div className={classes.container}>(C)Gor Sharoyan 2021 Beta</div>
      <div className={classes.container}>gor.sharoyan95@gmail.com</div>
    </Grid>
  );
}
