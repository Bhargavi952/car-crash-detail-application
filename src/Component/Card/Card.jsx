import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "90%",
    border: "none",
    minHeight: "200px",
    margin: "5px 0",
    border: "3px solid red",
    "&:hover": {
      transform: "scale(0.9)",
      transition: " all 0.3s ease-in-out",
      cursor: "pointer",
    },
  },
  p: {
    textAlign: "center",
    fontWeight: "600",
    color: "#01bf71",
    fontSize: "18px",
  },
}));

const Card = ({ data }) => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        style={{
          justifyContent: "center",
        }}
        container
        spacing={2.5}
      >
        {data.map((item, id) => {
          return (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
              <Paper className={classes.paper}>
                <p className={classes.p}>{item.collision_id}</p>

                <p className={classes.p}>{item.vehicle_type_code1}</p>
                <p className={classes.p}>{item.vehicle_type_code2}</p>
              </Paper>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Card;
