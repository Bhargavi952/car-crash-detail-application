import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

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

const Card = ({ data, date, toggle }) => {
  const classes = useStyles();

  console.log(toggle);

  const dateFilter = (item) => {
    // console.log(date, moment(item.crash_date).utc().format("YYYY-MM-DD"));

    return moment(item.crash_date).utc().format("YYYY-MM-DD").includes(date);
  };
  return (
    <>
      {toggle ? (
        <Grid
          style={{
            justifyContent: "center",
          }}
          container
          spacing={2.5}
        >
          {data?.filter(dateFilter).map((item) => {
            return (
              <Grid key={item.collision_id} item xs={12} sm={6} md={4} lg={4}>
                <Link className={styles.link} to={`/${item.collision_id}`}>
                  <Paper className={classes.paper}>
                    <p className={classes.p}>{item.collision_id}</p>
                    <p className={classes.p}>{item.vehicle_type_code1}</p>
                    <p className={classes.p}>{item.vehicle_type_code2}</p>
                    <p className={classes.p}>Time: {item.crash_time}</p>
                    <p className={classes.p}>Date:{item.crash_date}</p>
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <table>
          {data?.filter(dateFilter).map((item) => {
            return (
              <Link
                className={styles.link}
                key={item.collision_id}
                to={`/${item.collision_id}`}
              >
                <tr>
                  <td>{item.vehicle_type_code1}</td>
                  <td>{item.vehicle_type_code2}</td>
                  <td>{item.crash_time}</td>
                  <td>{item.crash_date}</td>
                </tr>
              </Link>
            );
          })}
        </table>
      )}
    </>
  );
};

export default Card;
