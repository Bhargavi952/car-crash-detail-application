import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "80%",
    border: "none",
    minHeight: "200px",
    margin: "10px 0",
    "&:hover": {
      transform: "scale(0.9)",
      transition: " all 0.3s ease-in-out",
      cursor: "pointer",
    },
  },
  p: {
    textAlign: "center",
    fontWeight: "600",
    color: "#000000",
    fontSize: "18px",
  },
}));

const Card = ({ data, date }) => {
  const classes = useStyles();

  const dateFilter = (item) => {
    // console.log(date, moment(item.crash_date).utc().format("YYYY-MM-DD"))

    return moment(item.crash_date).utc().format("YYYY-MM-DD").includes(date);
  };
  return (
    <div>
      <Grid
        style={{
          justifyContent: "center",
        }}
        container
        spacing={2.5}
      >
        {data?.filter(dateFilter).map((item, id) => {
          return (
            <Grid key={id} item xs={12} sm={6} md={4} lg={4}>
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
