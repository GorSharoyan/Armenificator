import React from "react";
import { useState } from "react";

//services
import armenificate from "../../services/armenificate.service";

//assets
import kaby from "../../assets/kaby.png";

//UI
import { TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  input: {
    padding: "5px",
    borderRadius: "55px"
  },
  text: {
    padding: "15px",
    border: "1px solid black",
    borderRadius: "34px",
    height: "90px",
    width: "800px",
    textAlign: "baseline"
  }
});

export default function Armenificator() {
  const [value, setValue] = useState("");
  const classes = useStyles();

  //basic input change function
  const handleInputChange = (val) => {
    const input = val.target.value;

    setValue(armenificate(input));
  };

  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <div>
          <img height="350px" src={kaby} alt="Kaby_Lame" />
        </div>
        <div className={classes.input}>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="մուտքագրեք թիվը"
            variant="outlined"
            onChange={handleInputChange}
          />
        </div>
        <div className={classes.text}>
          <p>{value}</p>
        </div>
      </Grid>
    </div>
  );
}
